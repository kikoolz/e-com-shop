import axios from "axios";
import Link from "next/link";

const fetchBlogDetailsById = async (id) => {
  try {
    const res = await axios.get(`https://dummyjson.com/posts/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const BlogDetailPage = async ({ params }) => {
  const { id } = await params;
  const blogDetails = await fetchBlogDetailsById(id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/blogs"
        className="mb-8 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Back to Blogs
      </Link>
      <article className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {blogDetails.title}
        </h1>
        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {blogDetails.body}
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
