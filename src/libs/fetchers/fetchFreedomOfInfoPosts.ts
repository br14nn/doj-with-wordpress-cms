import domainURL from "../domainURL";

export default async function () {
  const res = await fetch(`${domainURL}/api/get-freedom-of-information-posts`, {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}
