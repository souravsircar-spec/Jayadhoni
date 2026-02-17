import { Song } from './types';
import { HYMNS_1_100 } from './songs_1_100';
import { HYMNS_101_200 } from './songs_101_200';
import { HYMNS_201_300 } from './songs_201_300';
import { HYMNS_301_342 } from './songs_301_342';

// Aggregate all hymn collections into one database
export const SONG_DB: Song[] = [
  ...HYMNS_1_100,
  ...HYMNS_101_200,
  ...HYMNS_201_300,
  ...HYMNS_301_342
];

// Re-export sorted to ensure reliable indexing
SONG_DB.sort((a, b) => a.id - b.id);