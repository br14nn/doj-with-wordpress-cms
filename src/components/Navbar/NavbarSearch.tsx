import { twMerge } from "tailwind-merge";

interface INavbarSearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function NavbarSearch(props: INavbarSearchProps) {
  return (
    <input
      className={twMerge(
        "hidden h-[34px] w-[200px] border-2 border-gray-400 px-2 outline-none transition-colors duration-300 focus:border-blue-whale xl:block 2xl:w-[250px]",
        props.className,
      )}
      type="text"
      placeholder="search"
      {...props}
    />
  );
}
