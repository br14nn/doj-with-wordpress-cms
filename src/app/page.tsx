import CustomHeading1 from "@/components/CustomHeading1/CustomHeading1";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import RecentNewsPosts from "@/components/RecentNewsPosts/RecentNewsPosts";
import FreedomOfInformationPosts from "@/components/FreedomOfInformationPosts/FreedomOfInformationPosts";
import ProgramsPosts from "@/components/ProgramsPosts/ProgramsPosts";

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

        <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 2xl:grid-cols-3">
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

        <div className="grid w-full grid-cols-1 content-between gap-16 md:grid-cols-2 2xl:grid-cols-3">
          <FreedomOfInformationPosts />
        </div>
      </section>

      <section
        className="flex w-full flex-col items-center justify-center gap-16 p-8 md:p-16 3xl:p-32"
        id="programsSection"
      >
        <CustomHeading1 underlineColor="border-apache">PROGRAMS</CustomHeading1>

        <div className="grid w-full grid-cols-1 content-between gap-16 2xl:grid-cols-2">
          <ProgramsPosts />
        </div>
      </section>
    </main>
  );
}
