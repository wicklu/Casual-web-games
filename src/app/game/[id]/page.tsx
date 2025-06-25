import { getGameById } from "@/lib/games";
import { notFound } from "next/navigation";
import GamePageClient from "@/components/GamePageClient";
import type { Metadata } from "next";

// ✅ 正确写法：避免结构写法，确保类型推导稳定
type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

export default function GamePage({ params }: PageProps) {
  const game = getGameById(params.id);
  if (!game) notFound();
  return <GamePageClient game={game} />;
}
