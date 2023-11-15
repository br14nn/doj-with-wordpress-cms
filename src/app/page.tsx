import { nanoid } from "nanoid";

import CustomHeading1 from "@/components/CustomHeading1/CustomHeading1";
import CustomNewsCard from "@/components/CustomNewsCard/CustomNewsCard";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import fetchRecentNews from "@/utils/fetchers/fetchRecentNews";

export default async function Home() {
  const recentNewsData: { data: any[]; ok: boolean } = await fetchRecentNews();

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
          {recentNewsData.data &&
            recentNewsData.data.map((news) => (
              <CustomNewsCard
                key={nanoid()}
                thumbnailWidth={
                  news._embedded["wp:featuredmedia"][0]["media_details"][
                    "sizes"
                  ]["full"].width
                }
                thumbnailHeight={
                  news._embedded["wp:featuredmedia"][0]["media_details"][
                    "sizes"
                  ]["full"].height
                }
                thumbnailImage={
                  news._embedded["wp:featuredmedia"][0]["media_details"][
                    "sizes"
                  ]["full"].source_url
                }
                thumbnailAlt={news["_embedded"]["wp:featuredmedia"][0].alt_text}
              >
                {news["title"]["rendered"].toUpperCase()}
              </CustomNewsCard>
            ))}
        </div>
      </section>
    </main>
  );
}
