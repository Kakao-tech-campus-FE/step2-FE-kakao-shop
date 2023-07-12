interface PhotoProps {
  src: string;
  alt: string;
}

export default function Photo({
  src, alt,
}: PhotoProps) {
  return (
    <picture className="h-[inherit] w-[inherit] rounded-[inherit]">
      <source srcSet={src} />
      <img className="h-[inherit] w-[inherit] rounded-[inherit] object-cover" src={src} alt={alt} />
    </picture>
  );
}
