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
      <div className="flex items-center gap-6 md:gap-8">
        <Link href="/">
          <RivalLogo className="w-12 h-12" />
        </Link>
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
    </nav>
  );
}
