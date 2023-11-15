import { twMerge } from "tailwind-merge";
import CustomHeading1Hr from "./CustomHeading1Hr";

type TCustomHeading1Props = {
  className?: string;
  children?: React.ReactNode;
  underlineColor?: "border-blue-whale" | "border-apache";
};

export default function CustomHeading1(props: TCustomHeading1Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        className={twMerge("text-5xl font-bold 3xl:text-7xl", props.className)}
      >
        {props.children}
      </h1>
      <CustomHeading1Hr className={props.underlineColor} />
    </div>
  );
}
