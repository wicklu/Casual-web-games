import { getGameById } from "@/lib/games";
import { notFound } from "next/navigation";
import GamePageClient from "@/components/GamePageClient";
import type { Metadata } from "next";

// ✅ 修复：params 现在是 Promise 类型
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  // ✅ 需要 await params
  const resolvedParams = await params;
  const game = getGameById(resolvedParams.id);
  
  if (!game) {
    return {
      title: "Game Not Found",
      description: "This game does not exist.",
    };
  }

  return {
    title: `${game.title} | Play Free Web Game`,
    description: game.description,
    openGraph: {
      title: game.title,
      description: game.description,
      images: [game.image],
    },
    twitter: {
      card: "summary_large_image",
      title: game.title,
      description: game.description,
      images: [game.image],
    },
  };
}

// ✅ 修复：params 现在是 Promise 类型
export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ 需要 await params
  const resolvedParams = await params;
  const game = getGameById(resolvedParams.id);
  
  if (!game) notFound();
  return <GamePageClient game={game} />;
}