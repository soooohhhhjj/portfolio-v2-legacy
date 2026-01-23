import type { MemoryItem as Item } from "./memoryLane.data";

export default function MemoryItem(props: Item) {
  const { x, y, width, height, type } = props;

  if (type === "parent" && props.icon) {
    const Icon = props.icon;

    return (
      <div
        className="memory-node absolute flex items-center justify-center"
        style={{ left: x, top: y, width, height }}
      >
        <Icon size={22} />
      </div>
    );
  }

  return (
    <div
      className="memory-card absolute"
      style={{ left: x, top: y, width, height }}
    >
      <h3 className="text-white font-semibold">{props.title}</h3>

      {props.stack && (
        <div className="mt-2 flex flex-wrap gap-2">
          {props.stack.map((tech) => (
            <span key={tech} className="memory-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
