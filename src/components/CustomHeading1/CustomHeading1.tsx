import { twMerge } from "tailwind-merge";

type TCustomHeading1Props = {
  className?: string;
  children?: React.ReactNode;
  underlineColor?: "border-blue-whale" | "border-apache";
};

export default function CustomHeading1(props: TCustomHeading1Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        className={twMerge("3xl:text-7xl text-5xl font-bold", props.className)}
      >
        {props.children}
      </h1>
      <hr
        className={twMerge(
          "3xl:w-[200px] 3xl:border-4 w-[100px] border-2 border-blue-whale",
          props.underlineColor,
        )}
      />
    </div>
  );
}
