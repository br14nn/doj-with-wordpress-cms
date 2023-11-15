interface IImageSlideProps {
  children?: string;
}

export default function ImageSlide(props: IImageSlideProps) {
  return (
    <div className="h-[400px] w-full bg-red-500 3xl:h-[800px]">
      {props.children}
    </div>
  );
}
