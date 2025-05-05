import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "WOOFS page not found",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        WOOFS! Page Not Found
      </h1>
      <p className="text-lg mb-6">
        Looks like this page ran off chasing this Doggo
      </p>
      <Image
        width={500}
        height={362}
        src="/doggo.gif"
        alt="Confused Dog"
        className="w-64 h-64 object-contain mb-6"
      />
      <Link
        href="/"
        className="px-4 py-2 rounded-xl bg-white text-black hover:bg-gray-200 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
