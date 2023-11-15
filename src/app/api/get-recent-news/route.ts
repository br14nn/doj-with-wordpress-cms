import fetchRecentNews from "@/utils/fetchers/fetchRecentNews";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetchRecentNews();

  return NextResponse.json(res);
}
