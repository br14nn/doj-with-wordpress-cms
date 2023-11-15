import { twMerge } from "tailwind-merge";

interface INavbBackgroundProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  customCN?: string;
}

export default function NavBackground(props: INavbBackgroundProps) {
  return (
    <div
      className={twMerge(
        "fixed inset-0 z-[990] h-screen w-screen bg-black/60 lg:hidden",
        props.customCN,
      )}
      {...props}
    />
  );
}
