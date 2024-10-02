import React from "react";

const PricingCards = () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden bg-gradient-to-b from-black to-gray-800 w-[96%] m-auto rounded-2xl">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex justify-between items-center monthly mb-20 w-[90%] m-auto">
          <div>
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white text-opacity-80">
              Simple and Flexible Pricing
            </h1>
            <p class="leading-relaxed w-[70%] text-base text-white text-opacity-80">
              Choose the plan that fits your legal needs and budget. Get started
              with flexible options designed for individuals, professionals, and
              businesses.
            </p>
          </div>
          <div class="flex border-2 border-gray-500 rounded w-48 h-12">
            <button class="py-1 px-4 bg-gray-500 text-white focus:outline-none focus:bg-gray-500 focus:text-white focus-within:bg-white focus-within:text-gray-500">
              Monthly
            </button>
            <button class="py-1 px-4 bg-white text-gray-500 focus:outline-none focus:bg-gray-500 focus:text-white focus-within:bg-white focus-within:text-gray-500">
              Annually
            </button>
          </div>
        </div>

        {/* pricing Cards */}
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg xl:p-8 dark:bg-gray-800 dark:text-white">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden text-[#A3A1A1] bg-[#2F2F31]">
              <h2 class=" tracking-widest title-font mb-1 font-medium text-left text-xl">
                Basic Plan
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center mb-4">
                <span className="text-white">$29</span>
                <span class="text-lg ml-1 font-normal text-[#A3A1A1]">
                  per month
                </span>
              </h1>
              <p className="border-b border-dashed border-gray-200 pb-4 mb-4 text-left">
                Individuals needing occasional legal help.
              </p>
              <p class="flex items-center  text-left  mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                3 AI consultations per month
              </p>
              <p class="flex items-center text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Document review (up to 5 pages)
              </p>
              <p class="flex items-center  text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Basic legal research
              </p>
              <button class="flex items-center mt-auto text-center justify-center text-white bg-[#1F1F20] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Get Started
              </button>
            </div>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border bg-[#EDEDED] border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div class="h-full p-6 rounded-lg  flex flex-col relative overflow-hidden text-[#686767]">
              <h2 class="tracking-widest title-font mb-1 font-medium text-black text-left text-xl">
                Professional Plan
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center mb-4">
                <span className="text-Black">$49</span>
                <span class="text-lg ml-1 font-normal text-[#686767]">
                  per month
                </span>
              </h1>
              <p className="border-b border-dashed border-black pb-4 mb-4 text-left">
                Small businesses & professionals.
              </p>
              <p class="flex items-center  text-left  mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black border border-black rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                10 AI consultations per month
              </p>
              <p class="flex items-center text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black border border-black rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Document drafting and review (up to 20 pages)
              </p>
              <p class="flex items-center  text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black border border-black rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Advanced legal research
              </p>
              <button class="flex items-center mt-auto text-center justify-center text-white bg-[#1F1F20] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Get Started
              </button>
            </div>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg xl:p-8 dark:bg-gray-800 dark:text-white">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden text-[#A3A1A1] bg-[#2F2F31]">
              <h2 class="tracking-widest title-font mb-1 font-medium text-left text-xl">
                Business Paln
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center mb-4">
                <span className="text-white">$99</span>
                <span class="text-lg ml-1 font-normal text-[#A3A1A1]">
                  per month
                </span>
              </h1>
              <p className="border-b border-dashed border-gray-200 pb-4 mb-4 text-left">
                Businesses needing regular legal support.
              </p>
              <p class="flex items-center  text-left  mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Unlimited AI consultations
              </p>
              <p class="flex items-center text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Document drafting and review (unlimited pages)
              </p>
              <p class="flex items-center  text-left mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Full legal research and analysis
              </p>
              <button class="flex items-center mt-auto text-center justify-center text-white bg-[#1F1F20] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
