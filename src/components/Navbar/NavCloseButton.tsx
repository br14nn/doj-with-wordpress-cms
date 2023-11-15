import { twMerge } from "tailwind-merge";
import { IconContext } from "react-icons";
import { BsXLg } from "react-icons/bs";

type TNavCloseButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler;
};

export default function NavCloseButton(props: TNavCloseButtonProps) {
  return (
    <button
      className={twMerge(
        "mx-4 h-[32px] w-[32px] self-end lg:hidden",
        props.className,
      )}
      onClick={props.onClick}
    >
      <IconContext.Provider value={{ size: "32px" }}>
        <BsXLg />
      </IconContext.Provider>
    </button>
  );
}
