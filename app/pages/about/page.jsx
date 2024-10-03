import Navbar from "@/app/components/navbar";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import person from "../../images/person-using-artechnology.png";
import happygirl from "../../images/happyfemale.png";
import Shakehand from "@/app/components/shakehand";
import icon from "../../images/icon3.png";
import righticon from "../../images/right.png";
import Footer from "@/app/components/footer";
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
          <span className="text-gray-400">About</span>
        </div>
      </nav>
      <Shakehand />
      {/* person-using-artechnology */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap-reverse w-full justify-center items-center">
            <div class="lg:max-w-lg  md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                class="object-cover object-center rounded"
                alt="hero"
                src={person}
              />
            </div>
            <div class="lg:max-w-lg  md:w-1/2 w-5/6 mb-10 md:mb-0">
              <div class="flex relative pb-12">
                <div class="flex-grow pl-4">
                  <h1 class="font-bold leading-10 text-3xl text-[#000000] mb-1">
                    Legal services more accessible
                  </h1>
                  <p class="leading-relaxed text-[#535353] border-4 border-white border-l-blue-300 rounded-lg pl-3">
                    We are committed to making legal services more accessible,
                    transparent, and efficient. By leveraging AI, we provide
                    users with quick and accurate legal solutions tailored to
                    their unique needs. We believe that everyone deserves access
                    to high-quality legal support, and we are here to make that
                    a reality.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="flex-grow pl-4">
                  <h2 class="font-bold leading-10 text-3xl text-[#000000] mb-1 ">
                    Transformation of legal industry
                  </h2>
                  <p class="leading-relaxed text-[#535353] border-4 border-white border-l-blue-300 rounded-lg pl-3">
                    Our vision is to lead the transformation of the legal
                    industry through technology. We aspire to be the go-to
                    platform for legal services, empowering individuals and
                    businesses to make informed decisions with ease. We aim to
                    continuously innovate and expand our services, ensuring that
                    our users always have the best tools at their fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigating the legal landscape */}
      <div className="bg-gradient-to-b from-black to-gray-800 w-[94%] m-auto rounded-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <h2 className="text-center font-bold leading-8 text-[#FFFFFF] text-2xl w-[50%] m-auto">
            Navigating the legal landscape is simple with our AI-powered
            platform
          </h2>
          <p className="text-center text-lg font-normal leading-6 text-[#FFFFFF] mt-4 w-[50%] m-auto">
            Our intuitive system guides you through each step, providing clear,
            actionable insights and solutions, so you can handle your legal
            needs with ease and confidence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 pb-10">
          {/* first card */}
          <div class="max-w-sm bg-[#2F3131] border-1 border-[#B8B8B8] rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center relative">
            <a href="#" className="mt-10">
              <Image src={icon} width={80} height={80} alt="icon" />
            </a>

            <p class="mb-3 font-normal text-[#CECECE] dark:text-gray-400 text-center p-5">
              Begin by entering your legal question or issue into our
              user-friendly platform. Whether you need advice on a contract,
              guidance on a legal matter, or help with compliance, simply type
              in your request and let our AI take it from there.
            </p>
            <Image
              src={righticon}
              width={40}
              height={40}
              alt="icon"
              className="absolute top-32 -right-5 hide"
            />
          </div>
          {/* second one */}
          <div class="max-w-sm bg-[#2F3131] border-1 border-[#B8B8B8] rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center relative">
            <a href="#" className="mt-10">
              <Image src={icon} width={80} height={80} alt="icon" />
            </a>

            <p class="mb-3 font-normal text-[#CECECE] dark:text-gray-400 text-center p-5">
              Our advanced AI quickly processes your input, leveraging a vast
              database of legal knowledge and precedents. Within moments, you’ll
              receive a personalized response or document tailored to your
              needs, complete with actionable advice.
            </p>
            <Image
              src={righticon}
              width={40}
              height={40}
              alt="icon"
              className="absolute top-32 -right-5 hide"
            />
          </div>
          {/* third one */}
          <div class="max-w-sm bg-[#2F3131] border-1 border-[#B8B8B8] rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center relative">
            <a href="#" className="mt-10">
              <Image src={icon} width={80} height={80} alt="icon" />
            </a>

            <p class="mb-3 font-normal text-[#CECECE] dark:text-gray-400 text-center p-5">
              Make any necessary adjustments and apply the advice or document to
              your legal situation. If you have any additional questions or need
              further assistance, our AI remains available for ongoing support.
            </p>
          </div>
        </div>
      </div>

      {/* four card section */}
      <div class="flex flex-wrap justify-center gap-6 px-10 py-48">
        {/* <!-- Card 1 --> */}
        <div class="bg-white py-6 px-1  flex flex-col w-full sm:w-64">
          {/* <!-- Button with Man Icon and Click Text --> */}
          <button class="flex items-center py-2 rounded border border-[#535353] hover:bg-[#535353] hover:text-white transition duration-300 w-28 px-4 text-[#535353] mb-2">
            {/* <!-- Man Icon (Using Heroicons SVG) --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 12c2.28 0 4.12-1.84 4.12-4.12S14.28 3.76 12 3.76s-4.12 1.84-4.12 4.12S9.72 12 12 12zM18.39 19.9a2.5 2.5 0 00-2.5-2.5h-1.78a5 5 0 00-9.22 0H4.1a2.5 2.5 0 00-2.5 2.5v.36h17.22v-.36z"
              />
            </svg>
            {/* <!-- Button Text --> */}
            Clients
          </button>

          <h1 className="text-2xl font-bold">
            See What are Clients are Saying
          </h1>

          <p class="text-gray-600 mt-2  text-left w-full">
            what some of our clients say about our platform.
          </p>
          <div className="flex justify-start items-center mt-3 space-x-4">
            {/* Backward Button */}
            <button className=" bg-blue-500 text-white rounded-full hover:bg-gray-300 transition duration-300 flex items-center justify-center w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <button className=" bg-blue-500 text-white rounded-full hover:bg-gray-300 transition duration-300 flex items-center justify-center w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

        {/* <!-- Card 2 --> */}
        <div class="bg-gradient-to-b from-[#F6F6F6] to-[#487CD9] rounded-lg py-6 px-2 text-center flex flex-col w-full sm:w-64">
          {/* <!-- Image --> */}
          <div class="mb-4 flex justify-center items-center">
            <Image
              class=" rounded-full object-cover"
              src={happygirl}
              width={60}
              height={60}
              alt="User Image"
            />
            <div className="flex justify-center flex-col">
              <h1 className="font-medium leading-3 text-[#313131]  mb-1 ml-2 text-left">
                Sarah M
              </h1>
              <p className="text-[#000000] leading-3 font-normal ml-2 text-left mt-1 ">
                Small Business Owner
              </p>
            </div>
          </div>

          <p class="text-[#313131] mt-2  text-left w-full">
            “The AI lawyer helped me draft a contract in minutes, saving me
            hours of work. I can not believe how easy it was to use. Highly
            recommend it to any small business owner!”
          </p>
          {/* <!-- Rating Stars --> */}
          <div class="flex justify-left mt-4 items-start">
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="ml-2 text-gray-600 text-sm">4.8</span>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div class="bg-gradient-to-b from-[#F6F6F6] to-[#487CD9] rounded-lg py-6 px-2 text-center flex flex-col w-full sm:w-64">
          {/* <!-- Image --> */}
          <div class="mb-4 flex justify-center items-center">
            <Image
              class=" rounded-full object-cover"
              src={happygirl}
              width={60}
              height={60}
              alt="User Image"
            />
            <div className="flex justify-center flex-col">
              <h1 className="font-medium leading-3 text-[#313131]  mb-1 ml-2 text-left">
                John
              </h1>
              <p className="text-[#000000] leading-3 font-normal ml-2 text-left mt-1 ">
                Freelancer
              </p>
            </div>
          </div>

          <p class="text-[#313131] mt-2  text-left w-full">
            “I was skeptical at first, but the AI provided spot-on legal advice
            for my case. It was like having a lawyer on call 24/7. The best
            part? It is way more affordable than traditional.”
          </p>
          {/* <!-- Rating Stars --> */}
          <div class="flex justify-left mt-4 items-start">
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="ml-2 text-gray-600 text-sm">4.8</span>
          </div>
        </div>

        {/* <!-- Card 4 --> */}
        <div class="bg-gradient-to-b from-[#F6F6F6] to-[#487CD9] rounded-lg py-6 px-2 text-center flex flex-col w-full sm:w-64">
          {/* <!-- Image --> */}
          <div class="mb-4 flex justify-center items-center">
            <Image
              class=" rounded-full object-cover"
              src={happygirl}
              width={60}
              height={60}
              alt="User Image"
            />
            <div className="flex justify-center flex-col">
              <h1 className="font-medium leading-3 text-[#313131]  mb-1 ml-2 text-left">
                Emily
              </h1>
              <p className="text-[#000000] leading-3 font-normal ml-2 text-left mt-1 ">
                Small Business Owner
              </p>
            </div>
          </div>

          <p class="text-[#313131] mt-2  text-left w-full">
            “The AI lawyer helped me draft a contract in minutes, saving me
            hours of work. I can not believe how easy it was to use. Highly
            recommend it to any small business owner!”
          </p>
          {/* <!-- Rating Stars --> */}
          <div class="flex justify-left mt-4 items-start">
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="text-yellow-500">&#9733;</span>
            <span class="ml-2 text-gray-600 text-sm">4.8</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
