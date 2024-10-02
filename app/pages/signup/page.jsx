import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Sideherosection from "@/app/components/sideherosection";
import Image from "next/image";
import logo from "../././../images/logo.png";
// import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font overflow-hidden my-24">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap-reverse justify-center items-center">
            <Sideherosection />
            <div className="px-12 md:w-1/2 flex flex-col items-start">
              <div className="w-full bg-black text-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 m-10 pt-10">
                <a
                  href="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse justify-center"
                >
                  <Image src={logo} width={130} height={130} alt="Logo" />
                </a>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <p className="text-center">Register Here</p>
                  <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center text-white">
                    Register to <span className="text-blue-600">UndrRight</span>
                  </h1>
                  <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    action="#"
                  >
                    {/* First Name */}
                    <div className="md:w-full">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium dark:text-white text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    {/* Last Name */}
                    <div className="md:w-full">
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium dark:text-white text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="md:w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium dark:text-white text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="md:w-full">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium dark:text-white text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>

                    {/* Password */}
                    <div className="md:w-full">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium dark:text-white text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="md:w-full">
                      <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium dark:text-white text-white"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>

                    {/* Accept Services */}
                    <div className="md:col-span-2">
                      <div className="flex items-start">
                        <input
                          id="acceptServices"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required
                        />
                        <label
                          htmlFor="acceptServices"
                          className="ml-2 text-sm font-medium text-white dark:text-gray-300"
                        >
                          I accept all services and the terms and conditions.
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Register
                      </button>
                    </div>

                    {/* Already have an account */}
                    <div className="md:col-span-2 text-center">
                      <p className="text-sm font-light dark:text-gray-400 text-white">
                        Already have an account?{" "}
                        <a
                          href="/"
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
