import React from "react";
import AuthBanner from "~/assets/images/AuthBanner.png";
import { SignupForm } from "~/components/forms/SignupForm";

export const Signup = () => {
  return (
    <div className="h-full overflow-hidden flex justify-between">
      {/* Signup */}
      <div className="flex items-center justify-center pl-10 flex-1">
        <div className="w-2/4">
          <h2 className="font-semibold text-3xl">Get Started Now</h2>
          <SignupForm />
          <div className="flex items-center mt-10">
            <div
              style={{ height: "1px" }}
              className="border border-gray-light flex-1"
            ></div>
            <span className="text-xs mx-2">Or</span>
            <div
              style={{ height: "1px" }}
              className="border border-gray-light flex-1"
            ></div>
          </div>
          <div className="flex gap-7 mt-10">
            <div className="w-3/6 bg-black">Google Button</div>
            <div className="w-3/6 bg-black">Apple Button</div>
          </div>
          <div className="font-medium w-full flex justify-center mt-10">
            <span>Have an account? </span>
            <a href="#" className="text-dark-blue font-semibold ml-1">
              Sign In
            </a>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div>
        <img src={AuthBanner} className="h-full ml-auto " />
      </div>
    </div>
  );
};
