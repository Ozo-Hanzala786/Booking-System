import { getAllProducts } from "@/lib/db";
import { ClientHome } from "@/components/ClientHome";

export default function Home() {
  const allProducts = getAllProducts();
  const FEATURED_PRODUCTS = allProducts.filter(p => p.featured).slice(0, 4);

  return <ClientHome allProducts={allProducts} FEATURED_PRODUCTS={FEATURED_PRODUCTS} />;
}
