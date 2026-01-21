"use client";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { signIn } from "next-auth/react";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialLogin from "@/components/socialLogin/SocialLogin";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, email, password);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result.error) {
      toast.error("Authentication field");
    } else {
      // toast.success("successfully login");
      router.push("/");
      from.reset();
    }
  };

  return (
    <section className="flex justify-center items-center  bg-gray-100 h-dvh">
      <div className="w-full max-w-md px-8 py-24    border-6 border-white  bg-[#caf0f8]  rounded-[40px]  shadow-2xl ">
        <h1 className="text-4xl font-semibold text-center text-sky-400">
          Welcome Back
        </h1>
        <p className="text-center text-sm text-gray-400">Sign in to your account</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1 text-sm">
            <label  >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-full px-4 py-2 rounded border border-gray-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            
            <label >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded border border-gray-400"
            />
            <div className="flex justify-end text-xs text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            className=" w-full p-3 text-center rounded-sm bg-sky-700 hover:opacity-80 text-white"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center ">
          <SocialLogin/>
        </div>
        <p className="text-xs mt-10 text-center sm:px-6 text-gray-600">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            href="/register"
            className="underline text-blue-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
