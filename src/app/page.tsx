import CustomHeading1 from "@/components/CustomHeading1/CustomHeading1";
import FreedomOfInformationPosts from "@/components/FreedomOfInformationPosts/FreedomOfInformationPosts";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import RecentNewsPosts from "@/components/RecentNewsPosts/RecentNewsPosts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[70px]">
      <ImageSlider />

      <section
        className="flex w-full flex-col items-center gap-16 p-8 md:p-16 3xl:p-32"
        id="recentNewsSection"
      >
        <CustomHeading1 underlineColor="border-apache">
          RECENT NEWS
        </CustomHeading1>

        <div className="grid w-[95%] grid-cols-1 place-items-center gap-16 md:grid-cols-2 2xl:grid-cols-3">
          <RecentNewsPosts />
        </div>
      </section>

      <section
        className="flex w-full flex-col items-center gap-16 bg-blue-whale p-8 md:p-16 3xl:p-32"
        id="FOISection"
      >
        <CustomHeading1 className="text-white" underlineColor="border-apache">
          FREEDOM OF INFORMATION
        </CustomHeading1>

        <div className="grid w-[95%] grid-cols-1 place-items-center gap-16 md:grid-cols-2 2xl:grid-cols-3">
          <FreedomOfInformationPosts />
        </div>
      </section>
    </main>
  );
}
