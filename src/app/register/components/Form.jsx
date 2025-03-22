"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!name || !email || !password) return;

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: "POST",
      header: "application/json",
      body: JSON.stringify({
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
      }),
    });

    router.push("/");
  };
  return (
    <form onSubmit={handleRegister} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full border"
          name="name"
        />
      </label>
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
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full border mb-4"
        />
      </label>
      <Button primaryFilled className={"w-full"}>
        Sign Up
      </Button>
      <p className="text-center">Or Sign In with</p>
      {/* <SocialLogin /> */}
      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
};

export { Form };
