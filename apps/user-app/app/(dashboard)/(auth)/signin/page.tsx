"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      phone,
      password,
    });

    if (result?.ok) {
      window.location.href = "/dashboard";
    } else {
      console.log(result?.error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#f8ece4] text-black-100">
        <div className="bg-white shadow-lg rounded-2xl p-10 flex items-center gap-16 border-8 border-white">
          <form onSubmit={handleSignIn} className="flex flex-col gap-6">
            <input
              type="email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Email"
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Log In
            </button>
            <hr className="my-2" />
            <button
              type="button"
              className="bg-black text-white py-2 rounded-lg hover:bg-slate-500 transition-all"
              onClick={async () => await signIn("github")}
            >
              Sign In with Github
            </button>

            <button
              type="button"
              className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all"
              onClick={() => router.push("/signup")}
            >
              Create New account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}