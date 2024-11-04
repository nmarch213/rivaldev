export default function RivalLogo({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="20" fill="black" />
      <path
        d="M30 70V30H70C70 40 70 50 50 50M50 50H70L60 70"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
