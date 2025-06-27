// Game data types and collections
export interface Game {
  id: string;
  title: string;
  image: string;
  badge?: "NEW" | "UPDATED" | "HOT" | "TOP RATED";
  category: string;
  description: string;
  gameUrl?: string;
  rating: number;
  plays: number;
  tags: string[];
  operation?:string[];
}

// Sample game data based on the website
export const heroGames: Game[] = [
  {
    id: "bloxd-io",
    title: "Bloxd.io",
    image: "https://imgs.crazygames.com/games/bloxdhop-io/cover_16x9-1709115453824.png?metadata=none&quality=70",
    category: "Simulation",
    description: "A voxel-based battle royale game where you can build, fight, and survive in a blocky world.",
    gameUrl: "https://bloxd.io/",
    rating: 4.5,
    plays: 2500000,
    tags: ["multiplayer", "building", "battle-royale", "3d"]
  },
  {
    id: "tung-tung-sahur-obby-challenge",
    title: "Tung Tung Sahur: Obby Challenge",
    image: "https://img.gamedistribution.com/ad14e488375b4e41af52a4617f6837d0-512x384.jpg",
    badge: "TOP RATED",
    category: "Adventure",
    description: "Jump into the viral madness of Tung Tung Sahur: Obby Challenge — a hilarious meme-based platformer where you dodge traps, jump across chaos, and try to survive with style",
    gameUrl: "https://html5.gamedistribution.com/ad14e488375b4e41af52a4617f6837d0/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/tung-tung-sahur-obby-challenge",
    rating: 4.8,
    plays: 1800000,
    tags: ["Adventure", "relaxing", "jumping", "3d"]
  },
  {
    id: "strykon",
    title: "Strykon",
    image: "https://img.gamedistribution.com/59361631a2614fc095ef2a1740e02d78-512x384.jpg",
    badge: "TOP RATED",
    category: "Action",
    description: "Strykon is a mobile FPS game with exciting missions and battles. Play different modes like Deathmatch, Team Deathmatch, and Free-for-All, where your goal is to survive.",
    gameUrl: "https://html5.gamedistribution.com/59361631a2614fc095ef2a1740e02d78/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/strykon",
    rating: 4.7,
    plays: 3200000,
    tags: ["action", "fps", "shotting", "physics"]
  },
  {
    id: "moto-x3m-bike-race",
    title: "Moto X3m Bike Race",
    image: "https://img.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c-512x384.jpeg",
    badge: "UPDATED",
    category: "Driving",
    description: "In this exciting game, you will take on the role of an experienced stuntman, performing daring stunts on your motorcycle at different levels.",
    gameUrl: "https://html5.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/moto-x3m-bike-race",
    rating: 4.4,
    plays: 1500000,
    tags: ["driving", "relaxing", "motorbike", "satisfying"]
  },
  {
    id: "stickman-parkout",
    title: "Stickman Parkout",
    image: "https://www.onlinegames.io/media/posts/871/responsive/stickman-parkour-OG-xs.jpg",
    category: "Adventure",
    description: "Stickman Parkour is an online platformer game that you can play on your browser, embracing the easy-to-learn but hard-to-master mechanics. Collect keys, open chests, pass levels and help him find his way out across 30 levels.",
    gameUrl: "https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html",
    rating: 4.3,
    plays: 2100000,
    tags: ["stickman", "relaxing", "adventure", "army"]
  },
  {
    id: "monster-survivors",
    title: "Monster Survivors",
    image: "https://www.onlinegames.io/media/posts/942/responsive/Monster-survivors-xs.jpg",
    category: "Survival",
    description: "Monster Survivors is an free online survival game with a minimalistic design and roguelite elements. The monsters are here, and you must survive!",
    gameUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
    rating: 4.3,
    plays: 1100000,
    tags: ["Survival", "rhythm", "relaxing", "minimalistic"]
  },
];

export const featuredGames: Game[] = [
  {
    id: "masked-forces-zombie-survival",
    title: "Masked Forces Zombie Survival",
    image: "https://www.onlinegames.io/media/posts/225/responsive/Masked-Forces-Zombie-Survival-Online-xs.jpg",
    badge: "NEW",
    category: "shooting",
    description: "Get ready to survive the invasion of zombies in Masked Forces Zombie Survival. In a post-apocalyptic world run by zombies, even a short hesitation to shoot them away causes you to end up like them. The waves of undead are coming close really fast. Take up your arms, team up your squad, and prepare for the battle.",
    gameUrl: "https://www.onlinegames.io/games/2021/unity3/masked-forces-zombie-survival/index.html",
    rating: 4.2,
    plays: 450000,
    tags: ["shooting", "survival", "multiplayer", "excited"]
  },
  {
    id: "dayCare-tycoon",
    title: "DayCare Tycoon",
    image: "https://img.gamedistribution.com/d9f930a985ba4d2fb94100f6daeee6b8-512x384.jpg",
    badge: "HOT",
    category: "RPG",
    description: "Are you ready to build your dream business empire and be a great babysitter in this money tycoon simulator ? Dive into the world of daycare games and experience the joy of managing your own thriving idle tycoon games.",
    gameUrl: "https://html5.gamedistribution.com/d9f930a985ba4d2fb94100f6daeee6b8/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/dayCare-tycoon",
    rating: 4.4,
    plays: 2200000,
    tags: ["RPG", "arcade", "blocks", "classic"]
  },
  {
    id: "only-up-parkour",
    title: "Only Up Parkour",
    image: "https://www.onlinegames.io/media/posts/615/responsive/Only-Up-Parkour-lg.jpg",
    category: "Sports",
    description: "An unknown disaster happened with bizarre consequences in Only Up Parkour game. Boxes, pipes, containers, cars, and even houses hang in the air after the apocalypse. An adventure in the skies awaits the only person who can solve the mystery of what happened. But she needs to climb to the top to reach this holy duty. Combine your parkour gaming skills with your character's agility. Then, you will be able to see things much more clearly from above.",
    gameUrl: "https://html5.gamedistribution.com/c7a11f86eeda4a2b88e8d5ad2ba2f41d/?gd_sdk_referrer_url=https://www.onlinegames.io/only-up-parkour",
    rating: 4.3,
    plays: 1100000,
    tags: ["adventure", "rhythm", "imagination", "3D"],
    operation:["Shift: fast run","T:teleport"]
  },
  {
    id: "draw-the-bridge",
    title: "Draw The Bridge",
    image: "https://www.onlinegames.io/media/posts/164/responsive/Draw-the-Bridge-Game-xs.jpg",
    badge: "UPDATED",
    category: "Puzzle",
    description: "Draw The Bridge is the game where you need to use the logic and precision in order to complete all 30 levels. Every level gets more difficult and intense to draw the bridge for the car. Be creative and build a bridge so that the car will be able to collect all 3 starts and reach the flag.",
    gameUrl: "https://www.onlinegames.io/games/2021/4/draw-the-bridge/index.html",
    rating: 4.6,
    plays: 1650000,
    tags: ["puzzle", "brain", "physics","relaxing"]
  },
  {
    id: "tank-arena",
    title: "Tank Arena",
    image: "https://www.onlinegames.io/media/posts/956/responsive/Tank-Arena-Online-xs.jpg",
    badge: "UPDATED",
    category: "Shooting",
    description: "Tank Arena is an online tank battle game that you can play with your friend on the same device. In a 2D maze, each tank’s shot can bounce off walls, so you never know where danger might appear next.",
    gameUrl: "https://cloud.onlinegames.io/games/2025/construct/293/tank-arena/index-og.html",
    rating: 4.4,
    plays: 980000,
    tags: ["shooting", "Strategy", "multiplayer", "relaxing"]
  },
  {
    id: "kingdom-battle-3D",
    title: "Kingdom Battle 3D",
    image: "https://www.onlinegames.io/media/posts/991/responsive/Kingdom-Battle-3D-lg.jpg",
    category: "Strategy",
    description: "If you're into free games that mix brainpower strategy with epic battle scenes, Kingdom Battle 3D might be your next obsession. This isn’t just another button-masher. You’re the commander here, calling the shots, building your army, and leading your troops into some seriously intense medieval battles. Knights, mages, cavalry, and magic spells flying everywhere.",
    gameUrl: "https://cloud.onlinegames.io/games/2025/unity2/kingdom-battle-3d/index-og.html",
    rating: 4.2,
    plays: 750000,
    tags: ["fighting", "stimulation", "multiplayer", "combat"]
  },
  {
    id: "bloxorz",
    title: "Bloxorz",
    image: "https://www.onlinegames.io/media/posts/849/responsive/bloxorz-lg.jpg",
    category: "Puzzle",
    description: "Bloxorz is a beloved 3D puzzle game,You will move a block through cleverly designed mazes. Your goal is to drop the block into a square hole on each stage",
    gameUrl: "https://bloxorz.io/1.embed",
    rating: 4.5,
    plays: 1200000,
    tags: ["Puzzle", "space", "relaxing", "kids"]
  },
  {
    id: "the-house",
    title: "The House",
    image: "https://www.onlinegames.io/media/posts/832/responsive/the-house-lg.jpg",
    category: "Casual",
    description: "The House is an online escape game,n this adventure escape room game with a horror theme, you must search every corner of the house. Collect keys or seemingly ordinary items that hold the key to your freedom.",
    gameUrl: "https://www.onlinegames.io/games/2024/more/the-house/",
    rating: 4.5,
    plays: 1300000,
    tags: ["Puzzle", "escape", "relaxing", "horror"]
  },
  {
    id: "tile-match",
    title: "Tile Match",
    image: "https://www.onlinegames.io/media/posts/939/responsive/tile-match-lg.jpg",
    category: "Casual",
    description: "As soon as the Tile Match loads, the board fills with colorful and yummy tiles, each one neatly stacked in layers. The goal is simple: match-3 of the same kind to clear them from the board.and your board looks clearer already.",
    gameUrl: "https://cloud.onlinegames.io/games/2025/unity/tile-match/index-og.html",
    rating: 4.9,
    plays: 2200000,
    tags: ["Puzzle", "Tile-matching", "relaxing", "strategy"]
  },
  {
    id: "hit-knock-down",
    title: "Hit Knock Down",
    image: "https://img.gamedistribution.com/17e7c212747b426890b8b040d13b7fa3-512x384.jpg",
    category: "Casual",
    description: "Hit & Knock Down is a fun casual game where you aim to throw baseballs. Shoot as many targets as possible. Test your precision, reaction speed, and throwing skills. You aim to hit the right targets in each level.",
    gameUrl: "https://html5.gamedistribution.com/17e7c212747b426890b8b040d13b7fa3/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/hit-knock-down",
    rating: 4.9,
    plays: 3200000,
    tags: ["baseballs", "Shooting", "relaxing", "strategy"]
  },
];

// Action Games
export const actionGames: Game[] = [
  ...heroGames.filter(game => game.category === "Action"),
  ...featuredGames.filter(game => game.category === "Action"),
  {
    id: "gta-grand-vegas-crime",
    title: "GTA: Grand Vegas Crime",
    image: "https://img.gamedistribution.com/828864726be944c2bff67fa68d505e96-512x384.jpg",
    badge: "HOT",
    category: "Action",
    description: "Grand Vegas Crime is an open-world action game set in a sprawling city inspired by Las Vegas. Players take on the role of a daring gangster looking to rise through the criminal underworld. The game offers intense missions, thrilling car chases, and fierce shootouts against rival gangs and law enforcement.",
    gameUrl: "https://html5.gamedistribution.com/828864726be944c2bff67fa68d505e96/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/gta-grand-vegas-crime",
    rating: 4.5,
    plays: 3800000,
    tags: ["action", "crime", "tactical", "adventure"],
    operation:["E:Enter/Exit Vehicles"],
  },
  {
    id: "dark-ninja-hanjo",
    title: "Dark Ninja Hanjo",
    image: "https://www.onlinegames.io/media/posts/451/responsive/Dark-Ninja-Hanjo-lg.jpg",
    badge: "UPDATED",
    category: "Action",
    description: "Dark Ninja Hanjo is an adventure game where you explore and try to recover this ruined city.You need to recover the ancient scroll first to be able to make it happen. You must follow the clues, complete the missions and fight enemies when necessary.",
    gameUrl: "https://www.onlinegames.io/games/2023/unity/dark-ninja-hanjo/index.html",
    rating: 4.6,
    plays: 2900000,
    tags: ["action", "adventure", "ninja", "clues"],
    operation:["mouse right:use the projectile","R:change the projectile","X:Special Move","E:change the weapon","T:change the power","C:change the camera view"],
  },
  {
    id: "rome-simulator",
    title: "Rome Simulator",
    image: "https://www.onlinegames.io/media/posts/634/responsive/Rome-Simulator-2-lg.jpg",
    badge: "NEW",
    category: "Action",
    description: " Rome Simulator is a 3D action game where you are in the shoes of a gladiator in ancient Rome. You will find yourself in a mansion full of historic settings. Be careful while wandering the rooms, as you may encounter other guardians of the castle! They will attack you when they see you. Fight with them and continue roaming Rome in this simulator game!⚔️",
    gameUrl: "https://www.onlinegames.io/games/2021/unity/rome-simulator/index.html",
    rating: 4.4,
    plays: 1600000,
    tags: ["action","fight","castle","Rome"],
    operation:["E:take up weapon","Q:jump","G:Draw/Sheathe weapon","C:Crouch","1-4:Switch weapons","X:Cancel trigger & cancel ledge/drop weapons"]
  },
  {
    id: "stick-fighter-3D",
    title: "Stick Fighter 3D",
    image: "https://img.gamedistribution.com/3e34d62652d048b682de66117da5d84d-512x384.jpg",
    badge: "UPDATED",
    category: "Action",
    description: "Real Street Fighter 3D have very addictive game-play and many missions. In this you have to fight with other enemies and have to complete mission. It has many addictive missions.",
    gameUrl: "https://html5.gamedistribution.com/3e34d62652d048b682de66117da5d84d/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/stick-fighter-3D",
    rating: 4.6,
    plays: 2900000,
    tags: ["action", "adventure", "fight", "zombies"],
    operation:["X:punch","Z:kick","C:grab"]
  },
  {
    id: "strike-force-action-platformer",
    title: "Strike Force: Action Platformer",
    image: "https://img.gamedistribution.com/30c319848d544c30afbe82ad24fbac5b-512x384.jpg",
    badge: "UPDATED",
    category: "Action",
    description: "a high-octane, side-scrolling action shooter inspired by the legendary Contra series. Fight through thrilling levels packed with non-stop combat, deadly enemies, and intense boss battles. ",
    gameUrl: "https://html5.gamedistribution.com/30c319848d544c30afbe82ad24fbac5b/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/strike-force-action-platformer",
    rating: 4.6,
    plays: 2900000,
    tags: ["action", "adventure", "shooting", "Contra"],
    operation:["J:shoot","k:throw grenade"]
  }
];

// Puzzle Games
export const puzzleGames: Game[] = [
  ...featuredGames.filter(game => game.category === "Puzzle"),
  {
    id: "klondike-solitaire",
    title: "Klondike Solitaire",
    image: "https://img.gamedistribution.com/673aec14f9ca48fb89efa3ea00befc8d-512x384.jpg",
    badge: "TOP RATED",
    category: "Puzzle",
    description: "Test your skill and logic with Klondike, the classic solitaire game loved by generations! Stack the cards in ascending order, alternating colors, and complete all four suits to win the game.",
    gameUrl: "https://html5.gamedistribution.com/673aec14f9ca48fb89efa3ea00befc8d/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/klondike-solitaire",
    rating: 4.7,
    plays: 2400000,
    tags: ["puzzle", "cards", "logic", "brain"]
  },
  {
    id: "bubble-letters",
    title: "Bubble Letters",
    image: "https://img.gamedistribution.com/365b4962c5894454ac7ac9e75ea0fb69-512x384.jpg",
    category: "Puzzle",
    description: "an immersive word game that takes players on an extraordinary journey through the world of letters. Featuring vibrant floral backgrounds and tranquil gameplay, this online crossword adventure is the ideal companion for warm days ahead! With thousands of levels to conquer, you're guaranteed endless brain-teasing enjoyment. ",
    gameUrl: "https://html5.gamedistribution.com/365b4962c5894454ac7ac9e75ea0fb69/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/bubble-letters",
    rating: 4.4,
    plays: 1800000,
    tags: ["puzzle", "bubble", "letters", "satisfying"]
  },
  {
    id: "unblock-it-3D",
    title: "Unblock It 3D",
    image: "https://img.gamedistribution.com/bb321f67a2fc481ba31308582f3df0d5-512x384.jpg",
    badge: "UPDATED",
    category: "Puzzle",
    description: "Power up your logic and spatial reasoning skills with Unblock It 3D! Rotate the cluster of bricks to find unblocked tiles you can slide away without hitting any obstructions. Play Classic Mode and enjoy hundreds of intricate puzzles with unlimited moves, new cube designs and backgrounds to unlock.",
    gameUrl: "https://html5.gamedistribution.com/bb321f67a2fc481ba31308582f3df0d5/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/unblock-it-3D",
    rating: 4.3,
    plays: 1200000,
    tags: ["puzzle", "Unblock", "spce", "logic"]
  },
  {
    id: "master-chess",
    title: "Master Chess",
    image: "https://www.onlinegames.io/media/posts/558/responsive/Master-Chess-lg.jpg",
    category: "Puzzle",
    description: "Master Chess is an online board game in which you must utilize your strategic abilities and chess knowledge to win. You can play the game with a companion or against the computer. It is all up to you. Enjoy the fun of the classic board game on the digital platform!",
    gameUrl: "https://www.onlinegames.io/games/2023/code/master-chess/index.html",
    rating: 4.5,
    plays: 3100000,
    tags: ["puzzle", "chess", "stratege", "classic"]
  }
];

// Sports Games
export const sportsGames: Game[] = [
  ...featuredGames.filter(game => game.category === "Sports"),
  {
    id: "snow-rush-3D",
    title: "Snow Rush 3D",
    image: "https://img.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527-512x384.jpg",
    badge: "HOT",
    category: "Sports",
    description: "Snow Rush 3D is a fun sledding game that tests speed and reflexes for winter sports enthusiasts, playable in both 1 and 2 players!",
    gameUrl: "https://html5.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/snow-rush-3D",
    rating: 4.6,
    plays: 4200000,
    tags: ["sports", "snow-rush", "competition", "skills"]
  },
  {
    id: "basketball-king",
    title: "Basketball King",
    image: "https://www.onlinegames.io/media/posts/907/responsive/basketball-king-xs.jpg",
    badge: "TOP RATED",
    category: "Sports",
    description: "Step onto the court. Prepare for the ultimate basketball showdown with Basketball King! This slam dunk game isn't just about dribbling and shooting—it's about outsmarting your opponent, showing off your slick moves, and pulling off epic dunks.",
    gameUrl: "https://cloud.onlinegames.io/games/2024/construct/316/basketball-king/index-og.html",
    rating: 4.8,
    plays: 2800000,
    tags: ["sports", "basketball", "orbit", "physics"],
    operation:["B:Shoot/Steal","V:Activate special ability","Double D: Dash"]
  },
  {
    id: "football-King",
    title: "Football King",
    image: "https://www.onlinegames.io/media/posts/739/responsive/Football-King-xs.jpg",
    badge: "TOP RATED",
    category: "Sports",
    description: "Football King is a 2D sports game in which you direct your football player and try to score as many goals as you can. In the two-player mode, you can challenge your friend on the field.Or, play against the CPU in the single-player mode. Feel free to participate in quick matches or tournaments in each mode.",
    gameUrl: "https://www.onlinegames.io/games/2024/construct/226/football-king/index.html",
    rating: 4.8,
    plays: 2800000,
    tags: ["sports", "football", "orbit", "physics"],
    operation:["B: Super Shoot"]
  },
  {
    id: "golf-orbit",
    title: "Golf Orbit",
    image: "https://www.onlinegames.io/media/posts/953/responsive/Golf-Orbit-Play-Online-lg.jpg",
    badge: "TOP RATED",
    category: "Sports",
    description: "Golf Orbit is an online golf game where one powerful shot can send your ball flying across the course and even into outer space! With just a single tap, you can launch the ball as far as possible, collect coins, and upgrade your golfer’s abilities. The goal is to hit the ball farther with each shot. ",
    gameUrl: "https://html5.gamedistribution.com/02ff01e6e9f7451ba28d889a2a55eec9/?gd_sdk_referrer_url=https://www.onlinegames.io/golf-orbit/",
    rating: 4.8,
    plays: 2800000,
    tags: ["sports", "golf", "orbit", "physics"]
  },
  {
    id: "tennis-masters",
    title: "Tennis Masters",
    image: "https://www.onlinegames.io/media/posts/565/responsive/Tennis-Masters-2-lg.jpg",
    badge: "TOP RATED",
    category: "Sports",
    description: "Tennis Masters is a 2D sports game where you take part in tennis matches by taking the characters of legendary tennis players from different countries. You can play tennis matches any way you want with the multiple match modes offered by the game. If you want, you can join tournaments or play one-on-one in one of the most exciting ball games.",
    gameUrl: "https://www.onlinegames.io/games/2024/gm/tennis-masters/index.html",
    rating: 4.8,
    plays: 2800000,
    tags: ["sports", "tennis", "orbit", "physics"],
    operation:["X: hit","Z:smash"]
  },
];

// Adventure Games
export const adventureGames: Game[] = [
  ...heroGames.filter(game => game.category === "Adventure"),
  ...featuredGames.filter(game => game.category === "Adventure"),
  {
    id: "zombie-shooting-king",
    title: "Zombie Shooting King",
    image: "https://img.gamedistribution.com/505a6808388d4967a82e141f956bcc13-512x384.jpg",
    badge: "UPDATED",
    category: "Adventure",
    description: "Hordes of zombies are swarming the streets. You are the last line of defense. Grab your gun, sharpen your shooting skills, and unleash unstoppable firepower to survive. ",
    gameUrl: "https://html5.gamedistribution.com/505a6808388d4967a82e141f956bcc13/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/zombie-shooting-king",
    rating: 4.6,
    plays: 2900000,
    tags: ["adventure", "shooting", "zombies","survival"]
  },
  {
    id: "crazy-cattle-3D",
    title: "Crazy Cattle 3D",
    image: "https://www.onlinegames.io/media/posts/1004/responsive/Crazy-Cattle-3D-lg.jpg",
    badge: "HOT",
    category: "Adventure",
    description: "Crazy Cattle 3D is a one-player battle royale game where you control a bouncy sheep and try to knock other sheep in the herd. The physics are strange. And the movement of other sheep is absolute comedy. ",
    gameUrl: "https://cloud.onlinegames.io/games/2025/unity3/crazy-cattle-3d/index-og.html",
    rating: 4.3,
    plays: 1900000,
    tags: ["adventure", "escape", "battle", "physics"]
  },
  {
    id: "squid-game",
    title: "Squid Game",
    image: "https://img.gamedistribution.com/788f89d325d840f391139ce0e1212c46-512x384.jpg",
    badge: "UPDATED",
    category: "Adventure",
    description: "a fast-paced and addictive game inspired by the classic playground challenge! Test your reflexes, strategy, and timing as you race against others to reach the finish line without getting caught.",
    gameUrl: "https://html5.gamedistribution.com/788f89d325d840f391139ce0e1212c46/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/squid-game",
    rating: 4.6,
    plays: 2900000,
    tags: ["adventure", "adventure", "reflexes", "Squid Game"]
  },
  {
    id: "gold-miner-tower-defense",
    title: "Gold Miner Tower Defense",
    image: "https://img.gamedistribution.com/cf920379795a402dac13aad70d2c556d-512x384.jpg",
    badge: "UPDATED",
    category: "Adventure",
    description: "Gold Miner Tower Defense is a wonderful combination of tower defense, card strategy and upgrade combat. You will play as a brave miner protecting gold from enemies. Protect your precious treasures strategically with many unique defense towers!",
    gameUrl: "https://html5.gamedistribution.com/cf920379795a402dac13aad70d2c556d/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/gold-miner-tower-defense",
    rating: 4.6,
    plays: 2900000,
    tags: ["adventure", "tower-defense", "reflexes", "casual"]
  },
];

export const casualGames : Game[]= [
  {
    id: "big-block-blast",
    title: "Big Block Blast",
    image: "https://img.gamedistribution.com/058a3fd0d58949be9b79e666de9ac36d-512x384.jpg",
    badge: "TOP RATED" as const,
    category: "Casual",
    description: "Place triangles and blocks to build 2x2 BIG BLOCKS! Drag and drop shapes into the grid to complete full squares made of triangles. Matching colors gives you bonus points, so in Big Block Blast you must aim for smart and colorful combos! Some blocks have special powers and can even be placed on top of others.",
    gameUrl:"https://html5.gamedistribution.com/058a3fd0d58949be9b79e666de9ac36d/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/big-block-blast",
    rating: 4.8,
    plays: 1800000,
    tags: ["casual", "relaxing", "build", "blocks"]
  },
  {
    id: "ragdoll-archers-casual",
    title: "Ragdoll Archers",
    image: "https://imgs.crazygames.com/ragdoll-archers_16x9/20240205020743/ragdoll-archers_16x9-cover?metadata=none&quality=70",
    badge: "TOP RATED" as const,
    category: "Casual",
    description: "Epic ragdoll physics archery game.",
    gameUrl: "https://www.crazygames.com/embed/ragdoll-archers",
    rating: 4.7,
    plays: 3200000,
    tags: ["casual", "archery", "ragdoll", "physics"]
  },
  {
    id: "fireboy-and-watergirl",
    title: "Fireboy and Watergirl",
    image: "https://www.onlinegames.io/media/posts/377/responsive/Fireboy-and-Watergirl-Online-lg.jpg",
    category: "Casual",
    description: " We want to introduce you two best friends that can never be together: Fireboy and Watergirl. Fireboy is hydrophobic and can only pass through flames. Watergirl loves to be wet and evaporate when she touches fire.",
    gameUrl: "https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/?gd_sdk_referrer_url=https://www.onlinegames.io/fireboy-and-watergirl",
    rating: 4.4,
    plays: 1500000,
    tags: ["casual", "arcade", "2 player", "satisfying"]
  },
  {
    id: "nova-craft",
    title: "Nova Craft",
    image: "https://www.onlinegames.io/media/posts/841/responsive/Nova-Craft-lg.jpg",
    category: "Casual",
    description: "We're taking you back a billion years to the dawn of creation. Armed with only four basic elements—fire, water, earth, and air. You'll start the Big Bang from scratch. In this alchemy game, combine elements to create new ones and see history unfold. The fate of the universe is in your hands. What will you discover first: War or Peace?",
    gameUrl:"https://cloud.onlinegames.io/games/2024/more2/nova-craft/index.html",
    rating: 4.3,
    plays: 2100000,
    tags: ["casual", "elements", "curiosity", "discoveries"],
    operation:["Mouse right: remove items"]
  },
  {
    id: "bFFs-retro-time-travel-fashion",
    title: "BFFs Retro Time Travel Fashion",
    image: "https://www.onlinegames.io/media/posts/922/responsive/bffs-retro-time-travel-fashion-xs.jpg",
    badge: "NEW" as const,
    category: "Casual",
    description: "If you love retro fashion, this is the perfect game for you. BFFs Retro Time Travel Fashion is your time machine ticket to an exciting fashion adventure. Join four stylish besties as they travel through time, facing the challenge of nailing iconic looks from the past.",
    gameUrl:"https://cloud.onlinegames.io/games/2024/fabbox/bffs-retro-time-travel-fashion/index-og.html",
    rating: 4.1,
    plays: 320000,
    tags: ["Casual","beauty", "fashion", "dress-up"]
  },
  {
    id: "marco",
    title: "Marco",
    image: "https://www.onlinegames.io/media/posts/369/responsive/Marco-Online-lg.jpg",
    badge: "NEW" as const,
    category: "Casual",
    description: "Marco is an indie adventure game,was inspired by Super Mario Bros which was a very popular arcade game when it was first released in 1985. A classical hero with his red hat and pixelated style awaits you to help him survive through little mushrooms, snails, birds, and rhinos. ",
    gameUrl:"https://www.onlinegames.io/games/2023/unity/marco/index.html",
    rating: 4.1,
    plays: 320000,
    tags: ["Casual","adventure", "Super Mario Bros", "dress-up"]
  }
];

export const drivingGames = [
  ...heroGames.filter(game => game.category === "Driving"),
  ...featuredGames.filter(game => game.category === "Driving"),
  {
    id: "super-car-driving",
    title: "Super Car Driving",
    image: "https://www.onlinegames.io/media/posts/854/responsive/supercardriving-2-xs.jpg",
    category: "Driving",
    description: "This online driving game offers a full package with 3 game modes that can appeal to every taste. Adrenaline seekers can enjoy completing stunt challenges while skill gamers maneuver their supercars in the lots of parking levels.",
    gameUrl: "https://cloud.onlinegames.io/games/2024/unity2/super-car-driving/index-og.html",
    rating: 4.5,
    plays: 2800000,
    tags: ["driving", "racing", "poly", "tracks"]
  },
  {
    id: "nsr-street-car-racing",
    title: "NSR Street Car Racing",
    image: "https://img.gamedistribution.com/d632553ef7264d99aa438310073a6dc3-512x384.jpg",
    category: "Driving",
    description: "Hit the Streets & Dominate the Race! Jump into heart-pounding street racing action! Collect and customize high-performance cars, master intense drifts, unleash nitro boosts, and conquer challenging races. Prove your skills and become the ultimate street-racing legend! Ready, Set, Drift!",
    gameUrl: "https://html5.gamedistribution.com/d632553ef7264d99aa438310073a6dc3/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/nsr-street-car-racing",
    rating: 4.4,
    plays: 1900000,
    tags: ["driving", "car", "drift", "nitro"]
  },
  {
    id: "super-mini-racing",
    title: "Super Mini Racing",
    image: "https://www.onlinegames.io/media/posts/819/responsive/Super-Mini-Racing-lg.jpg",
    category: "Driving",
    description: "A super duper race is about to begin in just a few minutes! Choose your car and take your position behind the wheel for Super Mini Racing—a 3D racing game that offers both single-player and two-player modes. You'll be driving super mini cars across 10 different racetracks, competing to be the winner and claim the prize.",
    gameUrl: "https://www.onlinegames.io/games/2022/unity4/super-mini-racing/index.html",
    rating: 4.4,
    plays: 1900000,
    tags: ["driving", "car", "drift", "racing"],
    operation:["R:respawn"]
  },
  {
    id: "crazy-plane-landing",
    title: "Crazy Plane Landing",
    image: "https://www.onlinegames.io/media/posts/999/responsive/crazy-plane-landing-lg.jpg",
    category: "Driving",
    description: "Crazy Plane Landing is a 3D stunt flight game where you launch a plane off a ramp, try to keep it in one piece and land on the runway. Until you arrive at the finish, every barrel roll, every extra meter adds to your payout. Spend those coins on a beefier Engine, a longer Boost, or a bigger Bonus multiplier, then keep chasing that distant finish line on different terrains.",
    gameUrl: "https://html5.gamedistribution.com/fd8ad948b534420caced19c62764019f/?gd_sdk_referrer_url=https://www.onlinegames.io/crazy-plane-landing/",
    rating: 4.4,
    plays: 1900000,
    tags: ["driving", "plane", "launch", "landing"],
  },
  {
    id: "speed-boat-extreme-racing",
    title: "Speed Boat Extreme Racing",
    image: "https://img.gamedistribution.com/8f2eacba36514c4bbfd532fb4fc82120-512x384.jpeg",
    category: "Driving",
    description: "You are sailing to the ocean with the top supersport speed boats with the Speed Boat Extreme Race game! The game comes with five different speed boats and six different racing maps and a huge free drive and stunt map. The game is both played as single and two-player.",
    gameUrl: "https://html5.gamedistribution.com/8f2eacba36514c4bbfd532fb4fc82120/?gd_sdk_referrer_url=https://www.casualwebgames.xyz/game/speed-boat-extreme-racing",
    rating: 4.8,
    plays: 3600000,
    tags: ["driving", "boat", "speed", "physics"],
  },
];


// Combine all games for search functionality
export const allGames: Game[] = [
  ...heroGames,
  ...featuredGames,
  ...actionGames.filter(game => !heroGames.some(h => h.id === game.id) && !featuredGames.some(f => f.id === game.id)),
  ...puzzleGames.filter(game => !featuredGames.some(f => f.id === game.id)),
  ...sportsGames.filter(game => !featuredGames.some(f => f.id === game.id)),
  ...adventureGames.filter(game => !heroGames.some(h => h.id === game.id) && !featuredGames.some(f => f.id === game.id)),
  ...casualGames,
  ...drivingGames,
];

// Helper functions
export const getGameById = (id: string): Game | undefined => {
  return allGames.find(game => game.id === id);
};

export const getGamesByCategory = (category: string): Game[] => {
  return allGames.filter(game => game.category.toLowerCase() === category.toLowerCase());
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return allGames.filter(game =>
    game.title.toLowerCase().includes(lowercaseQuery) ||
    game.description.toLowerCase().includes(lowercaseQuery) ||
    game.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    game.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const formatPlays = (plays: number): string => {
  if (plays >= 1000000) {
    return `${(plays / 1000000).toFixed(1)}M`;
  }
  if (plays >= 1000) {
    return `${(plays / 1000).toFixed(0)}K`;
  }
  return plays.toString();
};

// Game categories for navigation
export const gameCategories = [
  { name: "Action", count: actionGames.length },
  { name: "Puzzle", count: puzzleGames.length },
  { name: "Sports", count: sportsGames.length },
  { name: "Casual", count: casualGames.length },
  { name: "Adventure", count: adventureGames.length },
  { name: "Driving", count: drivingGames.length },
  { name: "RPG", count: allGames.filter(g => g.category === "RPG").length },
  { name: "FPS", count: allGames.filter(g => g.category === "FPS").length },
  { name: "Simulation", count: allGames.filter(g => g.category === "Simulation").length },
  { name: "Arcade", count: allGames.filter(g => g.category === "Arcade").length },
  { name: "Fighting", count: allGames.filter(g => g.category === "Fighting").length },
  { name: "Music", count: allGames.filter(g => g.category === "Music").length }
];
