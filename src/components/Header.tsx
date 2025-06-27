"use client";

import { Search, User, Heart, Menu } from "lucide-react";
import { useState } from "react";
import { SearchResults } from "./SearchResults";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const handleSearchInput = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#11121a] border-b border-[#2a2b33] px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side - Menu toggle and Logo */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-white hover:bg-[#2a2b33] rounded-lg">
              <Menu className="w-6 h-6" />
            </button>

            {/*<div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4658c1] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">casual</span>
                <span className="text-white font-bold text-lg leading-none">games</span>
              </div>
            </div>*/}
          <div className="flex items-center gap-2">
           <img src="/favicon.ico" alt="casual web games logo" className="w-16 h-16 object-contain" />
           <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">casual</span>
                <span className="text-white font-bold text-lg leading-none">games</span>
            </div>
          </div>

          </div>

          {/* Center - Search bar (Desktop) */}
          <div className="flex-1 max-w-md mx-4 hidden sm:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => handleSearchInput(e.target.value)}
                className="w-full bg-[#2a2b33] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border border-[#3a3b43] focus:border-[#4658c1] focus:outline-none"
              />
            </form>
          </div>

          {/* Right side - User controls */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="sm:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            {/*<button className="hidden sm:flex p-2 text-gray-400 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex p-2 text-gray-400 hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="bg-[#4658c1] hover:bg-[#5a6ad1] text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base">
              Log in
            </button>*/}
          </div>
        </div>

        {/* Mobile Search */}
        {showMobileSearch && (
          <div className="sm:hidden mt-3 px-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => handleSearchInput(e.target.value)}
                className="w-full bg-[#2a2b33] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border border-[#3a3b43] focus:border-[#4658c1] focus:outline-none"
                autoFocus
              />
            </form>
          </div>
        )}
      </header>

      {/* Search Results Overlay */}
      {showSearchResults && (
        <SearchResults
          query={searchQuery}
          onClose={() => {
            setShowSearchResults(false);
            setSearchQuery("");
            setShowMobileSearch(false);
          }}
        />
      )}
    </>
  );
}
