// app/api/project-images/route.js
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json([], { status: 400 });

  try {
    const dir = path.join(process.cwd(), "public", "images", id);
    const files = fs.readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp|gif|svg)$/i.test(f))
      .sort();

    const urls = files.map((f) => `/images/${id}/${f}`);
    return NextResponse.json(urls, { status: 200 });
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
