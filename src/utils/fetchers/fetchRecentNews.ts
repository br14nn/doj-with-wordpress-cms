export default async function () {
  try {
    const fetchRes = await fetch(
      `http://localhost/dojgov/wp-json/wp/v2/posts?_embed&tags=3`,
      {
        method: "GET",
      },
    );

    const res = await fetchRes.json();
    console.log(res[0]["_embedded"]["wp:featuredmedia"][0].link);

    return { data: res, ok: true };
  } catch (error) {
    return { ok: false };
  }
}
