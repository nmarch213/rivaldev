import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-16">
      {/* Hero Section */}
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
        <div className="flex gap-4">
          <a
            href="mailto:nmarch213@gmail.com"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Latest Posts */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
        <BlogPosts />
      </div>

      {/* Tech Stack */}
      <div className="border-t pt-8">
        <h3 className="text-sm font-medium text-gray-500 mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Angular",
            "NestJS",
            "TypeScript",
            "Node.js",
            "AI Integration",
            "Cloud Architecture",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
