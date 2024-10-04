import React from "react";
import Image from "next/image";
import handshake from "../images/handshaking.png";
const Shakehand = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-6">
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="w-28 mb-2 flex items-center justify-center border border-gray-300 rounded-xl py-2 space-x-2">
            {/* <!-- Icon --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v2H8v-2H6v-1h2V8H7V7h1V6h1v1h2v1H9v3h2v1z" />
            </svg>
            {/* <!-- Text --> */}
            <span class="text-gray-600">About Us</span>
          </div>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            At UndrRight, we are revolutionizing
            <br class="hidden lg:inline-block" />
            the legal industry
          </h1>
          <p class="mb-8 leading-relaxed">
            merging cutting-edge AI technology with expert legal knowledge. Our
            mission is to make high-quality legal services accessible to
            everyone, regardless of their location, financial situation, or
            complexity of their legal needs.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            class="object-cover object-center rounded"
            alt="hero"
            src={handshake}
          />
        </div>
      </div>
    </section>
  );
};

export default Shakehand;
