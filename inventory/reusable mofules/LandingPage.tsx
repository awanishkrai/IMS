"use client";
import React, { useState } from "react";
import Signup from "@/AuthModules/signup";
import Login from "@/AuthModules/login";
function LandingPage() {
    const [activeView, setActiveView] = useState<"none" | "signup" | "login">("none");

    return (
        <section className="w-full bg-gray-200 py-16">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-4 text-center">
                <div className="w-full rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-10 text-white shadow-xl shadow-blue-500/20">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                        Revolutionize Your Inventory Management with Our Cutting-Edge System
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white/90">
                        Streamline operations, boost efficiency, and maximize profits with a user-friendly platform built for modern businesses.
                    </p>
                </div>

                <div className="space-y-4 max-w-3xl text-left text-slate-700">
                    <h2 className="text-2xl font-semibold">Experience the future of inventory management</h2>
                    <p className="text-base leading-7">
                        Seamlessly track, optimize, and grow your business using intelligent inventory tools that simplify workflows and reduce costs.
                    </p>
                    <p className="text-base leading-7">
                        Unlock smart insights, automate routine tasks, and stay ahead with a scalable system designed for your success.
                    </p>
                </div>

                <div className="w-full justify-center">
                    <div className=" justify-center gap-4">
                        <button
                            type="button"
                            className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                            onClick={() => setActiveView("signup")}
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
                            onClick={() => setActiveView("login")}
                        >
                            Login
                        </button>
                    </div>

                    <div className="mt-8 flex justify-center">
                        {activeView === "signup" && <Signup />}
                        {activeView === "login" && <Login />}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default LandingPage;