import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";

type TNavOpenButtonProps = {
  onClick?: React.MouseEventHandler;
};

export default function NavOpenButton(props: TNavOpenButtonProps) {
  return (
    <button
      className="block h-[32px] w-[32px] lg:hidden"
      onClick={props.onClick}
    >
      <IconContext.Provider value={{ size: "32px" }}>
        <BsList />
      </IconContext.Provider>
    </button>
  );
}
