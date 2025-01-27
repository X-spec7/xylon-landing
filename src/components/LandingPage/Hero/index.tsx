"use client";

import { CustomButton } from "@/components/Common";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {

  const [searchValue, setSearchValue] = useState("");

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark min-h-screen flex flex-col border border-b border-gray-200 dark:border-gray-700"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between w-full md:h-screen pt-20">

          <div className="w-full md:w-1/2 md:h-full flex flex-wrap py-30 md:pt-20">
            <div className="w-full flex items-center justify-center h-full">
              <div className="mx-auto max-w-[800px] flex flex-col justify-start">

                <div className="mb-6 flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg p-1 w-full sm:w-[300px] inline-block cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800">

                  <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-1 transition duration-300 ease-in-out hover:bg-white dark:hover:bg-gray-700">
                    <div className="flex items-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-green-300 mr-2"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out group-hover:text-gray-900 dark:group-hover:text-white">
                        Live
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2 transition duration-300 ease-in-out group-hover:text-gray-900 dark:group-hover:text-white">
                    See what others are pulling
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 ml-2 transition duration-300 ease-in-out group-hover:text-gray-700 dark:group-hover:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight lg:text-5xl xl:7xl md:leading-tight">
                  XYLON: Empowering<br />
                  Sustainability with Blockchain
                </h1>
                <p className="mb-8 md:mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl lg:text-2xl max-w-full md:max-w-[80%]">
                  I am eager to contribute my frontend development expertise to this project and assist in its success!
                </p>
                <div className="relative w-full mb-6 md:mb-8">
                  <input
                    type="text"
                    placeholder={`Try "red white instant"`}
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-4 py-2 md:py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
                  <CustomButton
                    href="/"
                    variant="outline"
                    className="w-full text-center justify-center"
                  >
                    All Cards
                  </CustomButton>
                  <CustomButton
                    href="/"
                    variant="solid"
                    className="w-full text-center justify-center"
                  >
                    Get Started
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <div className="flex items-center justify-center h-20 md:h-full">
              {/* Add your content for the right side here */}
              <Image
                src='/images/rb_28.png'
                width={700}
                height={1000}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;
