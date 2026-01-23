import type { MemoryItem, MemoryEdge } from "./memoryLane.data";

interface Props {
  edge: MemoryEdge;
  items: Record<string, MemoryItem>;
}

export default function MemoryPath({ edge, items }: Props) {
  const from = items[edge.from];
  const to = items[edge.to];

  if (!from || !to) return null;

  // Helper to get the anchor coordinates
  const getAnchorPoint = (
    item: MemoryItem,
    anchor: "top" | "bottom" | "left" | "right"
  ) => {
    const { x, y, width, height } = item;

    switch (anchor) {
      case "top":
        return { x: x + width / 2, y };
      case "bottom":
        return { x: x + width / 2, y: y + height };
      case "left":
        return { x, y: y + height / 2 };
      case "right":
        return { x: x + width, y: y + height / 2 };
    }
  };

  const start = getAnchorPoint(from, edge.fromAnchor);
  const end = getAnchorPoint(to, edge.toAnchor);

  // NEW: Build points array including manual middle points
  const points = [start, ...(edge.via ?? []), end];

  // Convert points to SVG polyline string
  const pointsString = points.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <polyline
      points={pointsString}
      fill="none"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth={2}
      markerEnd="url(#arrow)"
    />
  );
}
