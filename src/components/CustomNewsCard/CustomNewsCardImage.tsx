import Image, { ImageProps } from "next/image";

export default function CustomNewsCardImage(props: ImageProps) {
  return (
    <Image
      className="h-full w-full bg-gray-400 bg-no-repeat object-cover object-center transition-all duration-300 group-hover/news:contrast-50"
      {...props}
    />
  );
}
