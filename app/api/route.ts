import { NextResponse } from "next/server";

export async function GET() {
  console.info("GET");

  return NextResponse.json(Math.random());
}
