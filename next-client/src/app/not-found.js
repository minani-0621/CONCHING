import Link from "next/link";

export default function NotFound() {
  return (
    <div className="prose mx-auto flex h-full w-full flex-col items-center justify-center">
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
