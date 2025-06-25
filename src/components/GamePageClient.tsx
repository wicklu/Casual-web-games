// ✅ 文件：src/components/GamePageClient.tsx
"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { GameCard } from "@/components/GameCard";
import { Star, Users, Play, Maximize } from "lucide-react";
import Image from "next/image";
import { formatPlays, allGames, getGamesByCategory, Game } from "@/lib/games";

export default function GamePageClient({ game }: { game: Game }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const relatedGames = getGamesByCategory(game.category)
    .filter((g) => g.id !== game.id)
    .slice(0, 6);

  const otherGames = allGames
    .filter((g) => g.id !== game.id && g.category !== game.category)
    .slice(0, 6);

  const handleFullscreen = () => {
    const gameContainer = document.getElementById("game-container");
    if (gameContainer) {
      if (!document.fullscreenElement) {
        gameContainer.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const renderGameContent = () => {
    if (game.gameUrl && isGameStarted) {
      return (
        <iframe
          src={game.gameUrl}
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          allow="gamepad*;"
          title={game.title}
        />
      );
    }

    if (isGameStarted) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{game.title}</h2>
            <p className="text-lg mb-6">游戏正在运行中...</p>
            <div className="animate-pulse">
              <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎮</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">⬅️ 左</button>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">🚀 动作</button>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">右 ➡️</button>
          </div>

          <div className="bg-black/50 rounded-lg p-4 min-w-[200px]">
            <div className="flex justify-between mb-2">
              <span>得分:</span>
              <span className="text-yellow-400">1250</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>等级:</span>
              <span className="text-green-400">3</span>
            </div>
            <div className="flex justify-between">
              <span>生命:</span>
              <span className="text-red-400">❤️❤️❤️</span>
            </div>
          </div>

          <p className="text-sm mt-4 text-gray-300">
            这是一个演示游戏界面。在真实环境中，这里会加载实际的游戏内容。
          </p>
        </div>
      );
    }

    return (
      <div className="text-center">
        <p className="text-gray-400 mb-4">Click the button below to start game: {game.title}</p>
        <button
          onClick={() => setIsGameStarted(true)}
          className="bg-[#4658c1] hover:bg-[#5a6ad1] text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Start the game
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#11121a]">
      <Header />
      <main className="pt-[73px] min-h-screen">
        <div className="p-4 lg:p-6">
          <div className="mb-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-80 flex-shrink-0">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                  <Image src={game.image} alt={game.title} fill className="object-cover" />
                  {game.badge && (
                    <div className={`absolute top-3 left-3 badge ${
                      game.badge === "NEW"
                        ? "badge-new"
                        : game.badge === "UPDATED"
                        ? "badge-updated"
                        : game.badge === "HOT"
                        ? "badge-hot"
                        : "badge-top-rated"
                    }`}>
                      {game.badge}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">{game.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="bg-[#4658c1] text-white px-2 py-1 rounded">{game.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{formatPlays(game.plays)} 次游戏</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                  {game.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag) => (
                    <span key={tag} className="bg-[#2a2b33] text-gray-300 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsGameStarted(!isGameStarted)}
                    className="bg-[#4658c1] hover:bg-[#5a6ad1] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    {isGameStarted ? "Stop the game" : "Play now"}
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="bg-[#2a2b33] hover:bg-[#3a3b43] text-white px-4 py-3 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Maximize className="w-5 h-5" />
                    Full Screen
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-[#1a1b23] rounded-xl p-6">
              <div id="game-container" className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden flex items-center justify-center">
                {renderGameContent()}
              </div>
              {isGameStarted && (
                <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                  <span>
                    游戏状态: <span className="text-green-400">运行中</span>
                  </span>
                  <button
                    onClick={() => setIsGameStarted(false)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                  >
                    Stop the game
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8 bg-[#1a1b23] rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">游戏操作说明</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {["W/↑", "S/↓", "A/←", "D/→"].map((key, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4658c1] rounded flex items-center justify-center">
                    <span className="text-white font-bold">{key}</span>
                  </div>
                  <span className="text-gray-300">move {key.endsWith("↑") ? "up" : key.endsWith("↓") ? "down" : key.endsWith("←") ? "left" : "right"}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#47bcb6] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">space</span>
                </div>
                <span className="text-gray-300">jump/action</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-8 bg-[#47bcb6] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">mouse left</span>
                </div>
                <span className="text-gray-300">aim/select</span>
              </div>
              {game.operation?.map((item, index) => {
                const [label, value] = item.split(":");
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-9 h-8 bg-[#47bcb6] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{label}</span>
                    </div>
                    <span className="text-gray-300">{value}</span>
                  </div>
                );
              })}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#c72d4b] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ESC</span>
                </div>
                <span className="text-gray-300">pause/quit</span>
              </div>
            </div>
          </div>

          {relatedGames.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">More {game.category} games</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {relatedGames.map((relatedGame) => (
                  <GameCard key={relatedGame.id} game={relatedGame} size="small" />
                ))}
              </div>
            </section>
          )}

          {otherGames.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">You may also like</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {otherGames.map((otherGame) => (
                  <GameCard key={otherGame.id} game={otherGame} size="small" />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
