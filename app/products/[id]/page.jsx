import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/shared/services/productService";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProductById(id).catch(() => null);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id).catch(() => null);

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-medium mb-8 transition-colors"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-80 h-72 md:h-auto bg-gray-100 flex-shrink-0">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 320px"
                priority
              />
            </div>

            {/* Details */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t pt-6">
                <span className="text-4xl font-extrabold text-emerald-600">
                  ${product.price}
                </span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="text-lg">★</span>
                  <span className="text-gray-700 font-medium">
                    {product.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
