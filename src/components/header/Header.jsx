"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const Header = () => {
  const session = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>{" "}
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>{" "}
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
      </>
    );
  };

  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu()}
            </ul>
          </div>
          <Link href={"/"} className="text-xl">
            <h2 className="text-2xl font-semibold">CarVazo</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {session?.data?.user ? (
              <button className="cursor-pointer" onClick={() => signOut()}>
                logout
              </button>
            ) : (
              <Link href={"/login"}>login</Link>
            )}
          </ul>
          <Button className={"ml-2"} primaryOutline>
            Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Header };
