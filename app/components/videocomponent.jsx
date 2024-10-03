import React from "react";
import Image from "next/image";
import video from "../images/video.png";
const Videocomponent = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-bold leading-8 text-gray-900 text-2xl w-[50%] m-auto">
            Discover How We Simplify Legal Processes
          </h2>
          <p className="text-center text-lg font-normal text-gray-900 mt-4 w-[50%] m-auto">
            Watch this quick overview to learn how our AI-powered tools
            transform the way you handle legal tasks. From instant legal advice
            to automated document drafting, see how we make complex legal work
            effortless and accessible for everyone.
          </p>
        </div>
        <a
          href="https://infoportfolio.netlify.app/"
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded mt-8 cursor-pointer"
        >
          <Image alt="video" src={video} />
        </a>
      </div>
    </section>
  );
};

export default Videocomponent;
