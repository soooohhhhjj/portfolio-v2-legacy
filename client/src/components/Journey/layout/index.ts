import type { LayoutConfig } from "./layout.types";
import { layoutDesktop } from "./layout.desktop.lg";
import { layoutMobile } from "./layout.mobile";
import { layoutTablet } from "./layout.tablet";

export const journeyLayouts: LayoutConfig[] = [
  layoutMobile,
  layoutTablet,
  layoutDesktop,
];

export const pickLayout = (width: number | null) => {
  if (!width) return layoutDesktop;

  return (
    journeyLayouts.find(
      (layout) =>
        width >= layout.minWidth &&
        (layout.maxWidth === undefined || width <= layout.maxWidth)
    ) ?? layoutDesktop
  );
};
