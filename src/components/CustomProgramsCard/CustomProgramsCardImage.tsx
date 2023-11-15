import Image, { StaticImageData } from "next/image";

type TCustomoProgramsImageProps = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
};

export default function CustomProgramsCardImage(
  props: TCustomoProgramsImageProps,
) {
  return (
    <Image
      className="h-full w-full object-cover transition-all duration-300 group-hover:contrast-50"
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
    />
  );
}
