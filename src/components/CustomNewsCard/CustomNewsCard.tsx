import CustomNewsCardCustomLink from "./CustomNewsCardCustomLink";
import CustomNewsCardImage from "./CustomNewsCardImage";
import CustomNewsCardTitle from "./CustomNewsCardTitle";

type TCustomNewsCardProps = {
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailImage: string;
  thumbnailAlt: string;
  children?: React.ReactNode;
};

export default function CustomNewsCard(props: TCustomNewsCardProps) {
  return (
    <div className="group/news flex h-[500px] w-[400px] flex-col border-2 border-stone-800 bg-blue-whale shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 md:w-[300px] lg:h-[400px] lg:w-[400px]">
      <div className="relative h-[60%] w-full">
        <CustomNewsCardImage
          width={props.thumbnailWidth}
          height={props.thumbnailHeight}
          src={props.thumbnailImage}
          alt={props.thumbnailAlt}
        />
        <CustomNewsCardCustomLink className="text-apache" href="#">
          Read More
        </CustomNewsCardCustomLink>
      </div>

      <CustomNewsCardTitle className="justify-start text-start">
        {props.children}
      </CustomNewsCardTitle>
    </div>
  );
}
