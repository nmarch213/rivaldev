import Link from "next/link";
import RivalLogo from "./logo";
import { cn } from "../blog/utils";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/resume": {
    name: "resume",
  },
};

export function Navbar({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <div className="flex items-center gap-6 md:gap-8 w-full justify-between">
        <Link href="/">
          <RivalLogo className="w-12 h-12" />
        </Link>
        <div className="flex gap-6">
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/resume"
            className="text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Resume
          </Link>
        </div>
        <div className="flex gap-4 flex-end justify-end">
          <a
            href="mailto:nmarch213@gmail.com"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
