import { CellState, Theme } from './types';

// Standard 7x7 European/English Peg Solitaire Board
// -1: Invalid, 1: Marble, 0: Empty (Center)
export const INITIAL_BOARD_LAYOUT: number[][] = [
  [-1, -1, 1, 1, 1, -1, -1],
  [-1, -1, 1, 1, 1, -1, -1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1], // Center is empty
  [1, 1, 1, 1, 1, 1, 1],
  [-1, -1, 1, 1, 1, -1, -1],
  [-1, -1, 1, 1, 1, -1, -1],
];

export const BOARD_SIZE = 7;
export const TOTAL_MARBLES = 32;

export const THEMES: Theme[] = [
  {
    name: 'Coral Kingdom',
    isDark: true,
    appBg: 'bg-blue-900',
    // Vibrant coral reef
    backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop', 
    boardBg: 'bg-gradient-to-br from-cyan-900/90 to-blue-900/90 backdrop-blur-xl',
    boardBorder: 'border-cyan-400/60',
    grooveBorder: 'border-cyan-300/40',
    holeBg: 'bg-blue-950/80',
    marbleStart: '#f0f9ff', // Very bright pearl
    marbleEnd: '#0099ff',   // Bright Blue
    selectionRing: 'ring-yellow-300',
    accentColor: 'bg-cyan-600 hover:bg-cyan-500'
  },
  {
    name: 'Deep Sea Abyss',
    isDark: true,
    appBg: 'bg-slate-900',
    // Dark water with light rays
    backgroundImage: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2232&auto=format&fit=crop',
    boardBg: 'bg-gradient-to-br from-indigo-950/90 to-slate-900/95 backdrop-blur-xl',
    boardBorder: 'border-indigo-400/50',
    grooveBorder: 'border-indigo-300/30',
    holeBg: 'bg-black/70',
    marbleStart: '#e0e7ff', // Bright Indigo
    marbleEnd: '#4f46e5',   // Vivid Indigo
    selectionRing: 'ring-indigo-200',
    accentColor: 'bg-indigo-600 hover:bg-indigo-500'
  },
  {
    name: 'Tropical Lagoon',
    isDark: true,
    appBg: 'bg-teal-900',
    // Clear turquoise water
    backgroundImage: 'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=2070&auto=format&fit=crop',
    boardBg: 'bg-gradient-to-br from-teal-900/90 to-emerald-900/90 backdrop-blur-xl',
    boardBorder: 'border-teal-400/60',
    grooveBorder: 'border-teal-300/40',
    holeBg: 'bg-teal-950/80',
    marbleStart: '#fef9c3', // Bright pale yellow
    marbleEnd: '#14b8a6',   // Bright Teal
    selectionRing: 'ring-white',
    accentColor: 'bg-teal-600 hover:bg-teal-500'
  },
  {
    name: 'Neon Jellyfish',
    isDark: true,
    appBg: 'bg-purple-900',
    // Glowing jellyfish
    backgroundImage: 'https://images.unsplash.com/photo-1546738963-36528d227546?q=80&w=2151&auto=format&fit=crop',
    boardBg: 'bg-gradient-to-br from-purple-900/90 to-fuchsia-900/90 backdrop-blur-xl',
    boardBorder: 'border-fuchsia-400/60',
    grooveBorder: 'border-fuchsia-300/40',
    holeBg: 'bg-purple-950/80',
    marbleStart: '#fae8ff', // Bright Pink
    marbleEnd: '#9333ea',   // Vivid Purple
    selectionRing: 'ring-pink-300',
    accentColor: 'bg-fuchsia-600 hover:bg-fuchsia-500'
  },
  {
    name: 'Shark Territory',
    isDark: true,
    appBg: 'bg-gray-900',
    // Blue water with shark silhouette
    backgroundImage: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=2170&auto=format&fit=crop',
    boardBg: 'bg-gradient-to-br from-sky-900/90 to-gray-900/95 backdrop-blur-xl',
    boardBorder: 'border-sky-500/50',
    grooveBorder: 'border-sky-400/30',
    holeBg: 'bg-gray-950/80',
    marbleStart: '#f8fafc', // White Silver
    marbleEnd: '#334155',   // Dark Slate
    selectionRing: 'ring-sky-200',
    accentColor: 'bg-sky-700 hover:bg-sky-600'
  }
];