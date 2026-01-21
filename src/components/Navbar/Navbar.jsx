"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
 
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log("env file", process.env.NEXTAUTH_SECRET);
  const links = (
    <>
      <li
        className={`mx-4 ${
          pathname == "/" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`mx-4 ${
          pathname == "/ai_doctor" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/ai_doctor">AI Doctor</Link>
      </li>
      <li
        className={`mx-4 ${
          pathname == "/BloodBank" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/BloodBank">Blood Bank</Link>
      </li>
      {session?.user?.role === "admin" && (
        <li
          className={`mx-4 ${
            pathname == "/Dashboard" ? "text-sky-500 font-bold border-b-2" : ""
          }`}
        >
          <Link href="/Dashboard">Dashboard</Link>
        </li>
      )}
      <li
        className={`mx-4 ${
          pathname == "/OurTeam" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/OurTeam">Our teams</Link>
      </li>

      <li
        className={`mx-4 ${
          pathname == "/contact" ? "text-sky-500 font-bold border-b-2" : ""
        }`}
      >
        <Link href="/contact">Contact us</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar  shadow-sm bg-[#caf0f8] lg:px-10 py-3 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/*  */}
              {links}
            </ul>
          </div>
          <Link href="/">
            <div className="text-2xl font-semibold flex items-center gap-2">
              <Image
                src="/stethoscope.png"
                alt="logo"
                width={40}
                height={40}
                className="object-cover"
              />{" "}
              <h1 className="text-sky-500 mt-1">MediLab</h1>{" "}
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}

          </ul>
        </div>
        <div className="navbar-end">
          {status === "authenticated" ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Image */}
              <Image
                src={session?.user?.image || "/user.png"}
                alt="user_logo"
                width={44}
                height={44}
                className="object-cover rounded-full cursor-pointer border-2 border-blue-900"
                onClick={() => setOpen(!open)}
              />

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-64 px-3 bg-blue-200/40 backdrop-blur-sm  py-4  rounded shadow-2xl z-50">
                  <div className="flex items-center gap-5 border-b border-gray-400 pb-3  ">
                    <Image
                      src={session?.user?.image || "/user.png"}
                      alt="user_logo"
                      width={40}
                      height={40}
                      className="object-cover rounded-full  cursor-pointer border-2 border-blue-900"
                      onClick={() => setOpen(!open)}
                    />
                    <h1 className="text-center line-clamp-2 text-xl text-gray-800 "> {session?.user?.name}</h1>
                  </div>
                  <h2 className="text-center cursor-pointer line-clamp-2 text-gray-500 py-3 border-b border-gray-400 "> {session?.user?.email}</h2>
                  <button
                    onClick={() => signOut()}
                    className="w-full bg-red-400 hover:opacity-80  border-0 text-left px-4 py-2  text-sm btn mt-5"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="btn btn-sm bg-sky-700 border-0 text-white">
                Login
              </button>
            </Link>
          )}
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
