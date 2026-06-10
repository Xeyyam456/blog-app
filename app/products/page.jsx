import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/shared/services/productService";

export const revalidate = 30;

export const metadata = {
  title: "Products",
  description: "Browse all products fetched from DummyJSON API.",
};

export default async function ProductsPage() {
  const data = await getAllProducts();
  const products = data.products;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Products</h1>
        <p className="text-gray-500 mb-8">{products.length} products available</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative w-full h-52 bg-gray-100">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                  {product.title}
                </h2>
                <span className="text-lg font-bold text-emerald-600">
                  ${product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
