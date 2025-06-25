// ✅ 文件：src/app/game/[id]/page.tsx（服务器组件）

import { getGameById } from "@/lib/games";
import { notFound } from "next/navigation";
import GamePageClient from "@/components/GamePageClient";

export async function generateMetadata({ params }) {
  const game = getGameById(params.id);
  if (!game) {
    return {
      title: "Game Not Found",
      description: "The game you're looking for does not exist.",
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

export default function GamePage({ params }: { params: { id: string } }) {
  const game = getGameById(params.id);
  if (!game) notFound();
  return <GamePageClient game={game} />;
}
