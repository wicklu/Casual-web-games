import { getGameById } from "@/lib/games";
import { notFound } from "next/navigation";
import GamePageClient from "@/components/GamePageClient";
import type { Metadata } from "next";

// ✅ 不定义额外类型，直接写参数结构（关键修复点）
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const game = getGameById(params.id);
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

// ✅ 同样不要使用 PageProps 类型别名
export default function GamePage({
  params,
}: {
  params: { id: string };
}) {
  const game = getGameById(params.id);
  if (!game) notFound();
  return <GamePageClient game={game} />;
}
