export interface Song {
  id: number;
  title: string;
  category: string;
  lyrics: string;
  transliteration?: string;
  composer?: string;
}

export type TabType = 'home' | 'category' | 'fav' | 'info';
