// src/components/TechIcon/TechImg.tsx
type TechImgProps = {
  src: string
  alt: string
  className?: string
}

export default function TechImg({ src, alt, className = "" }: TechImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-[13px] h-[13px] ${className}`}
      draggable={false}
    />
  )
}
