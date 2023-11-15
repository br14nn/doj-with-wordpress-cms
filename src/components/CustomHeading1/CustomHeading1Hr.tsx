import { twMerge } from "tailwind-merge";

type TCustomHeading1HrProps = {
  className?: string;
};

export default function CustomHeading1Hr(props: TCustomHeading1HrProps) {
  return (
    <hr
      className={twMerge(
        "w-[100px] border-2 border-blue-whale 3xl:w-[200px] 3xl:border-4",
        props.className,
      )}
    />
  );
}
