const AboutPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        About Us
      </h1>
      <div className="space-y-6 rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          Welcome to E-Shop, your trusted destination for quality products and
          engaging content.
        </p>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          We are committed to providing you with the best shopping experience
          and keeping you informed through our blog posts. Our mission is to
          deliver excellence in every interaction.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
