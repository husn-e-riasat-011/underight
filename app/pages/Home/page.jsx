import Navbar from "@/app/components/navbar";
import React from "react";
import Image from "next/image";
import left from "../../images/left.png";
import right from "../../images/right.png";
import first from "../../images/11.png";
import second from "../../images/22.png";
import third from "../../images/33.png";
import fourth from "../../images/44.png";
import five from "../../images/55.png";
const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black  w-full flex flex-col items-center justify-center text-white relative pt-40  rounded-2xl">
        <div>
          <h1 className="font-bold my-4 leading-7 text-center text-4xl tracking-wide">
            Welcome to the
            <span className="text-green-300"> UndrRight</span>{" "}
          </h1>
          <h3 className="font-normal leading-5 text-center text-2xl tracking-wide">
            your personal legal AI Assistant{" "}
          </h3>
        </div>
        <section class="text-gray-600 body-font w-[80%] m-auto">
          <div class="container flex flex-wrap px-5 py-20 mx-auto items-center">
            <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 border-b border-gray-200 text-center text-white">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-300">
                For Consumers
              </h1>
              <p class="leading-relaxed text-base">
                Say goodbye to expensive legal consultation, long waits for
                appointments, and confusing legal texts
              </p>
            </div>
            <div class="flex flex-col md:w-1/2 md:pl-12 text-center text-white">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-300">
                For Lawyers
              </h1>
              <p class="leading-relaxed text-base">
                Say goodbye to routine tasks. AI Lawyer automate your legal
                research and paperwork, granting you more free time.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button className="p-1 mr-1 border rounded">Get Started</button>
            <button className="border p-1 ml-1 rounded">How It Works</button>
          </div>
        </section>
        <div className="bg-black py-14 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 ">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 w-[80%] m-auto">
              <Image
                alt="Transistor"
                src={first}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                alt="Transistor"
                src={second}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                alt="Transistor"
                src={fourth}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                alt="Transistor"
                src={five}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                alt="Transistor"
                src={third}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Everything You Are Looking For
          </h2>
          <p className="text-center text-lg font-semibold leading-8 text-gray-900 W-[50%]">
            Explore features that boost your productivity. From document
            automation to advanced research, we've got the hard work covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
