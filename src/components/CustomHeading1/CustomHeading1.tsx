import { twMerge } from "tailwind-merge";

interface ICustomHeading1Props
  extends React.HTMLAttributes<HTMLDivElement | HTMLHRElement> {
  children?: React.ReactNode;
  underlineColor?: "border-blue-whale" | "border-apache";
}

export default function CustomHeading1(props: ICustomHeading1Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        className={twMerge("text-5xl font-extrabold", props.className)}
        {...props}
      >
        {props.children}
      </h1>
      <hr
        className={twMerge(
          "w-[100px] border-2 border-blue-whale",
          props.underlineColor,
        )}
      />
    </div>
  );
}
