import React from "react";
import Image from "next/image";
import eleven from "../images/111.png";
import Twelve from "../images/222.png";
import Thirteen from "../images/333.png";
import Sixteen from "../images/Sixteen.png";
import { FaPersonBiking, FaPersonBurst } from "react-icons/fa6";
const ArticalCards = () => {
  return (
    <div>
      <div className="bg-white py-18">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="flex items-center justify-center my-4">
              <div className="w-32 flex items-center justify-center border border-gray-300 rounded-xl py-2 space-x-2">
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
                <span class="text-gray-600">Features</span>
              </div>
            </div>

            <h2 className="text-center font-bold leading-8 text-[#000000] text-2xl w-[50%] m-auto">
              Everything You Are Looking For
            </h2>
            <p className="text-center text-lg font-medium leading-8 text-[#535353] mt-4 w-[60%] m-auto">
              Explore features that boost your productivity. From document
              automation to advanced research, we have got the hard work
              covered.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* first card */}
          <div class="max-w-sm bg-white">
            <div className="border border-[#ACACAC] rounded-2xl">
              <Image src={eleven} alt="pic" className="p-1 " />
            </div>
            <div class="p-5">
              <div className="flex gap-2 items-center">
                <FaPersonBiking />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Instant Legal Consultation
                </h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Get real-time legal advice from our AI lawyer 24/7. No need to
                wait for appointments—just ask your question and receive instant
                guidance tailored to your specific situation.
              </p>
            </div>
          </div>
          {/* second one */}
          <div class="max-w-sm bg-white">
            <div className="border border-[#ACACAC] rounded-2xl">
              <Image src={Twelve} alt="" className="p-1" />
            </div>
            <div class="p-5">
              <div className="flex gap-2 items-center">
                <FaPersonBurst />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Document Review & Drafting
                </h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Upload your contracts, agreements, or any legal documents, and
                our AI will analyze and draft them to perfection, ensuring all
                legal loopholes are covered.
              </p>
            </div>
          </div>
          {/* third one */}
          <div class="max-w-sm bg-white">
            <div className="border border-[#ACACAC] rounded-2xl">
              <Image src={Thirteen} alt="" className="p-1 rounded-xl" />
            </div>
            <div class="p-5">
              <div className="flex gap-2 items-center">
                <FaPersonBurst />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Personalized Legal Solutions
                </h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Receive tailored legal solutions based on your unique
                circumstances. Our AI assesses your case and provides
                step-by-step guidance to resolve your legal matters efficiently.
              </p>
            </div>
          </div>
          {/* forth */}
          <div class="max-w-sm bg-white">
            <div className="border border-[#ACACAC] rounded-2xl">
              <Image src={Twelve} alt="" className="p-1" />
            </div>
            <div class="p-5">
              <div className="flex gap-2 items-center">
                <FaPersonBurst />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Case Preparation Assistance
                </h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Prepare your case with confidence. Our AI helps you organize
                evidence, draft legal arguments, and understand the strengths
                and weaknesses of your case.
              </p>
            </div>
          </div>
          {/* fiveth */}
          <div class="max-w-sm bg-white">
            <div className="border border-[#ACACAC] rounded-2xl">
              <Image src={Thirteen} alt="" className="p-1 rounded-xl" />
            </div>
            <div class="p-5">
              <div className="flex gap-2 items-center">
                <FaPersonBurst />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Legal Research on Demand
                </h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Access comprehensive legal research in minutes. Our AI scours
                legal databases and precedents to find relevant case law,
                statutes, and legal arguments for your situation.
              </p>
            </div>
          </div>
          {/* 6th */}
          <div class="max-w-sm bg-white">
            <div className="border border-[#ACACAC] rounded-2xl">
              <Image src={Sixteen} alt="" className="p-1" />
            </div>
            <div class="p-5">
              <div className="flex gap-2 items-center">
                <FaPersonBurst />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Legal Alerts & Updates
                </h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Stay informed with real-time legal alerts and updates relevant
                to your field or personal interests. Our AI monitors changes in
                laws and regulations that could impact you.
              </p>
            </div>
          </div>
        </div>

        {/* Learn more buttoon */}

        <div className="flex justify-center items-center m-10 py-10">
          <button className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticalCards;
