import React from "react";
import Image from "next/image";
import video from "../images/video.png";
const Videocomponent = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className=" flex items-center justify-center">
            <div className="w-24 mb-2 flex items-center justify-center border border-gray-300 rounded-xl py-2 space-x-2">
              {/* <!-- Icon --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 5C10.9 5 10.02 5.73 9.72 6.8L9.17 8H5C3.9 8 3 8.9 3 10V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V10C21 8.9 20.1 8 19 8H14.83L14.28 6.8C13.98 5.73 13.1 5 12 5zM12 7C12.55 7 13 7.45 13 8H11C11 7.45 11.45 7 12 7zM12 9C14.76 9 17 11.24 17 14C17 16.76 14.76 19 12 19C9.24 19 7 16.76 7 14C7 11.24 9.24 9 12 9zM12 11C10.34 11 9 12.34 9 14C9 15.66 10.34 17 12 17C13.66 17 15 15.66 15 14C15 12.34 13.66 11 12 11z" />
              </svg>

              {/* <!-- Text --> */}
              <span class="text-gray-600">Video</span>
            </div>
          </div>
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
