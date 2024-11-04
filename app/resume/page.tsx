import { Experience } from "../components/experience";

export default function ResumePage() {
  return (
    <article className="max-w-2xl">
      <header className="mb-12">
        <h1 className="mb-2 text-3xl font-bold tracking-tighter">
          Nicholas March
        </h1>
        <p className="text-lg text-gray-600">Senior UI Engineer</p>
        <p className="mt-4 text-gray-600">
          Specialized in building scalable web applications with React, Angular,
          and Node.js. Focused on developer experience, AI integration, and
          enterprise solutions.
        </p>
      </header>

      <Experience />

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Angular",
            "NestJS",
            "TypeScript",
            "Node.js",
            "C#",
            "UI/UX",
            "Cloud Architecture",
            "AI Integration",
            "Localization",
            "Team Leadership",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
