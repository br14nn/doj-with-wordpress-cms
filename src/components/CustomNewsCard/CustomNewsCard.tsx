import { twMerge } from "tailwind-merge";

import CustomNewsCardCustomLink from "./CustomNewsCardCustomLink";
import CustomNewsCardImage from "./CustomNewsCardImage";
import CustomNewsCardTitle from "./CustomNewsCardTitle";

type TCustomNewsCardProps = {
  className?: string;
  titleClass?: string;
  imageContainerClass?: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailImage: string;
  thumbnailAlt: string;
  children?: React.ReactNode;
};

export default function CustomNewsCard(props: TCustomNewsCardProps) {
  return (
    <div
      className={twMerge(
        "group/news flex h-[300px] w-full flex-col border-2 border-stone-800 bg-blue-whale shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 sm:h-[400px] lg:h-[400px] ",
        props.className,
      )}
    >
      <div
        className={twMerge(
          "relative h-[60%] w-full",
          props.imageContainerClass,
        )}
      >
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

      <CustomNewsCardTitle
        className={twMerge("justify-start text-start", props.titleClass)}
      >
        {props.children}
      </CustomNewsCardTitle>
    </div>
  );
}
