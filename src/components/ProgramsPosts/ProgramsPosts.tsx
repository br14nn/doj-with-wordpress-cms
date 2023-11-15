import fetchProgramsPosts from "@/libs/fetchers/fetchProgramsPosts";
import CustomProgramsCard from "../CustomProgramsCard/CustomProgramsCard";

export default async function ProgramsPosts() {
  const posts: { data: any[]; ok: boolean } = await fetchProgramsPosts();

  return (
    posts.ok &&
    posts.data.map((post) => (
      <CustomProgramsCard
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
        thumbnailAlt={post._embedded["wp:featuredmedia"]["alt_text"]}
        title={post.title.rendered}
      >
        {post.content.rendered.replace(/<\/?p>/g, "")}
      </CustomProgramsCard>
    ))
  );
}
