import { NextResponse } from "next/server";
export const revalidate = 0;

export async function GET() {
  console.info("GET");

  return NextResponse.json(Math.random());
}
