export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
          Welcome to E-Shop
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
          Discover amazing products and read our latest blog posts
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/products"
            className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Browse Products
          </a>
          <a
            href="/blogs"
            className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Read Blogs
          </a>
        </div>
      </div>
    </div>
  );
}
