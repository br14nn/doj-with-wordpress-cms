import { twMerge } from "tailwind-merge";

type TNavbBackgroundProps = {
  className?: string;
  onClick?: React.MouseEventHandler;
};

export default function NavBackground(props: TNavbBackgroundProps) {
  return (
    <div
      className={twMerge(
        "fixed inset-0 z-[990] h-screen w-screen bg-black/60 lg:hidden",
        props.className,
      )}
      onClick={props.onClick}
    />
  );
}
