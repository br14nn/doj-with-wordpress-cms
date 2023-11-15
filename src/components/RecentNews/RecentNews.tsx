import { nanoid } from "nanoid";

import CustomNewsCard from "../CustomNewsCard/CustomNewsCard";

import fetchRecentNews from "@/libs/fetchers/fetchRecentNews";

export default async function RecentNewsGroup() {
  const recentNewsData: { data: any[]; ok: boolean } = await fetchRecentNews();

  return (
    recentNewsData !== null &&
    recentNewsData.data.map((news) => (
      <CustomNewsCard
        key={nanoid()}
        thumbnailWidth={
          news._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
            "full"
          ].width
        }
        thumbnailHeight={
          news._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
            "full"
          ].height
        }
        thumbnailImage={
          news._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
            "full"
          ].source_url
        }
        thumbnailAlt={news["_embedded"]["wp:featuredmedia"][0].alt_text}
      >
        {news["title"]["rendered"].toUpperCase()}
      </CustomNewsCard>
    ))
  );
}
