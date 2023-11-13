import Link from "next/link";

type TDropdownLinkProps = {
  children?: React.ReactNode;
};

export default function DropdownLink({ children }: TDropdownLinkProps) {
  return (
    <Link
      className="hover:bg-apache px-4 py-1 text-white hover:text-black"
      href="#"
    >
      {children}
    </Link>
  );
}
