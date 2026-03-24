import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { InstagramIcon, TwitterIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-black uppercase tracking-tighter">
              Smash<span className="text-accent">Kar</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm">
              Your ultimate destination for premium thrifted streetwear. Smash your style with our curated selection of shirts, trousers, and shoes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Hit Us Up</h3>
            <div className="flex space-x-4 shrink-0 transition-colors">
              <a href="#" className="p-2 bg-background border border-card-border rounded-full hover:border-accent hover:text-accent transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="p-2 bg-background border border-card-border rounded-full hover:border-accent hover:text-accent transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="p-2 bg-background border border-card-border rounded-full hover:border-accent hover:text-accent transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Email: hello@smashkar.com
            </p>
            <p className="mt-2 text-sm text-gray-400">
              WhatsApp: +91 98765 43210
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-card-border text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Smash Kar. Developed by || Muhammad Hanzala</p>
        </div>
      </div>
    </footer>
  );
}
