"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-black uppercase tracking-tighter hover:text-accent transition-colors">
              Smash<span className="text-accent">Kar</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-accent font-medium transition-colors">Home</Link>
              <Link href="/products" className="hover:text-accent font-medium transition-colors">Products</Link>
              <Link href="/contact" className="hover:text-accent font-medium transition-colors">Contact</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/products" className="text-foreground hover:text-accent transition-colors">
              <ShoppingCart size={20} />
            </Link>
            <Link href="/products" className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-full font-medium transition-colors shadow-[0_0_15px_rgba(255,95,31,0.3)] hover:shadow-[0_0_20px_rgba(255,95,31,0.5)]">
               Shop Now
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden items-center space-x-4">
            <Link href="/products" className="text-foreground hover:text-accent transition-colors">
              <ShoppingCart size={20} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-accent hover:bg-card border border-transparent transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-card-border bg-background overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent hover:bg-card">Home</Link>
              <Link href="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent hover:bg-card">Products</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent hover:bg-card">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
