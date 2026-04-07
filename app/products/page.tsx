import { getAllProducts } from "@/lib/db";
import { ClientProducts } from "@/components/ClientProducts";

export default function ProductsPage() {
  const products = getAllProducts();
  return <ClientProducts products={products} />;
}
