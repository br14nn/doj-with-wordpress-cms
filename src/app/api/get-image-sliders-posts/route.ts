import { NextResponse } from "next/server";

export async function GET() {
  try {
    const fetchRes = await fetch(`${process.env.WP_API}/posts?_embed&tags=7`, {
      method: "GET",
    });

    const res = await fetchRes.json();

    return NextResponse.json({ data: res, ok: true });
  } catch (error) {
    return NextResponse.json({ data: null, ok: false });
  }
}
