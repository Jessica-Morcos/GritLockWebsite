import React from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo.png";
export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#1C1C1C] text-white">
      {/* Background arcs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-64 w-[1000px] h-[1000px] bg-[#333333] rounded-full blur-2xl opacity-30"></div>
        <div className="absolute -bottom-32 -right-64 w-[1000px] h-[1000px] bg-[#333333] rounded-full blur-2xl opacity-30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10">
        {/* Header / Logo */}
        <header className="text-center mb-12">
        <Link to="/">
          <img 
            src={logo}
            alt="GritLock Logo" 
            className=" w-25 mx-auto h-auto cursor-pointer" 
          />
        </Link>
          <h1 className="text-3xl md:text-4xl font-light">About Us</h1>
        </header>

        {/* About Section */}
        <section className="max-w-3xl text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Helping you focus, one session at a time
          </h2>
          <p className="text-gray-300 mb-6">
            At GritLock, we know how hard it is to stay focused in a world full 
            of digital distractions. Whether you're studying, working, or just 
            want to be more mindful, those notifications can make it difficult 
            to stay on track. We're here to help you zone in.
          </p>
          <p className="text-gray-300">
            GritLock is built to help you take control of your time by locking 
            distracting apps when you need to focus and unlocking them when 
            it's time for a break. Powered by the Pomodoro Technique, our app 
            helps you work in structured sessions, creating a balance between 
            productivity and rest.
          </p>
        </section>

        {/* Why We Do What We Do */}
        <section className="max-w-3xl text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Why we do what we do
          </h2>
          <p className="text-gray-300 mb-6">
            We believe focus isn’t just about getting things done; it’s also 
            about being intentional with your time. Whether you’re a busy 
            professional tackling big projects or someone looking to build 
            better habits, GritLock is here to help.
          </p>
          <p className="text-gray-300">
            By removing distractions, we are creating space for deep work, 
            creativity, and a healthier relationship with technology.
          </p>
        </section>

        {/* Call to Action */}
        <section className="max-w-3xl text-center mb-16">
          <h3 className="text-xl md:text-2xl font-light">
            Stay focused. Stay in control. Unlock your potential with GritLock.
          </h3>
        </section>

        {/* 🔹 Footer */}
      <footer className="mt-32 py-10 text-center">
      <div className="w-[50%] h-[2px] bg-white opacity-50 mx-auto mb-5"></div>


        <div className="flex justify-center space-x-10">
          <div>
            <h2 className="text-white  text-xl">Support</h2>
            <p><Link to="/contact" className="text-gray-400 hover:underline">
              Contact Us
            </Link></p>
            <p><Link to="/privacy" className="text-gray-400 hover:underline">
              Privacy & Security
            </Link></p>
          </div>
          <div>
            <h3 className="text-white  text-xl">About Us</h3>
            <Link to="/about" className="text-gray-400 hover:underline">
              About GritLock
            </Link>
          </div>
          <div>
            <h3 className="text-white text-left text-xl">Get the App</h3>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
