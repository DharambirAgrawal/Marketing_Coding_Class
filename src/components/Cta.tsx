import React from "react";
import { Container } from "@/components/Container";
import { CheckIcon } from "@heroicons/react/24/solid";  // Optional: Adding icon to highlight benefits
import Link from "next/link";
export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl gap-5 mx-auto bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 rounded-xl shadow-lg">
        
        {/* Left Section: Headline and Description */}
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Ready to start your coding journey?
          </h2>
          <p className="mt-3 text-lg font-medium text-white text-opacity-90 lg:text-xl">
            Sign up today and start learning programming skills that will change your career.
          </p>
        </div>

        {/* Right Section: Call-to-Action Button */}
        <div className="mt-4 lg:mt-0">
          <Link
            href="#Form" // Link to your sign-up page
            className="flex items-center justify-center w-full lg:w-auto bg-white text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 rounded-lg py-3 px-8 text-lg font-semibold transition-all duration-300 shadow-md"
          >
            Start Learning Today
          </Link>
        </div>
      </div>

      {/* Additional Section: Highlight Benefits */}
      <div className="mt-10 max-w-4xl mx-auto px-7 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-4">
            <CheckIcon className="w-6 h-6 text-indigo-600" />
            <p className=" text-lg font-medium">
              Learn from experienced instructors who are passionate about teaching.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <CheckIcon className="w-6 h-6 text-indigo-600" />
            <p className=" text-lg font-medium">
              Access to real-world coding projects to build your portfolio.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <CheckIcon className="w-6 h-6 text-indigo-600" />
            <p className=" text-lg font-medium">
              Lifetime access to course materials and updates.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <CheckIcon className="w-6 h-6 text-indigo-600" />
            <p className=" text-lg font-medium">
              Join a supportive community of learners and experts.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
