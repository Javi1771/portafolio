// app/api/project-images/route.js
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const IMG_REGEX = /\.(png|jpe?g|webp|gif|svg)$/i;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const order = (searchParams.get("order") || "name").toLowerCase(); //* name | mtime | ctime

  if (!id) return NextResponse.json([], { status: 400 });

  try {
    const dir = path.join(process.cwd(), "public", "images", id);

    //* Lee solo archivos válidos
    const entries = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isFile() && IMG_REGEX.test(d.name))
      .map((d) => d.name);

    //* Estrategias de orden
    if (order === "mtime" || order === "ctime") {
      //* Orden por fecha (más antiguo -> más nuevo)
      entries.sort((a, b) => {
        const sa = fs.statSync(path.join(dir, a));
        const sb = fs.statSync(path.join(dir, b));
        const ta = order === "mtime" ? sa.mtimeMs : sa.ctimeMs;
        const tb = order === "mtime" ? sb.mtimeMs : sb.ctimeMs;
        return ta - tb;
      });
    } else {
      //* Orden natural por nombre (case-insensitive y numérico-aware)
      entries.sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
      );
    }

    const urls = entries.map((f) => `/images/${id}/${f}`);
    return NextResponse.json(urls, { status: 200 });
  } catch {
    //* Si la carpeta no existe o hay error, devolvemos vacío
    return NextResponse.json([], { status: 200 });
  }
}
