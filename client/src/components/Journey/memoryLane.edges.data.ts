import type { MemoryEdge } from "./memoryLane.edges";

export const edges: MemoryEdge[] = [
  {
    from: "node1",
    to: "node1-c1",
    fromAnchor: "bottom",
    toAnchor: "right",
    via: [
      { x: 464, y: 346 },
    ],
  },
  {
    from: "node1",
    to: "node1-c2",
    fromAnchor: "bottom",
    toAnchor: "left",
    via: [
      { x: 464, y: 396 },
    ],
  },

];
