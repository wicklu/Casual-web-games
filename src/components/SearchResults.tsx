"use client";

import { useState, useEffect } from "react";
import { GameCard } from "./GameCard";
import { searchGames, type Game } from "@/lib/games";

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export function SearchResults({ query, onClose }: SearchResultsProps) {
  const [results, setResults] = useState<Game[]>([]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchGames(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!query.trim()) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-[#11121a] border border-[#2a2b33] rounded-xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              Search Results for "{query}"
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {results.length > 0 ? (
            <>
              <p className="text-gray-400 mb-6">
                Found {results.length} game{results.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {results.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    size="small"
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
              <p className="text-gray-400">
                Try searching for different keywords or browse our categories
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
