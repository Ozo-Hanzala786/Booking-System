"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Filter, X, ChevronDown } from "lucide-react";

// Mock data
const ALL_PRODUCTS = [
  { id: "1", name: "Vintage Graphic Tee", price: 999, category: "Shirts", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop" },
  { id: "2", name: "Baggy Cargo Pants", price: 1499, category: "Trousers", image: "https://images.unsplash.com/photo-1624378439575-d1ead6bb3d5c?q=80&w=1000&auto=format&fit=crop" },
  { id: "3", name: "Retro High-Top Sneakers", price: 2499, category: "Shoes", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop" },
  { id: "4", name: "Oversized Flannel", price: 1299, category: "Shirts", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop" },
  { id: "5", name: "Distressed Denim Jeans", price: 1899, category: "Trousers", image: "https://images.unsplash.com/photo-1542272604-78fa28af2f40?q=80&w=1000&auto=format&fit=crop" },
  { id: "6", name: "Chunky Skate Shoes", price: 2199, category: "Shoes", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop" },
  { id: "7", name: "Washed Band Tee", price: 899, category: "Shirts", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1000&auto=format&fit=crop" },
  { id: "8", name: "Parachute Pants", price: 1599, category: "Trousers", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1000&auto=format&fit=crop" },
];

const CATEGORIES = ["All", "Shirts", "Trousers", "Shoes"];
const SIZES = ["S", "M", "L", "XL"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = ALL_PRODUCTS.filter(product => 
    activeCategory === "All" || product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-foreground">The Collection</h1>
            <p className="text-gray-400 font-medium max-w-2xl">Browse our entire selection of premium thrifted streetwear. Every piece is strictly curated.</p>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden mt-6 flex items-center justify-center space-x-2 bg-card border border-card-border px-4 py-3 rounded-xl hover:border-accent transition-colors w-full"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <AnimatePresence>
            {(showFilters || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:w-1/4 flex-shrink-0 lg:block overflow-hidden lg:overflow-visible"
              >
                <div className="bg-card border border-card-border rounded-2xl p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6 lg:hidden">
                    <h2 className="font-bold text-xl uppercase tracking-wider">Filters</h2>
                    <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeCategory === cat 
                              ? "bg-accent text-white" 
                              : "text-gray-400 hover:bg-card-border hover:text-foreground"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Size</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {SIZES.map(size => (
                        <button
                          key={size}
                          className="bg-background border border-card-border hover:border-accent hover:text-accent font-medium py-2 rounded-lg transition-colors text-center"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Price Range</h3>
                    <div className="flex items-center justify-between space-x-4">
                      <div className="bg-background border border-card-border rounded-lg px-3 py-2 flex-1">
                        <span className="text-gray-500 text-sm">Min</span>
                        <p className="font-medium">₹0</p>
                      </div>
                      <span className="text-gray-500">-</span>
                      <div className="bg-background border border-card-border rounded-lg px-3 py-2 flex-1">
                        <span className="text-gray-500 text-sm">Max</span>
                        <p className="font-medium">₹5000+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400 font-medium">Showing {filteredProducts.length} products</p>
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span className="text-gray-400">Sort by:</span>
                <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                  <span>Featured</span>
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      key={product.id}
                    >
                      <ProductCard {...product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="w-full py-20 bg-card rounded-2xl border border-card-border text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-card-border rounded-full flex items-center justify-center text-gray-400 mb-4">
                  <Filter size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your filters to see more results.</p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="mt-6 text-accent hover:text-accent-hover font-medium underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
