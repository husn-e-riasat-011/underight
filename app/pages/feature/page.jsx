import ArticalCards from "@/app/components/articalCards";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <nav className="bg-[#F9F9F9] text-black py-4 px-6 mt-20 w-[94%] m-auto rounded-sm">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="font-bold">
            Home
          </Link>
          <span className="border-l border-black h-6"></span>{" "}
          {/* Line between links */}
          <a href="#about" className="text-gray-400">
            Features
          </a>
        </div>
      </nav>
      <ArticalCards />
    </div>
  );
};

export default Page;
