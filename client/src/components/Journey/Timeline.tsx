import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,

} from "react";
import { timelineItems } from "./timeline.data";
import { techIconMapSkills } from "../../components/TechIcon/techIconMapSkills";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spikeRefs = useRef<HTMLDivElement[]>([]);

  const [energyTop, setEnergyTop] = useState(0);
  const energyTopRef = useRef(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const SMOOTHING = 0.12;

    let rafId: number;

    const update = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const magnetCenter = viewportH * 0.5;
      const preReadTrigger = viewportH * 0.7;

      // ⭐ BIGGER ENERGY HEIGHT (IMPORTANT)
      const energyHeight = viewportH * 1.6;

      // -------------------------
      // STEP 1 — Active Card Lock
      // -------------------------
      let newActive = activeIndexRef.current;

      spikeRefs.current.forEach((spike, i) => {
        if (!spike) return;

        const spikeRect = spike.getBoundingClientRect();
        if (spikeRect.top < preReadTrigger) {
          newActive = i;
        }
      });

      activeIndexRef.current = newActive;

      // -------------------------
      // STEP 2 — Target Position
      // -------------------------
      let targetTop: number;

      const activeSpike = spikeRefs.current[activeIndexRef.current];

      if (activeSpike) {
        const spikeRect = activeSpike.getBoundingClientRect();
        const spikeCenter = spikeRect.top + spikeRect.height / 2;

        // ⭐ TRUE CENTER LOCK
        targetTop =
          spikeCenter -
          rect.top -
          energyHeight / 2;
      } else {
        targetTop =
          magnetCenter -
          rect.top -
          energyHeight / 2;
      }

      // ❌ REMOVE HARD CLAMP (tube will mask instead)

      // -------------------------
      // STEP 3 — Smooth Motion
      // -------------------------
      energyTopRef.current +=
        (targetTop - energyTopRef.current) * SMOOTHING;

      setEnergyTop(energyTopRef.current);

      rafId = requestAnimationFrame(update);
    };

    update();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full mt-24"
    >
      {/* ⭐ TUBE MASK WINDOW */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[2px] h-full overflow-hidden">

        {/* Base Tube */}
        <div className="absolute inset-0 bg-white/10" />

        {/* ⭐ ENERGY BEAM (OVERSIZED — MASKED BY TUBE) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[2px]"
          style={{
            top: energyTop,
            height: "160vh",
            background: `
              linear-gradient(
                to bottom,
                rgba(255,255,255,0) 0%,
                rgba(255,255,255,0.2) 15%,
                rgba(255,255,255,0.4) 30%,
                rgba(255,255,255,0.7) 45%,
                rgba(255,255,255,0.95) 50%,
                rgba(255,255,255,0.7) 55%,
                rgba(255,255,255,0.4) 70%,
                rgba(255,255,255,0.2) 85%,
                rgba(255,255,255,0) 100%
              )
            `,
            filter: "blur(0.4px)",
          }}
        />
      </div>

      {/* Timeline Content */}
      <div className="relative flex flex-col gap-14">
        {timelineItems.map((item, idx) => (
          <TimelineRow
            key={item.id}
            item={item}
            index={idx}
            setSpikeRef={(el) => {
              if (el) spikeRefs.current[idx] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineRow({
  item,
  index,
  setSpikeRef,
}: {
  item: TimelineItem;
  index: number;
  setSpikeRef: (el: HTMLDivElement | null) => void;
}) {
  const isRight = index % 2 === 0;

  return (
    <div className="relative w-full">
      {/* Connector spike */}
      <div
        ref={setSpikeRef}
        className={`
          absolute top-60
          left-[50.1%]
          w-0 h-0
          transition-all duration-300
          ${
            isRight
              ? `
                border-y-[1px] border-y-transparent
                border-l-[32px]
                border-l-white/20
              `
              : `
                border-y-[1px] border-y-transparent
                border-r-[32px]
                border-r-white/20
                -translate-x-full
              `
          }
        `}
      />

      <div className="grid grid-cols-2">
        <div className={`pr-10 ${isRight ? "" : "flex justify-end"}`}>
          {!isRight && <TimelineCard item={item} />}
        </div>

        <div className={`pl-10 ${isRight ? "flex justify-start" : ""}`}>
          {isRight && <TimelineCard item={item} />}
        </div>
      </div>
    </div>
  );
}


type TimelineItem = {
  id: string;
  date: string;
  title: string;
  image?: string;
  storyStanzas: string[];
  takeawayBullets: string[];
  tech: string[];
};

function TimelineCard({ item }: { item: TimelineItem }) {
  const [tab, setTab] = useState<"takeaways" | "story">("takeaways");

  // refs point to the INNER content wrapper (not the half-width panel)
  const takeawaysRef = useRef<HTMLUListElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState<number>(0);

  const measure = useCallback(() => {
    const el = tab === "takeaways" ? takeawaysRef.current : storyRef.current;
    if (!el) return;
    setContentHeight(el.scrollHeight);
  }, [tab]);

  // measure immediately when tab changes or item changes
  useLayoutEffect(() => {
    measure();
  }, [measure, item.id]);

  // measure on resize (attach once, stable)
  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div className="w-full rounded-xl">
      {/* Header */}
      <div className="p-6 pb-3">
        <p className="text-[13px] text-gray-400 font-[500] tracking-[.2px] font-montserrat">
          {item.date}
        </p>

        <h3 className="mt-1 text-[23px] font-bold text-white font-montserrat">
          {item.title}
        </h3>

        {item.image && (
          <div className="mt-4 rounded-[5px] overflow-hidden border border-white/10">
            <img
              src={item.image}
              alt={item.title}
              draggable={false}
              className="w-full h-[221px] object-cover"
            />
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="relative flex gap-6 border-b border-white/10">
          {/* Sliding liquid underline */}
          <span
            className={`
              absolute bottom-0 h-[2px] w-[88px]
              bg-white
              transition-transform duration-300 ease-out
              ${tab === "takeaways" ? "translate-x-0" : "translate-x-[104px]"}
            `}
          />

          <button
            onClick={() => setTab("takeaways")}
            className={`
              relative pb-[6px] px-3 text-[13px]
              tracking-[.3px] font-normal font-montserrat
              ${tab === "takeaways" ? "text-white" : "text-white/45"}
            `}
          >
            Takeaways
          </button>

          <button
            onClick={() => setTab("story")}
            className={`
              relative pb-[6px] px-3 text-[13px]
              tracking-[.3px] font-normal font-montserrat
              ${tab === "story" ? "text-white" : "text-white/45"}
            `}
          >
            Story
          </button>
        </div>
      </div>

      {/* Content Slider */}
      <div className="px-6 pt-4">
        {/* viewport */}
        <div
          className="relative overflow-hidden transition-[height] duration-300 ease-out"
          style={{ height: contentHeight || "auto" }}
        >
          {/* track */}
          <div
            className={`
              flex w-[200%]
              transition-transform duration-400 ease-out
              ${tab === "takeaways" ? "-translate-x-1/2" : "translate-x-0"}
            `}
          >
            {/* Story panel (LEFT) */}
            <div className="w-1/2 pr-4">
              <div
                ref={storyRef}
                className="space-y-4 text-[13px] leading-relaxed font-lexend font-[200] tracking-[.7px] text-white/90"
              >
                {item.storyStanzas.map((s, i) => (
                  <p key={i}>{s}</p>
                ))}
              </div>
            </div>

            {/* Takeaways panel (RIGHT) */}
            <div className="w-1/2 pl-4">
              <ul
                ref={takeawaysRef}
                className="space-y-2 text-[13px] leading-relaxed list-disc pl-4 font-lexend font-[200] tracking-[.7px] text-white/90"
              >
                {item.takeawayBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tech (UNAFFECTED by transitions) */}
        <div className="mt-3 flex flex-wrap gap-[4px]">
          {item.tech.map((t) => {
            const Icon = techIconMapSkills[t];
            if (!Icon) return null;

            return (
              <span
                key={t}
                className="
                  flex items-center gap-[4px]
                  text-[11px]
                  px-3 py-1
                  rounded-[4px]
                  border border-white/10
                  bg-white/5
                  text-white/70
                  font-montserrat
                "
              >
                {Icon}
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

