import { twMerge } from "tailwind-merge";
import { IconContext } from "react-icons";
import { BsXLg } from "react-icons/bs";

interface INavCloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function NavCloseButton(props: INavCloseButtonProps) {
  return (
    <button
      className={twMerge(
        "mx-4 h-[32px] w-[32px] self-end lg:hidden",
        props.className,
      )}
      {...props}
    >
      <IconContext.Provider value={{ size: "32px" }}>
        <BsXLg />
      </IconContext.Provider>
    </button>
  );
}
