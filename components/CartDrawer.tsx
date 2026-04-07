"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-background border-l border-card-border z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-card-border flex items-center justify-between bg-card text-foreground">
              <h2 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
                <ShoppingBag /> Your Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="p-2 hover:bg-background rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <ShoppingBag size={64} className="mb-4 opacity-50" />
                  <p className="text-xl font-bold mb-2 text-white">Your cart is empty</p>
                  <p className="mb-6 text-center">Looks like you haven't added anything yet.</p>
                  <button onClick={() => setIsCartOpen(false)} className="text-accent underline font-bold uppercase">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-card border border-card-border p-3 rounded-2xl">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-card-border">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-bold text-lg leading-tight line-clamp-1">{item.name}</h3>
                          <p className="text-sm text-gray-400 font-medium">Size: {item.size}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                          <X size={18} />
                        </button>
                      </div>
                      <div className="flex justify-between items-end">
                        <p className="font-bold text-accent">₹{item.price.toLocaleString('en-IN')}</p>
                        <div className="flex items-center gap-3 bg-background border border-card-border rounded-lg px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-400 hover:text-white"><Minus size={14} /></button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-400 hover:text-white"><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-card-border bg-card">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Subtotal</span>
                  <span className="text-3xl font-black">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-sm text-gray-500 text-center mb-4">Taxes and shipping calculated at checkout</p>
                <Link href="/checkout" onClick={() => setIsCartOpen(false)} className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.5)]">
                  Proceed to Checkout <ArrowRight size={20} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
