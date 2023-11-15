import { twMerge } from "tailwind-merge";

type TCustomNewsCardTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function CustomNewsCardTitle(props: TCustomNewsCardTitleProps) {
  return (
    <div
      className={twMerge(
        "flex h-[40%] flex-col justify-center p-4 text-center text-white",
        props.className,
      )}
    >
      <p className="line-clamp-3">{props.children}</p>
    </div>
  );
}
