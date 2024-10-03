"use client";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import contactimagee from "../../images/contect-page.png";
import Footer from "@/app/components/footer";
const Page = () => {
  return (
    <div>
      <Navbar />
      <nav className="bg-[#F9F9F9] text-black py-4 px-6 my-20 w-[94%] m-auto rounded-sm">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="font-bold">
            Home
          </Link>
          <span className="border-l border-black h-6"></span>{" "}
          {/* Line between links */}
          <p className="text-gray-400">FAQs</p>
        </div>
      </nav>

      <section>
        <div className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center font-bold leading-8 text-gray-900 text-2xl w-[50%] m-auto">
              All Your Questions Have Answers Here
            </h2>
            <p className="text-center text-lg font-medium leading-8 text-gray-900 mt-4 w-[60%] m-auto">
              Explore our most commonly asked questions to learn more about how
              our AI-powered legal platform works, its benefits, and how it can
              help you manage your legal needs with greater efficiency and
              confidence.
            </p>
          </div>
        </div>
        <div class=" w-[85%] m-auto bg-white flex flex-wrap justify-center items-center ">
          <div class="mx-auto w-[700px] marg">
            <div class="mx-auto grid max-w-xl divide-neutral-200">
              <div class="py-3">
                <details class="group border border-black rounded-xl">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium bg-black rounded-lg p-3">
                    <span className="text-white">
                      {" "}
                      What is an AI-powered legal platform?
                    </span>
                    <span class="transition group-open:rotate-180 text-white">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600 p-2">
                    Our AI-powered legal platform uses advanced artificial
                    intelligence to assist with various legal tasks, such as
                    document drafting, legal research, and compliance
                    monitoring. It’s designed to make legal processes more
                    efficient, accurate, and accessible.
                  </p>
                </details>
              </div>
              <div class="py-3">
                <details class="group border-2 border-black rounded-xl">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium bg-black rounded-lg p-3">
                    <span className="text-white">
                      {" "}
                      How does the AI provide legal advice?
                    </span>
                    <span class="transition group-open:rotate-180 text-white">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600 p-2">
                    Our AI-powered legal platform uses advanced artificial
                    intelligence to assist with various legal tasks, such as
                    document drafting, legal research, and compliance
                    monitoring. It’s designed to make legal processes more
                    efficient, accurate, and accessible.
                  </p>
                </details>
              </div>
              <div class="py-3">
                <details class="group border-2 border-black rounded-xl">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium bg-black rounded-lg p-3">
                    <span className="text-white">
                      {" "}
                      How does the AI provide legal advice?
                    </span>
                    <span class="transition group-open:rotate-180 text-white">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600 p-2">
                    Our AI-powered legal platform uses advanced artificial
                    intelligence to assist with various legal tasks, such as
                    document drafting, legal research, and compliance
                    monitoring. It’s designed to make legal processes more
                    efficient, accurate, and accessible.
                  </p>
                </details>
              </div>
              <div class="py-3">
                <details class="group border-2 border-black rounded-xl">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium bg-black rounded-lg p-3">
                    <span className="text-white">
                      {" "}
                      How does the AI provide legal advice?
                    </span>
                    <span class="transition group-open:rotate-180 text-white">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600 p-2">
                    Our AI-powered legal platform uses advanced artificial
                    intelligence to assist with various legal tasks, such as
                    document drafting, legal research, and compliance
                    monitoring. It’s designed to make legal processes more
                    efficient, accurate, and accessible.
                  </p>
                </details>
              </div>
              <div class="py-3">
                <details class="group border-2 border-black rounded-xl">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium bg-black rounded-lg p-3">
                    <span className="text-white">
                      {" "}
                      How does the AI provide legal advice?
                    </span>
                    <span class="transition group-open:rotate-180 text-white">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600 p-2">
                    Our AI-powered legal platform uses advanced artificial
                    intelligence to assist with various legal tasks, such as
                    document drafting, legal research, and compliance
                    monitoring. It’s designed to make legal processes more
                    efficient, accurate, and accessible.
                  </p>
                </details>
              </div>
            </div>
          </div>
          <div className="w-[400px]">
            <div className="bg-white p-6 border border-[#E1E1E1] rounded-lg">
              <h2 className="text-xl font-semibold mb-4 px-4">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-center border border-white border-b-black py-4 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C8.134 2 5 5.134 5 9c0 5.25 5 11 7 11s7-5.75 7-11c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                    />
                  </svg>

                  <span className="text-[#0B0C0D]">
                    631 ST. Celina, State 111111
                  </span>
                </div>
                <div className="flex items-center border border-white border-b-black py-4 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16.5 3h-9A2.5 2.5 0 005 5.5v13A2.5 2.5 0 007.5 21h9a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0016.5 3zM3 8l9 6 9-6"
                    />
                  </svg>

                  <span className="text-[#0B0C0D]">email@example.com</span>
                </div>
                <div className="flex items-center border border-white border-b-black py-4 px-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8c0-1.657 1.343-3 3-3h1.23c.958 0 1.82.555 2.216 1.42l.912 2.04c.215.48.179 1.042-.094 1.487L9.12 11.88c.26 1.253 1.11 2.103 2.363 2.363l1.934-1.144c.445-.273 1.006-.309 1.486-.094l2.04.912c.865.396 1.42 1.258 1.42 2.216V18c0 1.657-1.343 3-3 3h-1c-6.627 0-12-5.373-12-12V8z"
                    />
                  </svg>

                  <span className="text-[#0B0C0D]">+1 234 567 890</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 px-4 py-1">
                  Social Links
                </h3>
                <div className="flex space-x-2 px-4 pb-24">
                  {/* Facebook Icon */}
                  <a
                    href="#"
                    className="bg-gray-300 rounded-full text-gray-800 hover:bg-blue-400 transition duration-300 flex items-center justify-center h-8 w-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none" // Change fill to none for transparency
                      viewBox="0 0 24 24"
                      stroke="currentColor" // Change stroke to currentColor to match text color
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M22 12h-4v10h-6V12H8V8h4V6c0-3.313 2.687-6 6-6h4v4h-2c-1.104 0-2 .896-2 2v2h4l-2 4z"
                      />
                    </svg>
                  </a>

                  {/* Twitter Icon */}
                  <a
                    href="#"
                    className="bg-gray-300 rounded-full text-gray-800 hover:bg-blue-400 transition duration-300 flex items-center justify-center h-8 w-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4" // Adjust size for better centering
                      fill="none" // Change fill to none for transparency
                      viewBox="0 0 24 24"
                      stroke="currentColor" // Change stroke to currentColor to match text color
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M23.49 4.148c-.885.392-1.83.656-2.83.775a4.925 4.925 0 002.163-2.724c-.94.555-1.98.958-3.086 1.175a4.916 4.916 0 00-8.48 4.482A13.944 13.944 0 011.67 3.149 4.916 4.916 0 003.16 10.06a4.903 4.903 0 01-2.224-.616v.061a4.92 4.92 0 003.946 4.83 4.925 4.925 0 01-2.21.084 4.922 4.922 0 004.588 3.417A9.867 9.867 0 010 19.539a13.927 13.927 0 007.548 2.212c9.057 0 14.003-7.492 14.003-13.986 0-.213-.005-.426-.014-.637A10.029 10.029 0 0024 4.59a9.845 9.845 0 01-2.51.686 4.943 4.943 0 002.165-2.724z"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn Icon */}
                  <a
                    href="#"
                    className="bg-gray-300 rounded-full text-gray-800 hover:bg-blue-400 transition duration-300 flex items-center justify-center h-8 w-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4" // Adjust size for better centering
                      fill="none" // Change fill to none for transparency
                      viewBox="0 0 24 24"
                      stroke="currentColor" // Change stroke to currentColor to match text color
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 8a6 6 0 10-12 0 6 6 0 0012 0zm-1 8H7v6h8v-6zM12 2c1.104 0 2 .896 2 2v1h-4V4c0-1.104.896-2 2-2z"
                      />
                    </svg>
                  </a>

                  {/* Instagram Icon */}
                  <a
                    href="#"
                    className="bg-gray-300 rounded-full text-gray-800 hover:bg-blue-400 transition duration-300 flex items-center justify-center h-8 w-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4" // Adjust size for better centering
                      fill="none" // Change fill to none for transparency
                      viewBox="0 0 24 24"
                      stroke="currentColor" // Change stroke to currentColor to match text color
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 1H8C4.69 1 2 3.69 2 7v10c0 3.31 2.69 6 6 6h8c3.31 0 6-2.69 6-6V7c0-3.31-2.69-6-6-6zM12 4a8 8 0 100 16 8 8 0 000-16zm4 11a4 4 0 11-8 0 4 4 0 018 0zm1-10a1 1 0 10-2 0 1 1 0 002 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* last sectrion */}
      <section className="my-36">
        <div class=" w-[85%] m-auto bg-white flex flex-wrap justify-center items-center ">
          <div class="mx-auto w-[700px] marg">
            <Image
              src={contactimagee}
              width={700}
              height={600}
              alt="Picture of the author"
            />
          </div>
          <div className="w-[400px] ">
            <div className="bg-white p-6 border border-[#E1E1E1] rounded-lg ">
              <h2 className="text-2xl font-semibold mb-4">Fill Out the Form</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Eric"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    placeholder="Additional Message"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-28 py-2 text-[#535353] rounded-xl border border-[#5355] hover:bg-gray-600 hover:text-white transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
