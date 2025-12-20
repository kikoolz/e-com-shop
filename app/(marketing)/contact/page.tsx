const ContactPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Contact Us
      </h1>
      <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
          We'd love to hear from you!
        </p>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          If you have any questions, feedback, or inquiries, please don't
          hesitate to reach out to us. Our team is here to help.
        </p>
        <div className="mt-8 space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Email
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              contact@eshop.com
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Phone
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
