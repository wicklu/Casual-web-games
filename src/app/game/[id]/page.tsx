import { Metadata } from "next";
import { getGameById } from "@/lib/games";
import { notFound } from "next/navigation";
import GamePageClient from "@/components/GamePageClient";

// ✅ 正确的 generateMetadata 类型签名
export async function generateMetadata(
  props: { params: { id: string } }
): Promise<Metadata> {
  const game = getGameById(props.params.id);
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

// ✅ 同样修正页面组件的参数类型
export default function GamePage(props: { params: { id: string } }) {
  const game = getGameById(props.params.id);
  if (!game) notFound();
  return <GamePageClient game={game} />;
}
