"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-card rounded-2xl overflow-hidden border border-card-border hover:border-accent transition-colors duration-300"
    >
      <Link href={`/products/${id}`} className="block relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-background/80 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-foreground">
            {category}
          </span>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="w-full">
            <h3 className="text-xl font-bold mb-1 truncate group-hover:text-accent transition-colors">
              <Link href={`/products/${id}`}>{name}</Link>
            </h3>
            <p className="text-gray-400 font-medium">₹{price.toLocaleString('en-IN')}</p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center space-x-2 bg-background border border-card-border hover:border-accent hover:bg-accent hover:text-white px-4 py-3 rounded-xl font-bold transition-all duration-300">
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}
