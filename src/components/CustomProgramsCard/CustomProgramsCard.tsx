import CustomProgramsCardTitle from "./CustomProgramsCardTitle";
import CustomProgramsCardImage from "./CustomProgramsCardImage";
import CustomProgramsCardReadMore from "./CustomProgramsCardReadMore";
import { StaticImageData } from "next/image";

type TCustomProgramsCardProps = {
  thumbnailImage: string | StaticImageData;
  thumbnailAlt: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  title?: string;
  children?: React.ReactNode;
};

export default function CustomProgramsCard(props: TCustomProgramsCardProps) {
  return (
    <div className="group flex h-[200px] w-full flex-row border-2 border-stone-800 bg-blue-whale shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105">
      <div className="relative h-full w-[50%] bg-gray-500">
        <CustomProgramsCardImage
          src={props.thumbnailImage}
          alt={props.thumbnailAlt}
          width={props.thumbnailWidth}
          height={props.thumbnailHeight}
        />

        <CustomProgramsCardReadMore />
      </div>

      <div className="flex h-full w-[50%] flex-col gap-2 p-4 text-white">
        <CustomProgramsCardTitle>{props.title}</CustomProgramsCardTitle>

        <p className="line-clamp-4">{props.children}</p>
      </div>
    </div>
  );
}
