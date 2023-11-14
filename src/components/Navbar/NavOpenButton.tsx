import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";

interface INavOpenButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function NavOpenButton(props: INavOpenButtonProps) {
  return (
    <button className="block h-[32px] w-[32px] lg:hidden" {...props}>
      <IconContext.Provider value={{ size: "32px" }}>
        <BsList />
      </IconContext.Provider>
    </button>
  );
}
