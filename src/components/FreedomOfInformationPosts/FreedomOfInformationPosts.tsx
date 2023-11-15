import fetchFreedomOfInfoPosts from "@/libs/fetchers/fetchFreedomOfInfoPosts";
import CustomNewsCard from "../CustomNewsCard/CustomNewsCard";

export default async function FreedomOfInformationPosts() {
  const posts: { data: any[]; ok: boolean } = await fetchFreedomOfInfoPosts();

  return (
    posts !== null &&
    posts.data.map((post) => (
      <CustomNewsCard
        className="h-[300px] w-full border-white bg-apache sm:h-[200px] sm:w-[300px] lg:h-[300px] lg:w-[400px]"
        imageContainerClass="h-[80%] lg:h-[85%]"
        titleClass="text-black font-bold h-[20%] lg:h-[15%] px-4 py-0 flex justify-center"
        thumbnailImage={
          post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
            "full"
          ].source_url
        }
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
        thumbnailAlt={post._embedded["wp:featuredmedia"][0].alt_text}
      >
        {post["title"]["rendered"].toUpperCase()}
      </CustomNewsCard>
    ))
  );
}
