import CustomHeading1 from "@/components/CustomHeading1/CustomHeading1";
import CustomNewsCard from "@/components/CustomNewsCard/CustomNewsCard";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[70px]">
      <ImageSlider />

      <section
        className="3xl:p-32 flex flex-col gap-16 p-16"
        id="recentNewsSection"
      >
        <CustomHeading1 underlineColor="border-apache">
          RECENT NEWS
        </CustomHeading1>

        <div className="grid grid-cols-1 place-items-center gap-16 md:grid-cols-2 2xl:grid-cols-3">
          <CustomNewsCard thumbnailImage="">
            DOJ AWARDS WINNERS OF CREATIVITY SHOOT CONTEST IN CELEBRATION OF THE
            2023 NATIONAL CHILDREN’S MONTH
          </CustomNewsCard>
          <CustomNewsCard thumbnailImage="">
            DOJ AWARDS WINNERS OF CREATIVITY SHOOT CONTEST IN CELEBRATION OF THE
            2023 NATIONAL CHILDREN’S MONTH
          </CustomNewsCard>
          <CustomNewsCard thumbnailImage="">
            DOJ AWARDS WINNERS OF CREATIVITY SHOOT CONTEST IN CELEBRATION OF THE
            2023 NATIONAL CHILDREN’S MONTH
          </CustomNewsCard>
        </div>
      </section>
    </main>
  );
}
