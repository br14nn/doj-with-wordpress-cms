import Link from "next/link";

export default function CustomProgramsCardReadMore() {
  return (
    <Link
      className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-8 w-fit items-center justify-center border-2 border-white px-2 font-semibold leading-none text-apache opacity-0 transition-all duration-300 hover:bg-white hover:text-black group-hover:opacity-100"
      href="#"
    >
      Read More
    </Link>
  );
}
