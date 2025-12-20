"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await axios.get("https://dummyjson.com/products");
      setProducts(resp.data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Our Products
      </h2>

      {products.length > 1 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`products/${product.id}`}
                className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div className="aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                    {product.title}
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    ${product.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-600 dark:text-zinc-400">Products not found</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
