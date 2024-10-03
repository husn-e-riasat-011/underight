import Navbar from "@/app/components/navbar";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import contactimage from "../../images/contact-us-image.png";
import Footer from "@/app/components/footer";
const Page = () => {
  return (
    <div>
      <Navbar />
      {/* secon navbar */}
      <nav className="bg-[#F9F9F9] text-black py-4 px-6 mt-20 w-[94%] m-auto rounded-sm">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="font-bold">
            Home
          </Link>
          <span className="border-l border-black h-6"></span>{" "}
          {/* Line between links */}
          <a href="#about" className="text-gray-400">
            Contactus
          </a>
        </div>
      </nav>
      <div className="flex justify-center w-[94%] m-auto my-40">
        <Image
          src={contactimage}
          width={1270}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <section className="py-12 px-6 md:px-12 my-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 w-[85%] m-auto">
          {/* Contact Information */}
          <div className="bg-white p-6 ">
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch with Us
            </h2>
            <p className="text-gray-600 mb-6">
              We’re Here to Help Whether you have questions about our services,
              need assistance with your account, or want to learn more about how
              our AI-powered legal platform can benefit you, our team is ready
              to assist.
            </p>
            <div className="space-y-4">
              <div className="flex items-center bg-gray-800 text-white p-4 rounded-lg">
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

                <span>631 ST. Celina, State 111111</span>
              </div>
              <div className="flex items-center bg-gray-800 text-white p-4 rounded-lg">
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

                <span>email@example.com</span>
              </div>
              <div className="flex items-center bg-gray-800 text-white p-4 rounded-lg">
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

                <span>+1 234 567 890</span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Social Links</h3>
              <div className="flex space-x-2">
                {/* Facebook Icon */}
                <a
                  href="#"
                  className="bg-gray-300 p-2 rounded-full text-gray-800 hover:bg-blue-400 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.494v-9.293H9.691v-3.623h3.128V8.413c0-3.097 1.892-4.787 4.656-4.787 1.324 0 2.463.098 2.794.142v3.24h-1.918c-1.504 0-1.796.716-1.796 1.764v2.31h3.587l-.467 3.623h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>

                {/* Twitter Icon */}
                <a
                  href="#"
                  className="bg-gray-300 p-2 rounded-full text-gray-800 hover:bg-blue-500 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57c-.885.392-1.83.655-2.825.775a4.935 4.935 0 002.163-2.724 9.861 9.861 0 01-3.127 1.197A4.92 4.92 0 0016.616 3c-2.73 0-4.948 2.218-4.948 4.947 0 .387.043.765.127 1.124-4.116-.207-7.766-2.175-10.21-5.144-.427.735-.669 1.587-.669 2.496 0 1.723.874 3.238 2.197 4.129-.81-.026-1.575-.247-2.243-.616v.062c0 2.41 1.713 4.415 3.977 4.868-.417.112-.855.171-1.305.171-.318 0-.628-.031-.935-.088.631 1.963 2.445 3.394 4.594 3.43A9.868 9.868 0 012 18.54c1.51 1.303 3.268 2.067 5.204 2.067 6.247 0 9.688-5.18 9.688-9.688 0-.148-.004-.295-.012-.441A6.935 6.935 0 0024 4.59l-.047-.02z" />
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="#"
                  className="bg-gray-300 p-2 rounded-full text-gray-800 hover:bg-blue-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM7.5 19H4.5V9h3v10zm-1.5-11.5c-1.036 0-1.5-.663-1.5-1.5S5.964 5 7 5s1.5.664 1.5 1.5S8.536 7.5 7.5 7.5zM19 19h-3v-5.5c0-1.425-.028-3.25-1.974-3.25-1.973 0-2.278 1.537-2.278 3.111V19h-3v-10h3v1.425c.4-.612 1.127-1.425 2.379-1.425 2.548 0 3.181 1.671 3.181 3.967V19z" />
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a
                  href="#"
                  className="bg-gray-300 p-2 rounded-full text-gray-800 hover:bg-blue-700 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.207 0 3.578.012 4.844.07 1.197.058 1.804.247 2.227.412.53.205.912.457 1.309.954.397.397.748.779.954 1.309.165.423.354 1.03.412 2.227.058 1.266.07 1.637.07 4.844s-.012 3.578-.07 4.844c-.058 1.197-.247 1.804-.412 2.227-.205.53-.457.912-.954 1.309-.397.397-.779.748-1.309.954-.423.165-1.03.354-2.227.412-1.266.058-1.637.07-4.844.07s-3.578-.012-4.844-.07c-1.197-.058-1.804-.247-2.227-.412-.53-.205-.912-.457-1.309-.954-.397-.397-.748-.779-.954-1.309-.165-.423-.354-1.03-.412-2.227C2.175 15.578 2.163 15.207 2.163 12s.012-3.578.07-4.844c.058-1.197.247-1.804.412-2.227.205-.53.457-.912.954-1.309.397-.397.779-.748 1.309-.954.423-.165 1.03-.354 2.227-.412C8.422 2.175 8.793 2.163 12 2.163zm0-2.163C8.745 0 8.35.013 7.054.071 5.84.133 5.2.292 4.62.55 3.955.826 3.393 1.389 3.05 2.048.726 3.522.43 5.003.063 6.184-.014 6.43-.014 7.18-.014 12s0 5.57.049 6.816c.054 1.185.675 2.204 1.73 3.157.607.607 1.364 1.069 2.287 1.373.663.216 1.411.41 2.137.545.412.066.821.097 1.249.097 1.74 0 2.82-.008 3.69-.071.874-.063 1.623-.156 2.344-.35.55-.164 1.01-.488 1.394-.872.576-.576.856-1.195 1.047-1.68.25-.573.429-1.287.511-2.134.038-.427.054-.83.063-1.22.012-.468.017-.854.017-1.187 0-1.128-.004-1.576-.017-1.576-.045-.016-.2-.006-.343-.01-.064-.002-.132-.003-.2-.003-2.041 0-3.793-.062-4.904-.182a5.392 5.392 0 01-3.219-1.708 5.396 5.396 0 01-1.706-3.22c-.12-1.111-.182-2.863-.182-4.904 0-.068.001-.136.003-.2.004-.143.002-.298-.01-.343-.012-.013-.447-.017-1.576-.017-1.14 0-2.468.004-3.356.017-.688.012-1.049.016-1.187.017-.39.003-.793.004-1.22.064-.747.082-1.461.261-2.066.511-.261.098-.688.41-1.003 1.233-.405.687-.613 1.635-.613 3.112 0 2.284.013 3.383.017 3.383 0 .016.006.334.017.597.012.353.037.793.094 1.293.133 1.513.746 2.886 1.644 4.161.078.113.168.22.267.322.155.154.351.287.554.388.129.067.273.119.429.153a4.019 4.019 0 00.738.089c1.708 0 3.128-.255 4.099-.721a2.5 2.5 0 00.836-.588c.398-.398.59-.889.823-1.394a6.575 6.575 0 00.2-.475c.106-.223.227-.577.335-.932.206-.683.472-1.648.515-2.895a20.25 20.25 0 00.055-2.55c-.017-.328-.048-.734-.106-1.083-.045-.277-.09-.542-.132-.796-.192-1.417-1.092-2.162-2.344-2.437-.472-.095-1.037-.145-1.612-.145-1.558 0-2.637.11-3.585.328-.778.175-1.284.449-1.674.84-.364.364-.602.835-.732 1.352-.092.279-.131.632-.15 1.012-.019.45-.027.897-.027 1.396 0 3.095.06 4.232.187 5.192.108.704.369 1.1.63 1.451.234.315.6.587 1.076.775.095.03.187.059.283.083.452.125.817.25 1.08.336.733.237 1.135.251 1.826.251 2.59 0 3.629-.021 4.554-.111.825-.085 1.427-.173 2.048-.307 1.453-.293 2.743-1.047 3.868-2.183a7.026 7.026 0 001.063-1.312c.043-.085.085-.172.127-.257.05-.096.094-.187.134-.278.044-.099.086-.188.115-.275.023-.059.045-.117.063-.174.028-.085.058-.164.082-.246.028-.09.054-.182.065-.277.008-.059.017-.12.023-.179.006-.063.014-.126.016-.189.002-.045.002-.087.002-.127-.003-1.197-.043-1.806-.132-2.547-.07-.556-.166-1.2-.305-1.76-.146-.573-.346-1.14-.593-1.53-.155-.276-.325-.543-.486-.823-.094-.155-.184-.316-.276-.493-.128-.226-.242-.466-.32-.748C9.967 6.2 10.15 5.452 10.15 4.99c0-.107-.022-.267-.063-.493a5.343 5.343 0 00-1.06-.748c-.33-.15-.797-.262-1.498-.386C7.642 3.022 6.794 3 6.088 3c-1.558 0-3.272.192-3.273.192L2.713 3c-.48 0-.915.188-1.26.525C.204 3.853 0 4.642 0 5.74c0 1.096.213 1.755.592 2.188C.965 8.288 1 9.348 1 10.5c0 1.165-.001 2.18-.004 3.382-.008 1.587.004 2.637.19 3.618.203 1.205.763 1.916 1.623 2.322 1.2.522 2.448.765 4.086.765 1.697 0 2.888-.153 3.892-.311a8.745 8.745 0 003.479-1.471c1.282-.798 2.422-1.952 3.234-3.197a8.016 8.016 0 00.682-1.223c.26-.548.471-1.042.601-1.548.048-.246.094-.542.106-.858.008-.265.013-.564.013-.872 0-.145 0-.36-.001-.627a15.055 15.055 0 00-.025-2.052A15.146 15.146 0 0016.058 4.082a6.047 6.047 0 00-.14-.034zM12 5.63a6.367 6.367 0 016.25 6.5c-.25.292-.64.558-1.193.558-.71 0-1.247-.563-1.247-1.24 0-.661.643-1.22 1.24-1.22s1.238.56 1.238 1.239c0 .084-.017.184-.064.294a4.7 4.7 0 01-2.04-.478A6.305 6.305 0 0112 5.63z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 border-2 border-[#E1E1E1] rounded-lg ">
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
      </section>
      <Footer />
    </div>
  );
};

export default Page;
