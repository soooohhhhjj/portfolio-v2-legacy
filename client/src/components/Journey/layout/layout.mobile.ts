import type { JourneyItemContent } from "../types/journey.types";
import { journeyContent } from "../journey.content";
import type { LayoutConfig, LayoutItem } from "./layout.types";
import { baseEdges } from "./layout.edges";

const canvasWidth = 370;
const paddingX = 0;
const cardWidth = canvasWidth - paddingX * 2;
const parentSize = 55;
const gapAfterParent = 22;
const gapAfterCard = 28;
const startY = 70;

const getCardHeight = (item: JourneyItemContent) => {
  if (item.type === "placeholder") return 220;
  if (item.type === "internship") return 320;
  return 300;
};

const buildStackedItems = () => {
  let y = startY;
  const items: LayoutItem[] = [];

  for (const item of journeyContent) {
    if (item.type === "parent") {
      items.push({
        id: item.id,
        x: (canvasWidth - parentSize) / 2,
        y,
        width: parentSize,
        height: parentSize,
      });
      y += parentSize + gapAfterParent;
      continue;
    }

    const height = getCardHeight(item);
    items.push({
      id: item.id,
      x: paddingX,
      y,
      width: cardWidth,
      height,
    });
    y += height + gapAfterCard;
  }

  return { items, height: y + 40 };
};

const stacked = buildStackedItems();

export const layoutMobile: LayoutConfig = {
  id: "mobile",
  minWidth: 0,
  maxWidth: 639,
  canvasWidth,
  extraHeight: 200,
  scaleWithContainer: true,
  items: stacked.items,
  edges: baseEdges,
};
