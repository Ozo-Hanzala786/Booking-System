export const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Vintage Graphic Tee",
    price: 999,
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    description: "Authentic vintage graphic tee with faded print. Perfect for a relaxed, grunge aesthetic.",
    inStock: true
  },
  {
    id: "2",
    name: "Baggy Cargo Pants",
    price: 1499,
    category: "Trousers",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    description: "Oversized baggy fit cargo pants featuring multiple utility pockets and adjustable ankle drawstrings.",
    inStock: true
  },
  {
    id: "3",
    name: "Retro High-Top Sneakers",
    price: 2499,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    description: "Classic retro styled high-tops with premium leather construction and vintage washed out soles.",
    inStock: true
  },
  {
    id: "4",
    name: "Oversized Flannel",
    price: 1299,
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
    description: "Heavyweight oversized flannel shirt. Wear it buttoned up or open over your favorite tee.",
    inStock: true
  },
];

export const ALL_PRODUCTS = [
  ...FEATURED_PRODUCTS,
  { 
    id: "5", 
    name: "Distressed Denim Jeans", 
    price: 1899, 
    category: "Trousers", 
    image: "https://images.unsplash.com/photo-1542272604-78fa28af2f40?q=80&w=1000&auto=format&fit=crop",
    description: "Straight-leg distressed denim jeans with custom knee rips and a washed indigo finish.",
    inStock: true
  },
  { 
    id: "6", 
    name: "Chunky Skate Shoes", 
    price: 2199, 
    category: "Shoes", 
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    description: "Extra wide chunky skate shoes with heavily padded tongue and durable suede panels.",
    inStock: true
  },
  { 
    id: "7", 
    name: "Washed Band Tee", 
    price: 899, 
    category: "Shirts", 
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1000&auto=format&fit=crop",
    description: "Acid washed blank tee with a dropped shoulder fit and heavy weight cotton.",
    inStock: true
  },
  { 
    id: "8", 
    name: "Parachute Pants", 
    price: 1599, 
    category: "Trousers", 
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1000&auto=format&fit=crop",
    description: "Lightweight nylon parachute pants. Features ultra-baggy fit with elastic waistband.",
    inStock: true
  },
];

export const CATEGORIES = [
  {
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Trousers",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
  },
];
