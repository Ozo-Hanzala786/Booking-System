"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { InstagramIcon, TwitterIcon } from "@/components/Icons";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-8 pb-24 border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-foreground">Hit Us Up</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-lg">
              Got questions about an order, styling advice, or just want to talk streetwear? We got you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-black uppercase tracking-widest mb-8">Direct Line</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-card border border-card-border rounded-2xl flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-gray-400 mb-2">For support and general queries.</p>
                  <a href="mailto:hello@smashkar.com" className="font-medium hover:text-accent transition-colors">hello@smashkar.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-card border border-card-border rounded-2xl flex items-center justify-center text-accent shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                  <p className="text-gray-400 mb-2">Fastest way to get order updates.</p>
                  <a href="https://wa.me/919876543210" className="font-medium hover:text-accent transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-card border border-card-border rounded-2xl flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">HQ</h3>
                  <p className="text-gray-400 mb-2">Where the magic happens.</p>
                  <p className="font-medium text-gray-300">123 Thrift Avenue, Fashion District, Mumbai 400001</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black uppercase tracking-widest mb-6 border-t border-card-border pt-8">Socials</h2>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-card border border-card-border rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all transform hover:scale-110">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-card border border-card-border rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all transform hover:scale-110">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-card border border-card-border rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all transform hover:scale-110">
                <Phone size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-card-border p-8 md:p-10 rounded-3xl"
          >
            <h2 className="text-3xl font-black uppercase tracking-widest mb-8 text-center">Drop A Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider text-gray-400">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider text-gray-400">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

               <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

               <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-gray-400">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none text-foreground"
                >
                  <option>Order Inquiry</option>
                  <option>Returns & Exchanges</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

               <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

               <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] transform hover:-translate-y-1"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
