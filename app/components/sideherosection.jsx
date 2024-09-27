import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import Image11 from "../images/image11.png";
const Sideherosection = () => {
  return (
    <div class="p-12 md:w-1/2 flex flex-col items-start">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <Image
          src={logo}
          width={140}
          height={140}
          alt="Picture of the author"
        />
      </a>
      <p class="leading-relaxed my-5">
        We offer AI-powered legal services that are efficient, accessible, and
        reliable. Simplify your legal processes with our innovative solutions
        and expert support.
      </p>
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        If you don't have an account you can{" "}
        <span className="text-blue-600">Register here!</span>
      </h2>
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <Image
          src={Image11}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </a>
    </div>
  );
};

export default Sideherosection;
