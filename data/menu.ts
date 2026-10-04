import { MenuItem } from '@/types/menu';

export const MENU_ITEMS: MenuItem[] = [
  // CLASSIC CATEGORY
  {
    id: 'classic-choco-river',
    name: 'Choco River',
    category: 'Classic',
    prices: { mini: 60, lolly: 90 },
    description: 'Crispy waffle drenched in rich, flowing milk chocolate.',
  },
  {
    id: 'classic-triple-chocolate',
    name: 'Triple Chocolate',
    category: 'Classic',
    prices: { mini: 60, lolly: 90 },
    description: 'Triple the cocoa bliss with dark, milk, and white chocolate layers.',
  },
  {
    id: 'classic-chocolate-loaded',
    name: 'Chocolate Loaded',
    category: 'Classic',
    prices: { mini: 60, lolly: 90 },
    description: 'Overloaded with melted premium chocolate and crispy waffle crunch.',
  },

  // SPECIAL CATEGORY
  {
    id: 'special-creamy-oreo',
    name: 'Creamy Oreo',
    category: 'Special',
    prices: { mini: 70, lolly: 110 },
    description: 'Crushed Oreo cookies topped with velvety chocolate cream.',
  },
  {
    id: 'special-brownie-hill',
    name: 'Brownie Hill',
    category: 'Special',
    prices: { mini: 70, lolly: 110 },
    description: 'Fudgy brownie crumbles piled high over warm golden waffle squares.',
  },
  {
    id: 'special-nutella-land',
    name: 'Nutella Land',
    category: 'Special',
    prices: { mini: 70, lolly: 110 },
    description: 'Pure hazelnut Nutella spread generously across hot crispy waffle.',
  },
  {
    id: 'special-crunchy-kit-kat',
    name: 'Crunchy Kit Kat',
    category: 'Special',
    prices: { mini: 70, lolly: 110 },
    description: 'Crispy wafer Kit Kat chunks embedded in melted chocolate.',
  },
  {
    id: 'special-creamy-red-velvet',
    name: 'Creamy Red Velvet',
    category: 'Special',
    prices: { mini: 70, lolly: 110 },
    description: 'Rich red velvet base with smooth cream cheese and white chocolate drizzle.',
  },

  // KID'S SPECIAL CATEGORY
  {
    id: 'kids-gemstone',
    name: 'Gemstone',
    category: "Kid's Special",
    prices: { mini: 70, lolly: 110 },
    description: 'Colorful crunchy Gems candy over a warm chocolate-dusted waffle.',
  },
  {
    id: 'kids-dusty-fairy-land',
    name: 'Dusty Fairy Land',
    category: "Kid's Special",
    prices: { mini: 70, lolly: 110 },
    description: 'Magical sprinkles, powdered sugar dust, and sweet chocolate drizzle.',
  },
  {
    id: 'kids-strawberry-berry',
    name: 'Strawberry Berry',
    category: "Kid's Special",
    prices: { mini: 70, lolly: 110 },
    description: 'Lush strawberry glaze with white chocolate drizzle and berry crunch.',
  },

  // PREMIUM CATEGORY
  {
    id: 'premium-biscoff-bliss',
    name: 'Biscoff Bliss',
    category: 'Premium',
    prices: { mini: 90, lolly: 140 },
    description: 'Original Lotus Biscoff spread with caramelized cookie crumbles.',
  },
  {
    id: 'premium-almond-nuts',
    name: 'Almond Nuts',
    category: 'Premium',
    prices: { mini: 90, lolly: 140 },
    description: 'Roasted almond slivers loaded over rich dark melted chocolate.',
  },
  {
    id: 'premium-coffee-mocha-delight',
    name: 'Coffee Mocha Delight',
    category: 'Premium',
    prices: { mini: 90, lolly: 140 },
    description: 'Espresso infused chocolate glaze with rich coffee aroma.',
  },
  {
    id: 'premium-blue-berry-blast',
    name: 'Blue-Berry Blast',
    category: 'Premium',
    prices: { mini: 90, lolly: 140 },
    description: 'Tangy sweet blueberry compote layered over chocolate waffle.',
  },
  {
    id: 'premium-kit-kat-nutella',
    name: 'Kit Kat + Nutella',
    category: 'Premium',
    prices: { mini: 90, lolly: 140 },
    description: 'Ultimate combo: Crunchy Kit Kat fingers bathed in silky Nutella.',
  },
  {
    id: 'premium-brownie-nutella',
    name: 'Brownie + Nutella',
    category: 'Premium',
    prices: { mini: 90, lolly: 140 },
    description: 'Decadent chocolate brownie bites layered with creamy hazelnut Nutella.',
  },
  {
    id: 'premium-peanut-butter',
    name: 'Peanut Butter',
    category: 'Premium',
    prices: { mini: 90, lolly: 140 },
    description: 'Creamy roasted peanut butter paired with melted dark chocolate.',
  },

  // FUDGE BROWNIE CATEGORY
  {
    id: 'brownie-triple-chocolate',
    name: 'Triple Chocolate Fudge Brownie',
    category: 'Fudge Brownie',
    prices: { price: 120 },
    description: 'Dense, gooey fudge brownie coated in dark, milk, and white chocolate.',
  },
  {
    id: 'brownie-choco-chips',
    name: 'Choco Chips Fudge Brownie',
    category: 'Fudge Brownie',
    prices: { price: 130 },
    description: 'Warm brownie packed with melted chocolate chips inside and out.',
  },
  {
    id: 'brownie-choco-balls',
    name: 'Choco Balls Fudge Brownie',
    category: 'Fudge Brownie',
    prices: { price: 150 },
    isBestSeller: true,
    description: 'Topped with crispy chocolate pearls and warm fudge sauce.',
  },
  {
    id: 'brownie-oreo',
    name: 'Oreo Fudge Brownie',
    category: 'Fudge Brownie',
    prices: { price: 150 },
    description: 'Gooey brownie baked with whole Oreo cookies and chocolate drip.',
  },
  {
    id: 'brownie-milk-chocolate',
    name: 'Milk Chocolate Fudge Brownie',
    category: 'Fudge Brownie',
    prices: { price: 150 },
    description: 'Silky smooth milk chocolate poured over a hot dense brownie slab.',
  },
  {
    id: 'brownie-white-chocolate',
    name: 'White Chocolate Fudge Brownie',
    category: 'Fudge Brownie',
    prices: { price: 160 },
    description: 'Sweet Belgian white chocolate glaze over rich cocoa brownie.',
  },
  {
    id: 'brownie-nutella',
    name: 'Nutella Fudge Brownie',
    category: 'Fudge Brownie',
    prices: { price: 180 },
    description: 'Generously smothered in genuine Italian Nutella hazelnut spread.',
  },
  {
    id: 'brownie-biscoff',
    name: 'Biscoff Fudge Brownie',
    category: 'Fudge Brownie',
    prices: { price: 180 },
    description: 'Lotus Biscoff spread and crushed speculoos cookies over hot brownie.',
  }
];
