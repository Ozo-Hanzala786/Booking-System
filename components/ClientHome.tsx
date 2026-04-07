"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES } from "@/lib/data";

export function ClientHome({ allProducts, FEATURED_PRODUCTS }: { allProducts: any[], FEATURED_PRODUCTS: any[] }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-card border border-card-border px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-medium tracking-wide text-foreground">New Drop Available</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Smash<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Your Style</span>
            </h1>
            <p className="text-lg text-gray-400 font-medium max-w-xl mb-8">
              Premium thrifted streetwear curated for the youth. 
              Elevate your daily fit with our exclusive selection of shirts, trousers, and shoes.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/products" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,95,31,0.4)] hover:shadow-[0_0_30px_rgba(255,95,31,0.6)] flex items-center space-x-2">
                <span>Shop Collection</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            
            {/* Testimonial preview */}
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-card border-2 border-background overflow-hidden relative">
                    <Image src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=100&auto=format&fit=crop`} alt="User" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-400">Trusted by 5k+ hypebeasts</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[700px] h-[500px] mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-card-border bg-card">
              <Image 
                src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop" 
                alt="Smash Kar Model"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Floating element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-card border border-card-border p-4 rounded-2xl backdrop-blur-xl flex items-center space-x-4 shadow-2xl z-20"
            >
              <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-card-border">
                {FEATURED_PRODUCTS[0]?.image && <Image src={FEATURED_PRODUCTS[0].image} alt="Product" fill className="object-cover" />}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Trending Now</p>
                <p className="font-bold text-accent">{FEATURED_PRODUCTS[0]?.name || 'Loading...'}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">Shop by Category</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products?category=${category.name.toLowerCase()}`} className="group block relative aspect-[4/5] overflow-hidden rounded-3xl border border-card-border hover:border-accent transition-colors duration-300">
                  <Image 
                    src={category.image} 
                    alt={category.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-3xl font-black uppercase tracking-wider text-white">{category.name}</h3>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-accent transition-colors duration-300 transform group-hover:-rotate-45">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card border-y border-card-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">Fresh Drops</h2>
              <div className="w-24 h-1 bg-accent" />
            </div>
            <Link href="/products" className="hidden md:flex items-center space-x-2 text-gray-400 hover:text-accent font-medium transition-colors">
              <span>View All</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center space-x-2 text-gray-400 hover:text-accent font-medium transition-colors">
              <span>View All Products</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
