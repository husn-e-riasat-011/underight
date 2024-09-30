import React from "react";
import Image from "next/image";
import handshake from "../images/handshaking.png";
const Shakehand = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-6">
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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
