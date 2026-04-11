export interface Song {
  id: number;
  title: string;
  category?: string;
  categories?: string[];
  lyrics: string;
  transliteration?: string;
  composer?: string;
  youtubeId?: string;
}

export type TabType = 'home' | 'collection' | 'settings' | 'info';
