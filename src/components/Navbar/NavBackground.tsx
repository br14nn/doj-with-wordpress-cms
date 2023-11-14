interface INavbBackgroundProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function NavBackground(props: INavbBackgroundProps) {
  return (
    <div
      className="fixed inset-0 z-[990] h-screen w-screen bg-black/60 lg:hidden"
      {...props}
    />
  );
}
