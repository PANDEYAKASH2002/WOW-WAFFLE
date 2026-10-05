export type MenuCategory =
  | 'All'
  | 'Classic'
  | 'Special'
  | "Kid's Special"
  | 'Premium'
  | 'Fudge Brownie'
  | 'Seasonal';

export interface MenuPrices {
  mini?: number;
  lolly?: number;
  price?: number; // For items with a single price like Fudge Brownies
}

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  prices: MenuPrices;
  description: string;
  isBestSeller?: boolean;
  image?: string;
    rotate?: number; 
  popularCombo?: string;
}
