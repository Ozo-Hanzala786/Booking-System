"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/db";
import { ShoppingBag } from "lucide-react";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("L");

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="flex flex-col gap-6 mt-8">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Select Size</h3>
          <button className="text-sm text-gray-500 underline font-medium hover:text-white">Size Guide</button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {sizes.map((size) => (
            <button 
              key={size} 
              onClick={() => setSelectedSize(size)}
              className={`py-3 border rounded-xl font-bold uppercase tracking-wider transition-all
                ${selectedSize === size 
                  ? 'border-accent text-accent bg-accent/10 shadow-[0_0_10px_rgba(255,95,31,0.2)]' 
                  : 'border-card-border hover:border-accent hover:text-accent mix-blend-screen'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button 
        onClick={() => addItem({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectedSize
        })}
        className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-white px-8 py-5 rounded-xl font-black uppercase text-lg tracking-wider transition-all shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.5)]"
      >
        <ShoppingBag size={22} />
        <span>Add to Cart - ₹{product.price.toLocaleString('en-IN')}</span>
      </button>
    </div>
  );
}
