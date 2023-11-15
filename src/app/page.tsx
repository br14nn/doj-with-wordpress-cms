import CustomHeading1 from "@/components/CustomHeading1/CustomHeading1";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[70px]">
      <ImageSlider />
      <section className="p-16" id="newsSection">
        <CustomHeading1>RECENT NEWS</CustomHeading1>
      </section>
    </main>
  );
}
