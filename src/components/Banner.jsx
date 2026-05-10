import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/DHJpYwVP/image.png')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/40 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          <p className="text-lg md:text-xl sm:text-sm mb-6 max-w-xl  text-gray-300">
            Explore our curated digital library of over 50,000 premium titles. Experience high-end typography and seamless reading across all your devices.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-[#37353E] text-[#D4D9D7] px-8 py-4 rounded-full shadow-lg border-none hover:scale-105 transition-transform duration-300 font-semibold">
                Browse Books
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                 Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;