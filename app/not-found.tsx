import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-semibold text-gray-800">
        Could not find the page you were looking for!
      </div>
      <Link href="/" className="text-black text-2xl hover:underline">
        Return Home
      </Link>
    </div>
  );
}
