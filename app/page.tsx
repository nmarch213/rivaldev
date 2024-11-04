import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section className="space-y-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Hey, I'm Nicholas March
          <span className="block mt-2 text-2xl font-normal text-gray-500">
            Senior Engineer crafting delightful experiences
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          I specialize in building scalable web applications that focus on the
          user. From delightful interactions to seamless integrations, I turn
          complex challenges into elegant solutions.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Latest thoughts</h2>
        <BlogPosts />
      </div>
    </section>
  );
}
