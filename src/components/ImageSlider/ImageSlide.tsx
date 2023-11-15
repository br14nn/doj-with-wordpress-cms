import Image from "next/image";

type TImageSlideProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function ImageSlide(props: TImageSlideProps) {
  return (
    <Image
      className="h-[400px] w-full bg-gray-500 object-cover object-center 3xl:h-[800px]"
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}
