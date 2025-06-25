// ✅ 文件：src/app/sitemap.xml/route.ts（用于自动生成 sitemap.xml）
import { allGames } from "@/lib/games";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.casualwebgames.xyz"; // 替换为你的域名

  const urls = allGames.map((game) => {
    return `  <url>
    <loc>${baseUrl}/game/${game.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
