type TCustomProgramsCardTitleProps = {
  children?: string;
};

export default function CustomProgramsCardTitle(
  props: TCustomProgramsCardTitleProps,
) {
  return (
    <h3 className="text-2xl font-semibold text-apache">{props.children}</h3>
  );
}
