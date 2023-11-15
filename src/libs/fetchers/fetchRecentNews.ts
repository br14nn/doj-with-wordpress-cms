import domainURL from "../domainURL";

export default async function () {
  const res = await fetch(`${domainURL}/api/get-recent-news`, {
    method: "GET",
    next: {
      revalidate: 3000,
    },
  });

  return res.json();
}
