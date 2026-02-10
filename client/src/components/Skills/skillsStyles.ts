export const skillsStyles = {
  section: "section-style relative flex flex-col",
  content: "section-content flex flex-col relative z-10",
  wrapper: "responsiveness mb-[300px]",
  grid: "mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6",
  header: {
    wrapper: "text-center relative",
    glow: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-blue-500/10 blur-[100px] rounded-full",
    title:
      "font-bruno lg:mt-[90px] text-[35px] sm:text-[38px] lg:text-5xl font-bold tracking-[2px] text-white journey-header relative",
    subtitle:
      "lg:mt-[12px] text-[13px] sm:text-[16px] lg:text-[17px] max-w-[80%] md:max-w-[100%] mx-auto text-white/60 tracking-[.3px] font-jura journey-subheader relative",
  },
  card: {
    shell:
      "group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-1",
    topAccent: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
    shine: "absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent",
    body: "relative z-10 p-6 flex flex-col gap-4",
    titleRow: "flex items-center gap-3 pb-4 border-b border-white/5",
    iconBox: "flex items-center justify-center group-hover:scale-105 transition-all duration-300",
    title:
      "font-bruno text-white text-[16px] sm:text-[17px] font-semibold tracking-[0.5px]",
    description:
      "font-jura text-white/50 text-[13px] sm:text-[14px] leading-relaxed tracking-[0.2px]",
    pills: "flex flex-wrap gap-2 pt-1",
    cornerAccent: "absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
  },
  pill: {
    shell:
      "group relative flex items-center gap-2 border border-white/10 rounded-lg px-3 py-2 text-white/90 text-[12px] tracking-[0.3px] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5",
    icon: "flex items-center group-hover:scale-110 transition-transform duration-300",
    iconFallback: "w-[13px] h-[13px] rounded-full border border-white/60",
    star: "absolute -top-1 -right-1 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  },
};