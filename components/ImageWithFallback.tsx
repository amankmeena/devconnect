"use client";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithFallbackProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc: string;
};

const ImageWithFallback = ({ src, fallbackSrc, alt, ...props }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc && imgSrc.trim() !== "" ? imgSrc : fallbackSrc}
      alt={alt}
      width={300}
      height={200}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback;