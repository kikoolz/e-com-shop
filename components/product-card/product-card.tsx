import Image from "next/image";

interface ProductCardProps {
  product: any;
}

export function ProductCard({ product }: any) {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
            -{Math.round(product.discountPercentage)}%
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {product.brand}
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">•</span>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-yellow-500">★</span>
            <span className="text-xs text-zinc-600 dark:text-zinc-400">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {product.title}
        </h3>
        <p className="mb-4 line-clamp-2 flex-1 text-xs text-zinc-600 dark:text-zinc-400">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.discountPercentage > 0 ? (
              <>
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-xs text-zinc-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {product.stock} left
          </span>
        </div>
      </div>
    </div>
  );
}


