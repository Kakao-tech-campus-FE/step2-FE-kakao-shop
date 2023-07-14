import { FC, ComponentPropsWithoutRef, useEffect, useState } from "react";

type ImageProps = ComponentPropsWithoutRef<"img">;

interface LazyImageProps extends ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: FC<LazyImageProps> = ({ src, alt, className, ...rest }) => {
  const [imageSrc, setImageSrc] = useState(
    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
  );
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;
    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver && !didCancel) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setTimeout(() => {
                  setImageSrc(src);
                }, 1000);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.5,
            rootMargin: "75%",
          }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <picture>
      <img
        ref={setImageRef}
        className={`${imageSrc !== src ? "animate-pulse" : ""} ${
          className ?? ""
        }`}
        src={imageSrc}
        alt={alt}
        {...rest}
      />
    </picture>
  );
};

export default LazyImage;
