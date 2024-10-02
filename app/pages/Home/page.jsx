import Navbar from "@/app/components/navbar";
import React from "react";
import Image from "next/image";
import first from "../../images/11.png";
import second from "../../images/22.png";
import third from "../../images/33.png";
import fourth from "../../images/44.png";
import five from "../../images/55.png";
import iconfirst from "../../images/icon1.png";
import iconsecond from "../../images/icon2.png";
import iconthird from "../../images/icon3.png";
import ArticalCards from "@/app/components/articalCards";
import Shakehand from "@/app/components/shakehand";
import PricingCards from "@/app/components/pricingCards";
const Page = () => {
  return (
    <div>
      <Navbar />

      {/* Hero section */}

      <div className="bg-gradient-to-b from-black to-gray-800  w-full flex flex-col items-center justify-center text-white relative pt-40 rounded-b-2xl">
        <div>
          <h1 className="font-bold my-4 leading-7 text-center text-4xl tracking-wide">
            Welcome to the
            <span className="text-green-300"> UndrRight</span>{" "}
          </h1>
          <h3 className="font-normal leading-5 text-center text-2xl tracking-wide">
            your personal legal AI Assistant{" "}
          </h3>
        </div>
        <section className="text-gray-600 body-font w-[80%] m-auto">
          <div className="container flex flex-wrap px-5 py-20 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 border-b border-gray-200 text-center text-white">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-300">
                For Consumers
              </h1>
              <p className="leading-relaxed text-base">
                Say goodbye to expensive legal consultation, long waits for
                appointments, and confusing legal texts
              </p>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12 text-center text-white">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-300">
                For Lawyers
              </h1>
              <p className="leading-relaxed text-base">
                Say goodbye to routine tasks. AI Lawyer automate your legal
                research and paperwork, granting you more free time.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button className="p-1 mr-1 border rounded hover:bg-gray-500 text-white text-opacity-80 transition duration-300">
              Get Started
            </button>
            <button className="border p-1 ml-1 rounded hover:bg-gray-500  text-white text-opacity-80 transition duration-300 ">
              How It Works
            </button>
          </div>
        </section>
        <div className=" py-14 my-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center mb-3 text-lg font-semibold leading-8 text-white text-opacity-80">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
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

      {/* Artical cards section */}

      <ArticalCards />

      {/* how it work */}

      <div className="bg-gradient-to-b from-black to-gray-800 w-[90%] mx-auto rounded-2xl mt-10 pb-10">
        <div className=" py-10 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center font-bold leading-8 text-white text-2xl w-[50%] m-auto">
              Navigating the legal landscape is simple with our AI-powered
              platform
            </h2>
            <p className="text-center text-lg font-medium leading-8 text-white mt-4 w-[60%] m-auto">
              Our intuitive system guides you through each step, providing
              clear, actionable insights and solutions, so you can handle your
              legal needs with ease and confidence.
            </p>
          </div>
        </div>
        <section class="text-[#CECECE] body-font">
          <div class="container px-5  mx-auto flex flex-wrap">
            <div class="lg:w-2/3 mx-auto">
              <div className="flex flex-wrap w-full bg-[#2F2F31] rounded-xl py-32 px-10 relative mb-4">
                <div className="text-center relative z-10 w-full">
                  <Image
                    src={iconfirst}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    className="mx-auto"
                  />
                  <p className="leading-relaxed">
                    Begin by entering your legal question or issue into our
                    user-friendly platform. Whether you need advice on a
                    contract, guidance on a legal matter, or help with
                    compliance, simply type in your request and let our AI take
                    it from there.
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/2">
                  <div className="text-center  z-10 flex flex-wrap w-full bg-[#2F2F31] rounded-2xl sm:py-24 py-16 sm:px-10 px-6 relative ">
                    <Image
                      src={iconsecond}
                      width={100}
                      height={100}
                      alt="Picture of the author"
                      className="mx-auto"
                    />
                    <p className="leading-relaxed">
                      Our advanced AI quickly processes your input, leveraging a
                      vast database of legal knowledge and precedents. Within
                      moments, you will receive a personalized response and
                      contact with youerself.
                    </p>
                  </div>
                </div>
                <div class="px-2 w-1/2">
                  <div className="text-center  z-10 flex flex-wrap w-full bg-[#2F2F31] rounded-2xl sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image
                      src={iconthird}
                      width={100}
                      height={100}
                      alt="Picture of the author"
                      className="mx-auto"
                    />
                    <p className="leading-relaxed">
                      Make any necessary adjustments and apply the advice or
                      document to your legal situation. If you have any
                      additional questions or need further assistance, our AI
                      remains available for ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* shakehand*/}
      <Shakehand />
      {/* pricing cards */}
      <PricingCards />
    </div>
  );
};

export default Page;
