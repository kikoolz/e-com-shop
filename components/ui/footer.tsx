export function Footer() {
  console.log("Footer component rendered");
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © 2024 E-Shop. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
            Powered by Learners Point Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
