import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <div className="relative w-full h-44 ">
          <ShoppingCart className="object-contain w-32 h-32 text-green-600 mx-auto" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Oops! Nothing Here
        </h2>
        <p className="text-gray-600 mb-8">
          Looks like this page went out of stock! Don't worry, there's plenty
          more fresh content to explore.{" "}
        </p>

        <Link
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
        >
          Go to Homepage
        </Link>
        <Link
          href="/"
          className="ms-4 inline-block bg-white text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
