interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior UI Engineer",
    company: "Accesso",
    companyUrl: "https://www.accesso.com/",
    location: "Lake Mary, FL",
    period: "04/2021 - Present",
    highlights: [
      "Architected a localization service reducing translation costs by 126,000%",
      "Pioneered AI-driven user experiences for enhanced customer engagement",
      "Designed and engineered multi-tenant e-commerce admin platform",
      "Tech Stack: React (Next.js), Angular, NestJS",
    ],
  },
  {
    title: "Software Engineer",
    company: "Accesso",
    companyUrl: "https://www.accesso.com/",
    location: "Lake Mary, FL",
    period: "04/2021 - 01/2022",
    highlights: [
      "Led initiative reducing client setup time by 75%",
      "Created React component library for internal design system",
      "Conducted technical interviews and mentored junior engineers",
      "Tech Stack: Angular, React, NestJS",
    ],
  },
  {
    title: "Software Engineer",
    company: "Jacobs",
    companyUrl: "https://www.jacobs.com/",
    location: "Fort Walton Beach, FL",
    period: "11/2017 - 03/2021",
    highlights: [
      "Developed scheduling and pilot readiness software for the Air Force",
      "Led migration from on-premise to cloud architecture",
      "Conducted technical training sessions and mentored new hires",
      "Tech Stack: Angular, C#, Angular.js",
    ],
  },
];

export function Experience() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-gray-200 pl-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-medium">{exp.title}</h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-600 mb-2">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}{" "}
              • {exp.location}
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {exp.highlights.map((highlight, j) => (
                <li key={j} className="text-sm">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
