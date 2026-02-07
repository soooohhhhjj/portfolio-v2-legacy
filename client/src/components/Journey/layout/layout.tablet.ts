import type { LayoutConfig } from "./layout.types";
import { layoutDesktop } from "./layout.desktop.lg";

export const layoutTablet: LayoutConfig = {
  ...layoutDesktop,
  id: "tablet",
  minWidth: 640,
  maxWidth: 1023,
  items: layoutDesktop.items.map((item) => ({ ...item })),
  edges: layoutDesktop.edges.map((edge) => ({
    ...edge,
    via: edge.via ? edge.via.map((point) => ({ ...point })) : undefined,
  })),
};
