import CustomHeading1 from "@/components/CustomHeading1/CustomHeading1";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import RecentNews from "@/components/RecentNews/RecentNews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[70px]">
      <ImageSlider />

      <section
        className="flex flex-col gap-16 p-16 3xl:p-32"
        id="recentNewsSection"
      >
        <CustomHeading1 underlineColor="border-apache">
          RECENT NEWS
        </CustomHeading1>

        <div className="grid grid-cols-1 place-items-center gap-16 md:grid-cols-2 2xl:grid-cols-3">
          <RecentNews />
        </div>
      </section>
    </main>
  );
}
