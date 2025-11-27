import { type ElementType } from "react";

interface IconButtonProps {
  label: string;
  icon?: ElementType;
  variant?: "solid" | "outline";
}

export default function IconButton({
  label,
  icon: Icon,
  variant = "solid",
}: IconButtonProps) {
  const base = "flex items-center gap-[6px] px-[18px] py-[7px] rounded-[4px]";

  const styles =
    variant === "solid"
      ? "bg-white text-black"
      : "border border-white text-white";

  return (
    <button className={`${base} ${styles}`}>
      {Icon && <Icon size={16} />}
      {label}
    </button>
  );
}
