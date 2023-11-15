import CustomNewsCardCustomLink from "./CustomNewsCardCustomLink";
import CustomNewsCardImage from "./CustomNewsCardImage";

interface ICustomNewsCardProps {
  thumbnailImage: string;
  children?: React.ReactNode;
}

export default function CustomNewsCard(props: ICustomNewsCardProps) {
  return (
    <div className="group/news flex h-[500px] w-[400px] flex-col border-2 border-stone-800 bg-blue-whale shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 md:w-[300px] lg:h-[400px] lg:w-[400px]">
      <div className="relative h-[60%] w-full">
        <CustomNewsCardImage src={props.thumbnailImage} alt="thumbnail" />
        <CustomNewsCardCustomLink customCN="text-apache" href="#">
          Read More
        </CustomNewsCardCustomLink>
      </div>

      <div className="flex h-[40%] flex-col justify-center p-4 text-center text-white">
        <p>{props.children}</p>
      </div>
    </div>
  );
}
