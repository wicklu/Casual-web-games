import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { GameCard } from "@/components/GameCard";
import { heroGames, featuredGames, actionGames, puzzleGames, sportsGames, adventureGames ,casualGames,drivingGames,} from "@/lib/games";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#11121a]">
      <Header />
      {/*<Sidebar />*/}
       
       
      {/*取消侧边栏的显示:<main className="lg:ml-64 pt-[73px] min-h-screen">*/}
      <main className="pt-[73px] min-h-screen">
        <div className="p-4 lg:p-6">
          {/* Welcome Section */}
          <div className="mb-8 bg-gradient-to-r from-[#4658c1] to-[#47bcb6] rounded-xl p-4 lg:p-6 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">Welcome to CasualWebGames</h1>
                <div className="flex flex-wrap gap-2 lg:gap-4 text-xs lg:text-sm mt-2">
                  <span>🎯 100+ games personally tested and played</span>
                  <span>✨ All for free</span>
                  <span>⚡ No install</span>
                  <span>💡 No signup</span>
                  <span>📱 On any device</span>
                  <span>👥 Play with friends</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Games Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="lg:col-span-1 flex flex-col">
              <GameCard
                game={heroGames[0]}
                size="small"
                //className="h-48 lg:h-64"
                className="h-full"
              />
            </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {heroGames.slice(1, 5).map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                  className="h-full"
                />
              ))}
            </div>
           </div>

            <div className="lg:col-span-1 flex flex-col h-full">
              <GameCard
                game={heroGames[5]}
                size="small"
                //className="h-48 lg:h-64"
                className="h-full"
              />
            </div>
          </div>
          

          {/* Featured Games Section */}
          <section className="mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">Featured games</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {featuredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>

          {/* New Games Section */}
          {/*<section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">New games</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {newGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>*/}

          {/* Action Games Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">Action Games</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {actionGames.slice(0, 6).map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>

          {/* Puzzle Games Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">Puzzle Games</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {puzzleGames.slice(0, 6).map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>

          {/* Sports Games Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">Sports Games</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {sportsGames.slice(0, 6).map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>

          {/* Adventure Games Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">Adventure Games</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {adventureGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>

          {/* CrazyGames Originals Section */}
          {/*<section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">CrazyGames Originals</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {originalsGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>*/}

          {/* Multiplayer Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">Games to Play with Friends</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6">
              {/* Play with friends card */}
              <div className="bg-[#1a1b23] rounded-xl p-4 lg:p-6 text-center">
                <div className="text-4xl lg:text-6xl mb-4">👫</div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Play with friends!</h3>
              </div>

              {/* Local multiplayer */}
              <div className="bg-[#1a1b23] rounded-xl p-4 lg:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#4658c1] rounded-lg flex items-center justify-center">
                    <span className="text-xl lg:text-2xl">🎮</span>
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-bold text-white">Local multiplayer</h3>
                    <p className="text-gray-400 text-xs lg:text-sm">Play on the same device</p>
                  </div>
                </div>
                <button className="bg-[#4658c1] hover:bg-[#5a6ad1] text-white px-4 py-2 rounded-lg font-medium w-full text-sm lg:text-base">
                  Explore games
                </button>
              </div>

              {/* Online multiplayer */}
              <div className="bg-[#1a1b23] rounded-xl p-4 lg:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#47bcb6] rounded-lg flex items-center justify-center">
                    <span className="text-xl lg:text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-bold text-white">Online multiplayer</h3>
                    <p className="text-gray-400 text-xs lg:text-sm">Play on separate devices</p>
                  </div>
                </div>
                <button className="bg-[#47bcb6] hover:bg-[#57ccc6] text-white px-4 py-2 rounded-lg font-medium w-full text-sm lg:text-base">
                  Explore games
                </button>
              </div>
            </div>
          </section>

          {/* Casual Games Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">Casual Games</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {casualGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>

          {/* Driving Games Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white">Driving Games</h2>
              <button className="text-[#4658c1] hover:text-[#5a6ad1] font-medium text-sm lg:text-base">
                View more
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {drivingGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  size="small"
                />
              ))}
            </div>
          </section>

          {/* Controller Detection Banner */}
          <div className="bg-[#4658c1] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xl lg:text-2xl">🎮</span>
              <div>
                <h3 className="text-white font-bold text-sm lg:text-base">Controller detected</h3>
                <p className="text-blue-100 text-xs lg:text-sm">Explore our controller compatible games</p>
              </div>
            </div>
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium text-sm lg:text-base">
              Explore games
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
