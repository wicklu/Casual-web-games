import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/lib/games";

interface GameCardProps {
  game: Game;
  size?: "small" | "medium" | "large";
  className?: string;
}

export function GameCard({ game, size = "medium", className = "" }: GameCardProps) {
  const sizeClasses = {
    small: "aspect-[4/3]",
    medium: "aspect-[16/9]",
    large: "aspect-[16/9]"
  };

  const getBadgeClass = (badge: string) => {
    switch (badge) {
      case "NEW":
        return "badge badge-new";
      case "UPDATED":
        return "badge badge-updated";
      case "HOT":
        return "badge badge-hot";
      case "TOP RATED":
        return "badge badge-top-rated";
      default:
        return "";
    }
  };

  return (
    <Link href={`/game/${game.id}`} className={`game-card relative bg-[#1a1b23] rounded-xl overflow-hidden group cursor-pointer block ${className}`}>
      <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {game.badge && (
          <div className={`absolute top-2 left-2 ${getBadgeClass(game.badge)}`}>
            {game.badge}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
        <h3 className="text-white font-medium text-sm line-clamp-2">{game.title}</h3>
      </div>
    </Link>
  );
}
