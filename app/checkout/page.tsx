"use client";

import { useCart } from "@/context/CartContext";
import { ShieldCheck, Package, CreditCard, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-24 px-4">
        <div className="max-w-md w-full bg-card border border-card-border p-8 rounded-3xl text-center space-y-6">
          <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Package size={40} />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Order Confirmed!</h1>
          <p className="text-gray-400">
            Thank you for shopping with Smash Kar. Your order is being processed and will be shipped soon.
            An email confirmation has been sent to you.
          </p>
          <div className="pt-6 border-t border-card-border">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 w-full rounded-xl font-bold uppercase tracking-wider transition-all">
              Continue Shopping <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center py-24">
        <h1 className="text-3xl font-black mb-4 uppercase">Your Cart is Empty</h1>
        <Link href="/products" className="text-accent hover:text-white underline font-bold uppercase">Browse Collection</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
          Checkout <ShieldCheck className="text-accent" />
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleCheckout} className="space-y-8">
              {/* Shipping Info */}
              <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-8 space-y-6">
                <h2 className="text-2xl font-bold uppercase tracking-wider flex items-center gap-2 border-b border-card-border pb-4">
                  1. Shipping Info
                </h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase text-gray-400 mb-1">First Name</label>
                      <input required type="text" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Last Name</label>
                      <input required type="text" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Email Address</label>
                    <input required type="email" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Street Address</label>
                    <input required type="text" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase text-gray-400 mb-1">City</label>
                      <input required type="text" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase text-gray-400 mb-1">PIN Code</label>
                      <input required type="text" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-8 space-y-6">
                <h2 className="text-2xl font-bold uppercase tracking-wider flex items-center gap-2 border-b border-card-border pb-4">
                  2. Payment <CreditCard className="text-accent ml-auto" />
                </h2>
                <div className="bg-accent/10 border border-accent rounded-xl p-4 text-center">
                  <p className="font-bold text-accent mb-1">Test Mode Active</p>
                  <p className="text-sm text-gray-400">You can submit any dummy details to process this order.</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Card Number</label>
                    <input required type="text" maxLength={16} placeholder="0000 0000 0000 0000" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent tracking-widest" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Expiry</label>
                      <input required type="text" placeholder="MM/YY" maxLength={5} className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase text-gray-400 mb-1">CVC</label>
                      <input required type="text" maxLength={3} placeholder="123" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-5 rounded-2xl font-black uppercase text-xl tracking-wider transition-all shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.6)]">
                Pay ₹{(cartTotal + 150).toLocaleString('en-IN')}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-8 sticky top-24">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 border-b border-card-border pb-4">Order Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-card-border">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-bold text-lg leading-tight line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-gray-400">Size: {item.size} &bull; Qty: {item.quantity}</p>
                      <p className="font-bold text-accent mt-1">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-card-border text-sm font-bold uppercase tracking-wider">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>₹150</span>
                </div>
                <div className="flex justify-between text-lg text-white pt-4">
                  <span>Total</span>
                  <span className="text-accent">₹{(cartTotal + 150).toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
