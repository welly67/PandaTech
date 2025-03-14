import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
            <div className="container mx-auto p-12 text-center">
                {/* Hero Section */}
                <h2 className="text-5xl font-extrabold text-blue-800">
                    Welcome to <span className="text-blue-500">Panda Tech</span>
                </h2>
                <p className="mt-6 text-lg text-white">
                    Your go-to platform for **IT solutions, freelancing services, and innovative projects**.  
                    I specialize in **web development, mobile applications, and digital solutions**.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="mt-8 flex justify-center space-x-4">
                    <Link
                        to="/services"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Explore Services
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Feature Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-blue-200 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold text-black">🛠 IT Solutions</h3>
                        <p className="mt-2 font-bold text-gray-600">
                            Providing cutting-edge **software and web development solutions** tailored to your needs.
                        </p>
                    </div>

                    <div className="p-6 bg-blue-200 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold text-black">🚀 Freelancing</h3>
                        <p className="mt-2 font-bold text-gray-600">
                            Offering **custom software, websites, and app development** with a professional touch.
                        </p>
                    </div>

                    <div className="p-6 bg-blue-200 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-black">📱 Digital Innovation</h3>
                        <p className="mt-2 font-bold text-gray-600">
                            Building **efficient, scalable, and user-friendly applications** for individuals and businesses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
