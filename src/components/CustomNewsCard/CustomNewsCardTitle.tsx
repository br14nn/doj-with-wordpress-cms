import { twMerge } from "tailwind-merge";

interface ICustomNewsCardTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  customCN: string;
}

export default function CustomNewsCardTitle(props: ICustomNewsCardTitleProps) {
  return (
    <div
      className={twMerge(
        "flex h-[40%] flex-col justify-center p-4 text-center text-white",
        props.customCN,
      )}
      {...props}
    >
      <p>
        DOJ AWARDS WINNERS OF CREATIVITY SHOOT CONTEST IN CELEBRATION OF THE
        2023 NATIONAL CHILDREN’S MONTH
      </p>
    </div>
  );
}
