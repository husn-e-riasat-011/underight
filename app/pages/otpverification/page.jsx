"use client";
import Navbar from "@/app/components/navbar";
import React from "react";
import Image from "next/image";
import logo from "../././../images/logo.png";
import Footer from "@/app/components/footer";
const Page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-cente py-40">
        <div className="w-full bg-black text-white rounded-lg shadow dark:border md:mt-30 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 mt-30 pt-10">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse justify-center"
          >
            <Image src={logo} width={130} height={130} alt="Logo" />
          </a>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-center">OTP Verification</p>
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center text-white">
              Verify Your Account
            </h1>
            <p className="text-sm font-light text-center dark:text-gray-400 text-white">
              Enter the 6-digit OTP code we sent to your email.
            </p>

            {/* OTP Input Fields */}
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="flex space-x-2 justify-center text-black">
                {/* Individual OTP digit inputs */}
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center text-xl bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onInput={(e) => {
                      const input = e.target;
                      if (
                        input.value.length === 1 &&
                        input.nextElementSibling
                      ) {
                        input.nextElementSibling.focus();
                      }
                    }}
                  />
                ))}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Verify OTP
                </button>
              </div>

              {/* Resend OTP */}
              <div className="text-center">
                <p className="text-sm font-light dark:text-gray-400 text-white">
                  Didn't receive the OTP?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Resend OTP
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
