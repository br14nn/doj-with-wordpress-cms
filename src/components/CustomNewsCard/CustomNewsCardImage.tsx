import Image from "next/image";

type TCustomNewsCardImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

export default function CustomNewsCardImage(props: TCustomNewsCardImageProps) {
  return (
    <Image
      className="h-full w-full bg-gray-400 bg-no-repeat object-cover object-center transition-all duration-300 group-hover/news:contrast-50"
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
    />
  );
}
