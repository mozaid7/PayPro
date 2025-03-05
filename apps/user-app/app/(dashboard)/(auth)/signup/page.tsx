"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password, name }),
    });

    if (res.ok) {
      router.push("/api/auth/signin");
    } else {
      // Handle error
      console.log("Signup failed");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black-100">
      
      <div className="w-96">
      </div>
        
        
        
        <div className="bg-white shadow-lg rounded-2xl p-10 flex items-center gap-16">
          <div>
            <div className="text-5xl font-bold text-gray-800 mb-4">Sign Up</div>
            <div className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => router.push("/api/auth/signin")}
                className="text-blue-500 hover:underline"
              >
                Sign In
              </button>
            </div>
          </div>
        
          <form onSubmit={handleSignup} className="flex flex-col gap-6 *:rounded-xl">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}