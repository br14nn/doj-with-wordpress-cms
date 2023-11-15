import fetchRecentNews from "@/utils/fetchers/fetchRecentNews";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const fetchRes = await fetch(`${process.env.WP_API}/posts?_embed&tags=3`, {
      method: "GET",
    });

    const res = await fetchRes.json();

    return NextResponse.json({ data: res, ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false });
  }
}
