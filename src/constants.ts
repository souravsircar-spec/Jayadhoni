import { Song } from './types';
import { HYMNS_1_100 } from './data/songs_1_100';
import { HYMNS_101_200 } from './data/songs_101_200';
import { HYMNS_201_300 } from './data/songs_201_300';
import { SONGS_301_400 } from './data/songs_301_400';
import { SONGS_401_448 } from './data/songs_401_448';
import { CHORUS_DB } from './data/chorus_db';

// Aggregate all hymn collections into one database
export const SONG_DB: Song[] = [
  ...HYMNS_1_100,
  ...HYMNS_101_200,
  ...HYMNS_201_300,
  ...SONGS_301_400,
  ...SONGS_401_448,
  ...CHORUS_DB
];

// Re-export sorted to ensure reliable indexing
SONG_DB.sort((a, b) => a.id - b.id);

export const BENGALI_FONTS = [
  { id: 'noto', name: 'Noto Serif Bengali', family: '"Noto Serif Bengali", serif' },
  { id: 'hind', name: 'Hind Siliguri', family: '"Hind Siliguri", sans-serif' },
  { id: 'atma', name: 'Atma', family: '"Atma", cursive' },
  { id: 'mina', name: 'Mina', family: '"Mina", sans-serif' },
  { id: 'galada', name: 'Galada', family: '"Galada", cursive' },
  { id: 'baloo', name: 'Baloo Da 2', family: '"Baloo Da 2", cursive' },
];
