import type { MemoryItem as Item } from "./memoryLane.data";
import { techIconMap } from "./memoryLane.techIcons";
import GlassCard from "../../components/ui/GlassCard";

export default function MemoryItem(props: Item) {
  const { x, y, width, height, type } = props;

  // PARENT NODE
  if (type === "parent" && props.icon) {
    const Icon = props.icon;

    return (
      <div
        className="
          absolute
          flex items-center justify-center
          memory-node
        "
        style={{ left: x, top: y, width, height }}
      >
        <Icon size={26} strokeWidth={1.3} />
      </div>
    );
  }

  const hasTech = props.techTags && props.techTags.length > 0;
  const hasHighlights =
    props.highlightTags && props.highlightTags.length > 0;

  // CHILD CARD
  return (
    <div
      className="
        absolute
        flex flex-col
        memory-card
      "
      style={{ left: x, top: y, width, height }}
    >
      {/* IMAGE */}
      {props.image && (
        <GlassCard
          corner="rounded-[3px]"
          shadow="shadow-[0_0_10px_rgba(255,255,255,0.15)]"
          className="mb-0"
        >
          <div className="">
            <img
              src={props.image}
              alt={props.title}
              draggable={false}
              className="w-full object-cover"
            />

          </div>
        </GlassCard>
      )}

      {/* CONTENT CONTAINER */}
      <div className="p-[2px]">
        {/* TITLE */}
      {props.title && (
        <h3 className="mt-3 text-[20px] text-white/80 font-medium text-left tracking-[.5px] font-montserrat leading-tight memory-card-title">
          {props.title}
        </h3>
      )}

      {/* DETAILS */}
      {props.details && (
        <p className="mt-[5px] px-[1px] text-[11px] text-white/70 leading-snug font-montserrat">
          {props.details}
        </p>
      )}

      {/* TAGS ROW */}
      {(hasTech || hasHighlights) && (
        <div
          className="
            mt-2
            inline-flex
            flex-wrap
            items-start
            justify-start
            gap-1
            self-start
          "
        >
          {/* TECH TAGS */}
          {props.techTags?.map((tech) => (
            <div
              key={tech}
              className="
                flex items-center gap-[2px]
                rounded-[3px]
                bg-white/5
                border border-white/10
                text-gray-300
                px-[9px] py-[4px]
                text-[9px]
                font-[400] font-montserrat
                leading-none
              "
            >
              {techIconMap[tech] || null}
              <span>{tech}</span>
            </div>
          ))}

          {/* BULLET SEPARATOR */}
          {hasTech && hasHighlights && (
            <span className="px-0.5 mt-[2px] text-[12px] leading-none text-gray-400 select-none">
              •
            </span>
          )}

          {/* HIGHLIGHT TAGS */}
          {props.highlightTags?.map((tag) => (
            <div
              key={tag}
              className="
                flex items-center
                rounded-[3px]
                bg-white/5
                border border-white/10
                text-gray-300
                px-[9px] py-[4px]
                text-[9px]
                font-medium font-montserrat
                leading-none
              "
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
