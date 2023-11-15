import { nanoid } from "nanoid";

import CustomNewsCard from "../CustomNewsCard/CustomNewsCard";

import fetchRecentNewsPosts from "@/libs/fetchers/fetchRecentNewsPosts";

export default async function RecentNewsPosts() {
  const posts: { data: any[]; ok: boolean } = await fetchRecentNewsPosts();

  return (
    posts !== null &&
    posts.data.map((post) => (
      <CustomNewsCard
        key={nanoid()}
        thumbnailWidth={
          post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
            "full"
          ].width
        }
        thumbnailHeight={
          post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
            "full"
          ].height
        }
        thumbnailImage={
          post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
            "full"
          ].source_url
        }
        thumbnailAlt={post._embedded["wp:featuredmedia"][0].alt_text}
      >
        {post["title"]["rendered"].toUpperCase()}
      </CustomNewsCard>
    ))
  );
}
