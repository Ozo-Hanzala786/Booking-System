"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">Hit Us Up</h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">Got a question about a fit? Need help with an order? Drop us a line.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-card-border rounded-3xl p-8">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent! We'll hit you back soon."); }}>
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-2">Name</label>
                <input required type="text" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-2">Email</label>
                <input required type="email" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-2">Message</label>
                <textarea required rows={5} className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"></textarea>
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(255,95,31,0.3)]">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                <Mail />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-1">Email Us</h3>
                <p className="text-gray-400">hello@smashkar.com</p>
                <p className="text-sm text-gray-500 mt-1">We try to reply within 24 hours.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                <Phone />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-1">Call / WhatsApp</h3>
                <p className="text-gray-400">+91 98765 43210</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri, 10am - 6pm IST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                <MapPin />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-1">HQ</h3>
                <p className="text-gray-400">123 Streetwear Ave, Colaba<br/>Mumbai, MH 400005<br/>India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
