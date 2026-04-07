import { getAllProducts } from "@/lib/db";
import { createProductAction, deleteProductAction } from "@/app/actions/products";
import Image from "next/image";
import { Trash2, PlusCircle, Package } from "lucide-react";

export default function AdminDashboard() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-foreground flex items-center gap-4">
          <Package className="text-accent" size={40} /> Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Product Form */}
          <div className="lg:col-span-1 bg-card border border-card-border rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <PlusCircle size={24} className="text-accent" /> Add New Product
            </h2>
            <form action={createProductAction} className="space-y-4">
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Product Name</label>
                <input required type="text" name="name" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="e.g. Vintage Band Tee" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Price (₹)</label>
                  <input required type="number" name="price" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="e.g. 999" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Category</label>
                  <select required name="category" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors">
                    <option value="Shirts">Shirts</option>
                    <option value="Trousers">Trousers</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Image URL</label>
                <input required type="url" name="image" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="https://images.unsplash.com/..." />
                <p className="text-xs text-gray-500 mt-1">Provide a valid Unsplash or external image URL</p>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase text-gray-400 mb-1">Description</label>
                <textarea required name="description" rows={3} className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Brief product description..."></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" name="featured" id="featured" className="w-5 h-5 accent-accent" />
                <label htmlFor="featured" className="text-sm font-bold uppercase text-gray-400 cursor-pointer">Feature on Homepage</label>
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(255,95,31,0.3)] hover:shadow-[0_0_25px_rgba(255,95,31,0.5)] mt-4">
                Create Product
              </button>
            </form>
          </div>

          {/* Product List */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-card-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-card-border flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Products</h2>
                <span className="bg-background px-4 py-1 rounded-full text-sm font-bold text-accent">{products.length} Total</span>
              </div>
              
              <div className="divide-y divide-card-border">
                {products.length === 0 ? (
                  <div className="p-8 text-center text-gray-400">No products found. Create one to get started!</div>
                ) : (
                  products.map((product) => (
                    <div key={product.id} className="p-6 flex flex-col sm:flex-row gap-6 items-center hover:bg-background/50 transition-colors">
                      <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0 border border-card-border">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 w-full text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                          <h3 className="text-xl font-bold">{product.name}</h3>
                          {product.featured && <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-0.5 rounded-full">Featured</span>}
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{product.category} &bull; ₹{product.price}</p>
                        <p className="text-gray-500 text-sm line-clamp-1">{product.description}</p>
                      </div>
                      <div className="shrink-0">
                        <form action={async () => {
                          'use server';
                          await deleteProductAction(product.id);
                        }}>
                          <button type="submit" className="p-3 text-red-500 hover:text-white hover:bg-red-500 rounded-xl bg-red-500/10 transition-colors tooltip relative group">
                            <Trash2 size={20} />
                          </button>
                        </form>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
