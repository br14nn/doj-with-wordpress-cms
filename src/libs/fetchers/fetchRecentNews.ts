export default async function () {
  const res = await fetch("http://localhost:3000/api/get-recent-news", {
    method: "GET",
    next: {
      revalidate: 3000,
    },
  });

  return res.json();
}
