import axios from "axios";
import Link from "next/link";

const fetchProductDetailsById = async (id: string) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
};

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const productDetails = await fetchProductDetailsById(id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/products"
        className="mb-8 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Back to Products
      </Link>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
          <img
            src={productDetails.thumbnail}
            alt={productDetails.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              {productDetails.title}
            </h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              {productDetails.brand}
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 flex items-baseline gap-4">
              <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                ${productDetails.price}
              </span>
              {productDetails.discountPercentage && (
                <span className="text-sm text-zinc-500 line-through">
                  $
                  {(
                    productDetails.price /
                    (1 - productDetails.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              )}
            </div>
            <p className="mb-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
              {productDetails.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Rating:
                </span>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {productDetails.rating} ⭐
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600 dark:text-zinc-400">Stock:</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {productDetails.stock} available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
