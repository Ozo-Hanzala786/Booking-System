"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Search, Filter, X, ChevronDown } from "lucide-react";
import { getAllProducts } from "@/lib/db";

const CATEGORIES = ["All", "Shirts", "Trousers", "Shoes", "Accessories"];
const SIZES = ["S", "M", "L", "XL"];

export function ClientProducts({ products }: { products: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  }).sort((a, b: any) => {
    if (sortBy === "price_asc") return a.price - b.price;
    if (sortBy === "price_desc") return b.price - a.price;
    return 0; // featured/default
  });

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

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
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat as string)}
                          className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeCategory === cat 
                              ? "bg-accent text-white" 
                              : "text-gray-400 hover:bg-card-border hover:text-foreground"
                          }`}
                        >
                          {cat as string}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Max Price: ₹{maxPrice}</h3>
                    <input 
                      type="range" 
                      min="500" 
                      max="10000" 
                      step="100"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-accent bg-card-border h-2 rounded-lg appearance-none cursor-pointer" 
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-bold">
                      <span>₹500</span>
                      <span>₹10,000+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            
            {/* Search Bar */}
            <div className="mb-8 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search fits, tees, cargo pants..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-card-border rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent transition-colors shadow-sm text-lg" 
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <p className="text-gray-400 font-medium bg-background border border-card-border px-4 py-2 rounded-lg">Showing {filteredProducts.length} drops</p>
              
              <div className="flex items-center space-x-3 text-sm font-medium bg-card border border-card-border px-4 py-2 rounded-lg">
                <span className="text-gray-400 whitespace-nowrap">Sort by:</span>
                <select 
                  className="bg-transparent text-white focus:outline-none cursor-pointer appearance-none pr-4"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option className="bg-background" value="featured">Featured</option>
                  <option className="bg-background" value="price_asc">Price: Low to High</option>
                  <option className="bg-background" value="price_desc">Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="pointer-events-none -ml-6" />
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
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                    setMaxPrice(10000);
                  }}
                  className="mt-6 text-accent hover:text-accent-hover font-bold uppercase tracking-wider underline transition-colors"
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
