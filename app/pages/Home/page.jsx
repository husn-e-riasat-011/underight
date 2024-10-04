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
import Videocomponent from "@/app/components/videocomponent";
import Betterway from "@/app/components/betterway";
import Footer from "@/app/components/footer";
import cooma from "../../images/cooma.png";
import happy from "../../images/happyfemale.png";
import Tfirst from "../../images/t-21.png";
import Tsecond from "../../images/t-51.png";
import left from "../../images/left.png";
import right from "../../images/right.png";
const Page = () => {
  return (
    <div>
      <Navbar />
      {/* Hero section */}
      <div
        className="w-full flex flex-col items-center justify-center text-white relative pt-40 rounded-b-2xl"
        style={{
          background:
            "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
        }}
      >
        <div className="mt-10">
          <h1 className="font-sans text-[60px] font-bold leading-[89px] tracking-[0.4px] text-center text-[#FFFFFF]">
            Welcome to the
            <span className="text-[#55F4EA]"> UndrRight</span>{" "}
          </h1>
          <h3 className="font-sans text-[30px] font-bold leading-[59px] tracking-[0.1px] text-center text-[#FFFFFF]">
            your personal legal AI Assistant{" "}
          </h3>
        </div>
        <section className="text-gray-600 body-font w-[80%] m-auto">
          <div className="container flex flex-wrap px-5 py-20 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r-2 md:border-b-0 mb-10 md:mb-0 border-b-2 border-white text-center text-white">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#55F4EA]">
                For Consumers
              </h1>
              <p className="leading-relaxed text-base text-[#FFFFFF]">
                Say goodbye to expensive legal consultation, long waits for
                appointments, and confusing legal texts
              </p>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12 text-center text-white">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#55F4EA]">
                For Lawyers
              </h1>
              <p className="leading-relaxed text-base">
                Say goodbye to routine tasks. AI Lawyer automate your legal
                research and paperwork, granting you more free time.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button className="border border-[#5E5E5E] rounded-xl bg-[#1B1B1C] px-3 py-1 text-[#FFFFFF]">
              Get Started
            </button>
            <button className="border border-[#5E5E5E] rounded-xl bg-[#1B1B1C] px-3 py-1 text-[#FFFFFF] ml-2 ">
              How It Works
            </button>
          </div>
        </section>
        <div className=" py-6 my-16">
          <div className="mx-auto px-6 lg:px-8">
            <h2 className=" mb-4 text-lg font-sans text-[40px] font-bold leading-[89px] tracking-[0.4px] text-center text-[#FFFFFF]">
              As Featured In
            </h2>
            <div className=" bg-[#A3A3A3] p-5 flex items-center gap-x-8 gap-y-10 justify-items-center rounded-xl  w-full relative ">
              <div className=" flex justify-center">
                <Image
                  alt="Transistor"
                  src={left}
                  width={130} // Fixed width
                  height={30} // Fixed height
                  className="h-8 w-[80px] object-contain" // Fixed height with object containment
                />
              </div>
              <div className="border-r border-black pr-4 last:border-r-0 flex justify-center">
                <Image
                  alt="Transistor"
                  src={first}
                  width={130} // Fixed width
                  height={30} // Fixed height
                  className="h-8 w-[130px] object-contain" // Fixed height with object containment
                />
              </div>
              <div className="border-r border-black pr-4 last:border-r-0 flex justify-center">
                <Image
                  alt="Transistor"
                  src={second}
                  width={130} // Fixed width
                  height={30} // Fixed height
                  className="h-8 w-[130px] object-contain" // Fixed height with object containment
                />
              </div>
              <div className="border-r border-black pr-4 last:border-r-0 flex justify-center">
                <Image
                  alt="Transistor"
                  src={third}
                  width={130} // Fixed width
                  height={30} // Fixed height
                  className="h-8 w-[130px] object-contain" // Fixed height with object containment
                />
              </div>
              <div className="border-r border-black pr-4 last:border-r-0 flex justify-center">
                <Image
                  alt="Transistor"
                  src={fourth}
                  width={130} // Fixed width
                  height={30} // Fixed height
                  className="h-8 w-[130px] object-contain" // Fixed height with object containment
                />
              </div>
              <div className=" last:border-r-0 flex justify-center">
                <Image
                  alt="Transistor"
                  src={five}
                  width={130} // Fixed width
                  height={30} // Fixed height
                  className="h-8 w-[130px] object-contain" // Fixed height with object containment
                />
              </div>

              <div className=" flex justify-center">
                <Image
                  alt="Transistor"
                  src={right}
                  width={130} // Fixed width
                  height={30} // Fixed height
                  className="h-8 w-[80px] object-contain" // Fixed height with object containment
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Artical cards section */}
      <ArticalCards />
      {/* how it work */}
      <div
        className="w-[90%] mx-auto rounded-2xl mt-10 pb-10"
        style={{
          background:
            "radial-gradient(100% 100% at 52.08% 100%, #363636 0%, #141414 43.58%, #050505 100%)",
        }}
      >
        <div className=" py-10 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="flex items-center justify-center my-4">
              <div class="w-36 border border-[#5E5E5E] flex items-center justify-center bg-[#2F2F31] rounded-xl py-2 space-x-2">
                {/* <!-- Icon --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-[#FFFFFF]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0l-9.172 9.172a2 2 0 00-.586 1.414V15a1 1 0 001 1h1.828a2 2 0 001.414-.586l9.172-9.172a2 2 0 000-2.828l-1.828-1.828zM15.586 4L14 5.586 12.414 4 14 2.414 15.586 4zM11 7.414L8.586 10H8v-.586L10.586 7H11V7.414z" />
                  <path d="M5 16H4v-1l1-1h1v1H5v1z" />
                </svg>
                {/* <!-- Text --> */}
                <span class="text-[#FFFFFF]">How it works</span>
              </div>
            </div>

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
              <div className="flex flex-wrap w-full bg-[#2F2F31] border border-[#5E5E5E] rounded-xl py-32 px-10 relative mb-4">
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
                  <div className="text-center  z-10 flex flex-wrap w-full bg-[#2F2F31] border border-[#5E5E5E] rounded-2xl sm:py-24 py-16 sm:px-10 px-6 relative ">
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
                  <div className="text-center  z-10 flex flex-wrap w-full bg-[#2F2F31] border border-[#5E5E5E] rounded-2xl sm:py-24 py-16 sm:px-10 px-6 relative">
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
      {/* videocomponent */}
      <Videocomponent />
      {/* betterway section */}
      <Betterway />
      {/* client section */}
      <div className="bg-white py-18">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className=" flex items-center justify-center">
              <div className="w-28 mb-2 flex items-center justify-center border border-gray-300 rounded-xl py-2 space-x-2">
                {/* <!-- Icon --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zM9 10a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4zM15.732 10.732a2.5 2.5 0 111.768 4.268 1 1 0 00.5-.866v-1a3 3 0 00-1.732-2.732zM2.5 13.732a2.5 2.5 0 111.768-4.268A3 3 0 002 13v1a1 1 0 00.5.866 2.5 2.5 0 01-.5-.134z" />
                </svg>

                {/* <!-- Text --> */}
                <span class="text-gray-600">Clients</span>
              </div>
            </div>
            <h2 className="text-center font-bold leading-8 text-gray-900 text-2xl w-[50%] m-auto">
              See What are Clients are Saying
            </h2>
            <p className="text-center text-lg font-medium leading-8 text-gray-900 mt-4 w-[60%] m-auto">
              Here what some of our clients say about our platform.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* first card */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={cooma} width={100} height={100} alt="" />
            </a>
            <div class="p-5 text-center">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                “The AI lawyer helped me draft a contract in minutes, saving me
                hours of work. I can not believe how easy it was to use. Highly
                recommend it to any small business owner!”
              </p>
            </div>
            <a href="#">
              <Image
                src={Tfirst}
                width={70}
                height={70}
                className="rounded-full"
                alt="pic"
              />
            </a>
            <h1 className="font-medium leading-3 text-[#313131] mt-3 mb-1">
              Sarah M
            </h1>
            <p className="text-[#A6A6A6] leading-3 font-normal mb-10 mt-1">
              Small Business Owner
            </p>
          </div>
          {/* second one */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={cooma} width={100} height={100} alt="" />
            </a>
            <div class="p-5 text-center">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                “I was skeptical at first, but the AI provided spot-on legal
                advice for my case. It was like having a lawyer on call 24/7.
                The best part? It is way more affordable than traditional.”
              </p>
            </div>
            <a href="#">
              <Image
                src={Tsecond}
                width={70}
                height={70}
                className="rounded-full"
                alt="pic"
              />
            </a>
            <h1 className="font-medium leading-3 text-[#313131] mt-3 mb-1">
              John D
            </h1>
            <p className="text-[#A6A6A6] leading-3 font-normal mb-10 mt-1">
              Freelancer
            </p>
          </div>
          {/* third one */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
            <a href="#" className="mt-10">
              <Image src={cooma} width={100} height={100} alt="" />
            </a>
            <div class="p-5 text-center">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                “As a startup founder, I often need quick legal insights. The AI
                lawyer has been a game-changer for us. It is like having an
                in-house legal team without the overhead.”
              </p>
            </div>
            <a href="#">
              <Image
                src={happy}
                width={70}
                height={70}
                className="rounded-full"
                alt="pic"
              />
            </a>
            <h1 className="font-medium leading-3 text-[#313131] mt-3 mb-1">
              Emily R
            </h1>
            <p className="text-[#A6A6A6] leading-3 font-normal mb-10 mt-1">
              Startup Founder
            </p>
          </div>
        </div>

        {/* Learn more buttoon */}

        <div className="flex justify-center items-center m-20 space-x-4">
          {/* Backward Button */}
          <button className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300 flex items-center">
            {/* Backward Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Forward Button */}
          <button className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300 flex items-center">
            {/* Forward Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Page;
