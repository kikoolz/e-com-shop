import axios from "axios";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  body: string;
}

const fetchBlogs = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/posts");
    return res.data.posts;
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
};

const BlogsPage = async () => {
  const blogs = await fetchBlogs();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Our Blog
      </h1>
      {blogs.length > 1 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: Blog) => {
            return (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="group rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <h2 className="mb-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                  {blog.title}
                </h2>
                <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {blog.body}
                </p>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-600 dark:text-zinc-400">No blogs found.</p>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
