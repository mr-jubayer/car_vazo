"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SocialLogin } from "./SocialLogin";
import { Button } from "@/components/ui/Button";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (res.ok) {
        toast.success("Logged In successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("FAILED to Log In");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full border"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full mt-3">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full border"
        />
      </label>
      <Button primaryFilled className="w-full h-12 mt-3">
        Sign In
      </Button>
      <p className="text-center">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
};

export { LoginForm };
