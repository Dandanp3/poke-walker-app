// Mock data layer for Poke Walker
// Este arquivo funciona perfeitamente no React Native/Expo

export interface Pokemon {
  id: number
  name: string
  imageUrl: string
  type: string[]
  level: number
  xp: number
  maxXp: number
  happiness: number // 0-5 scale
  hp: number
  maxHp: number
  attack: number
  spAttack: number
  defense: number
  spDefense: number
  speed: number
}

export interface Trainer {
  id: string
  username: string
  displayName: string
  avatar: string
  favoritePokemon: string
  badges: number
  pokemonCaught: number
  joinDate: string
  totalSteps: number
}

export interface TradeItem {
  id: string
  pokemon: Pokemon
  trainerName: string
  requestedPokemon: string
}

export interface ShopItem {
  id: string
  name: string
  description: string
  price: number
  icon: string
  category: "healing" | "pokeball" | "boost" | "evolution"
}

export const mockTrainer: Trainer = {
  id: "trainer-001",
  username: "dandanp",
  displayName: "dandanp",
  avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  favoritePokemon: "Pikachu",
  badges: 8,
  pokemonCaught: 151,
  joinDate: "2024-01-15",
  totalSteps: 128450,
}

export const mockPokemon: Pokemon = {
  id: 25,
  name: "Pikachu",
  imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  type: ["Electric"],
  level: 36,
  xp: 7200,
  maxXp: 10000,
  happiness: 4,
  hp: 85,
  maxHp: 100,
  attack: 55,
  spAttack: 75,
  defense: 40,
  spDefense: 55,
  speed: 90,
}

export const mockTradePokemon: TradeItem[] = [
  {
    id: "trade-1",
    pokemon: {
      id: 6,
      name: "Charizard",
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      type: ["Fire", "Flying"],
      level: 42,
      xp: 5600,
      maxXp: 10000,
      happiness: 3,
      hp: 120,
      maxHp: 120,
      attack: 84,
      defense: 78,
      speed: 100,
    },
    trainerName: "Brock",
    requestedPokemon: "Blastoise",
  },
  {
    id: "trade-2",
    pokemon: {
      id: 9,
      name: "Blastoise",
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      type: ["Water"],
      level: 39,
      xp: 4800,
      maxXp: 10000,
      happiness: 4,
      hp: 130,
      maxHp: 130,
      attack: 83,
      defense: 100,
      speed: 78,
    },
    trainerName: "Misty",
    requestedPokemon: "Venusaur",
  },
  {
    id: "trade-3",
    pokemon: {
      id: 3,
      name: "Venusaur",
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      type: ["Grass", "Poison"],
      level: 40,
      xp: 5200,
      maxXp: 10000,
      happiness: 5,
      hp: 125,
      maxHp: 125,
      attack: 82,
      defense: 83,
      speed: 80,
    },
    trainerName: "Gary",
    requestedPokemon: "Charizard",
  },
  {
    id: "trade-4",
    pokemon: {
      id: 143,
      name: "Snorlax",
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
      type: ["Normal"],
      level: 35,
      xp: 3200,
      maxXp: 10000,
      happiness: 5,
      hp: 160,
      maxHp: 160,
      attack: 110,
      defense: 65,
      speed: 30,
    },
    trainerName: "Red",
    requestedPokemon: "Pikachu",
  },
]

export const mockShopItems: ShopItem[] = [
  {
    id: "item-1",
    name: "Potion",
    description: "Restores 20 HP to one Pokemon.",
    price: 200,
    icon: "potion",
    category: "healing",
  },
  {
    id: "item-2",
    name: "Super Potion",
    description: "Restores 60 HP to one Pokemon.",
    price: 700,
    icon: "super-potion",
    category: "healing",
  },
  {
    id: "item-3",
    name: "Poke Ball",
    description: "A tool for catching wild Pokemon.",
    price: 200,
    icon: "pokeball",
    category: "pokeball",
  },
  {
    id: "item-4",
    name: "Great Ball",
    description: "A good Ball with a higher catch rate.",
    price: 600,
    icon: "great-ball",
    category: "pokeball",
  },
  {
    id: "item-5",
    name: "Rare Candy",
    description: "Raises the level of a Pokemon by one.",
    price: 4800,
    icon: "rare-candy",
    category: "boost",
  },
  {
    id: "item-6",
    name: "Thunder Stone",
    description: "Evolves certain species of Pokemon.",
    price: 3000,
    icon: "thunder-stone",
    category: "evolution",
  },
]