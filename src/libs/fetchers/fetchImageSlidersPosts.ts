import domainURL from "../domainURL";

export default async function () {
  const res = await fetch(`${domainURL}/api/get-image-sliders-posts`, {
    method: "GET",
  });

  return res.json();
}
