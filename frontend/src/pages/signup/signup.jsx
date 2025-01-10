import React from "react";
import GenderCheckbox from "./gendercheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Terry"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300">UserName</span>
            </label>
            <input
              type="text"
              placeholder="u0509421"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Alread have an account?
          </a>
          <div className="btn btn-block btn-sm mt-2 border border-slate-700">
            Sign Up
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
