import {
  Home,
  Clock,
  Zap,
  TrendingUp,
  RotateCcw,
  Star,
  Users,
  Gamepad2,
  Car,
  Plane,
  Trophy,
  Puzzle,
  Sword,
  Mountain,
  Bike,
  Palette,
  MousePointer,
  Joystick,
  Shirt,
  DoorOpen,
  Dice1,
  Heart,
  Skull,
  Settings,
  Tag
} from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Clock, label: "Recently played" },
  { icon: Zap, label: "New" },
  { icon: TrendingUp, label: "Trending now" },
  { icon: RotateCcw, label: "Updated" },
  { icon: Star, label: "Originals" },
  { icon: Users, label: "Multiplayer" },
  { icon: Gamepad2, label: "2 Player" },
  { icon: Sword, label: "Action" },
  { icon: Mountain, label: "Adventure" },
  { icon: Trophy, label: "Basketball" },
  { icon: Palette, label: "Beauty" },
  { icon: Bike, label: "Bike" },
  { icon: Car, label: "Car" },
  { icon: Dice1, label: "Card" },
  { icon: Heart, label: "Casual" },
  { icon: MousePointer, label: "Clicker" },
  { icon: Joystick, label: "Controller" },
  { icon: Shirt, label: "Dress Up" },
  { icon: Car, label: "Driving" },
  { icon: DoorOpen, label: "Escape" },
  { icon: Zap, label: "Flash" },
  { icon: Gamepad2, label: "FPS" },
  { icon: Skull, label: "Horror" },
  { icon: Settings, label: ".io" },
  { icon: Dice1, label: "Mahjong" },
  { icon: Puzzle, label: "Minecraft" },
  { icon: Trophy, label: "Pool" },
  { icon: Puzzle, label: "Puzzle" },
  { icon: Gamepad2, label: "Shooting" },
  { icon: Trophy, label: "Soccer" },
  { icon: Trophy, label: "Sports" },
  { icon: Users, label: "Stickman" },
  { icon: Mountain, label: "Tower Defense" },
  { icon: Tag, label: "Tags" }
];

export function Sidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-[73px] bottom-0 w-64 bg-[#11121a] border-r border-[#2a2b33] overflow-y-auto z-40">
      <nav className="p-4">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                item.active
                  ? "bg-[#4658c1] text-white"
                  : "text-gray-300 hover:bg-[#2a2b33] hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mt-6 pt-6 border-t border-[#2a2b33]">
          <div className="px-3 py-2 text-sm font-medium text-gray-400">Language</div>
          <select className="w-full bg-[#2a2b33] text-white border border-[#3a3b43] rounded-lg px-3 py-2 text-sm">
            <option>English</option>
            <option>Čeština</option>
            <option>Deutsch</option>
            <option>Español</option>
            <option>Français</option>
            <option>Italiano</option>
          </select>
        </div>

        {/* Footer Links */}
        <div className="mt-6 pt-6 border-t border-[#2a2b33] space-y-2">
          {[
            "About",
            "Developers",
            "Kids site",
            "Jobs",
            "Info for parents",
            "Terms & conditions",
            "Privacy",
            "All games"
          ].map((link) => (
            <button
              key={link}
              className="block w-full text-left px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-4 flex gap-2 px-3">
          {["TikTok", "Discord", "LinkedIn", "YouTube"].map((social) => (
            <button
              key={social}
              className="w-6 h-6 bg-[#2a2b33] rounded flex items-center justify-center text-xs text-gray-400 hover:bg-[#4658c1] hover:text-white transition-colors"
            >
              {social[0]}
            </button>
          ))}
        </div>

        <div className="mt-4 px-3 text-xs text-gray-500">
          © 2025 CrazyGames
        </div>
      </nav>
    </aside>
  );
}
