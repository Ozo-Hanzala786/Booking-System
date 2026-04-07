import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'store.json');

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
  featured: boolean;
  reviews?: Review[];
}

export interface StoreData {
  products: Product[];
  orders: any[];
}

// Ensure the data directory and store.json exist
function initDB() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ products: [], orders: [] }, null, 2));
  }
}

export function getDB(): StoreData {
  initDB();
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

export function saveDB(data: StoreData) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Product Helpers
export function getAllProducts(): Product[] {
  return getDB().products;
}

export function getProductById(id: string): Product | undefined {
  return getDB().products.find(p => p.id === id);
}

export function addProduct(product: Omit<Product, 'id'>): Product {
  const db = getDB();
  const newProduct = {
    ...product,
    id: Date.now().toString()
  };
  db.products.push(newProduct);
  saveDB(db);
  return newProduct;
}

export function deleteProduct(id: string): boolean {
  const db = getDB();
  const initialLength = db.products.length;
  db.products = db.products.filter(p => p.id !== id);
  if (db.products.length !== initialLength) {
    saveDB(db);
    return true;
  }
  return false;
}

export function addReview(productId: string, review: Omit<Review, 'id' | 'date'>): Review | null {
  const db = getDB();
  const productIndex = db.products.findIndex(p => p.id === productId);
  
  if (productIndex === -1) return null;
  
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    date: new Date().toISOString()
  };
  
  if (!db.products[productIndex].reviews) {
    db.products[productIndex].reviews = [];
  }
  
  db.products[productIndex].reviews!.push(newReview);
  saveDB(db);
  
  return newReview;
}
