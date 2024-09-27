import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Sideherosection from "@/app/components/sideherosection";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../././../images/logo.png";
const Page = () => {
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font overflow-hidden my-24">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap justify-center items-center">
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
                  <p className="text-center">Forgot Password?</p>
                  <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center text-white">
                    Reset Your Password
                  </h1>
                  <p className="text-sm font-light text-center dark:text-gray-400 text-white">
                    Enter your email address below, and we'll send you
                    instructions on how to reset your password.
                  </p>
                  <form className="space-y-4 md:space-y-6" action="#">
                    {/* Email Input */}
                    <div>
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

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Reset Password
                      </button>
                    </div>

                    {/* Back to Login */}
                    <div className="text-center">
                      <p className="text-sm font-light dark:text-gray-400 text-white">
                        Remember your password?{" "}
                        <Link
                          href="/"
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Login
                        </Link>
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
