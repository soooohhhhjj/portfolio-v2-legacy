interface Props {
  x: number;
  y: number;
  title: string;
  image?: string;
  stack?: string[];
}

export default function MemoryCard({ x, y, title, image, stack }: Props) {
  return (
    <div
      className="memory-card absolute"
      style={{ left: x, top: y }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
      )}

      <h3 className="mt-3 font-semibold text-white">{title}</h3>

      {stack && (
        <div className="mt-2 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="memory-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
