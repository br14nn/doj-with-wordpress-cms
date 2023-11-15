import Image, { StaticImageData } from "next/image";

type TCustomNewsCardImageProps = {
  src: StaticImageData;
  alt: string;
};

export default function CustomNewsCardImage(props: TCustomNewsCardImageProps) {
  return (
    <Image
      className="h-full w-full bg-gray-400 bg-no-repeat object-cover object-center transition-all duration-300 group-hover/news:contrast-50"
      src={props.src}
      alt={props.alt}
    />
  );
}
