interface PhotoProps {
  src: string;
  alt: string;
}

export default function Photo({
  src, alt,
}: PhotoProps) {
  return (
    <picture className="rounded-[inherit]">
      <source srcSet={src} />
      <img
        className="h-full w-full rounded-[inherit] bg-stone-300 object-cover"
        src={src}
        alt={alt}
        loading="lazy"
      />
    </picture>
  );
}
