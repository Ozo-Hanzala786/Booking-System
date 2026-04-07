import { getProductById } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AddToCartButton } from "@/components/AddToCartButton";
import { Reviews } from "@/components/Reviews";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-card border border-card-border rounded-3xl overflow-hidden w-full">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-sm font-bold uppercase tracking-wider text-accent mb-2 block">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">{product.name}</h1>
              <p className="text-2xl font-bold text-gray-300">₹{product.price.toLocaleString('en-IN')}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Description</h3>
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Select Size</h3>
                <button className="text-sm text-gray-500 underline font-medium hover:text-white">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button 
                    key={size} 
                    className="py-3 border border-card-border rounded-xl font-bold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <AddToCartButton product={product} />
              
              <div className="mt-6 flex items-center gap-4 text-sm font-medium text-gray-400 bg-card border border-card-border p-4 rounded-xl">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Ships worldwide in 3-5 days</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> 14-day hassle free returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Reviews productId={product.id} reviews={product.reviews || []} />
      </div>
    </div>
  );
}
