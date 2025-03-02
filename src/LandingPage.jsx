import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import phoneFocus from "/src/assets/gritlock-img-0336-left.png";
import phoneSettings from "/src/assets/gritlock-a-left-1.png";
import phoneAppLock from "/src/assets/gritlock-portrait-1.png";


export default function LandingPage() {
  return (
    <div className="scroll-smooth font-jura bg-[#1C1C1C] text-white" style={{ fontFamily: "'Jura', sans-serif" }}>
      {/* 🔹 Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-30 ">
        {/* Background Arc */}
        <div className="absolute -bottom-32 -left-40 w-[1200px] h-[1000px] bg-[#333333] rounded-full blur-2xl opacity-30"></div>
         {/* Background Arc */}
         <div className="absolute -bottom-400 -right-[10%] w-[1200px] h-[1000px] bg-[#333333] rounded-full blur-2xl opacity-30 "></div>

        <motion.div 
          className="relative z-10 self-start text-left pl-14
          "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[64px] sm:text-[80px] font-light text-[#E5E0D9]">
            GritLock
          </h1>
          <div className="w-48 h-[2px] bg-white opacity-50"></div>
          <p className="text-xl sm:text-2xl mt-4 text-gray-300">Stay Focused</p>
        </motion.div>

        <motion.img
          src={phoneSettings}
          alt="Settings Screen"
          className="absolute w-[400px] sm:w-[320px] pt-[17%] right-[30%] drop-shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        />
        {/* Floating Phones */}
        <motion.img
          src={phoneFocus}
          alt="Focus Mode"
          className="absolute w-[300px] sm:w-[300px] top-20 sm:top-16 left-[62%] drop-shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
       
        />
         {/* Floating Phones */}
         
      </section>

      {/* 🔹 Features Section */}
      <section className="space-y-32">
        {/* Feature 1: Selective App Locking */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20 pr-[5%]">
          <motion.img
            src={phoneAppLock}
            alt="Selective App Locking"
            className="w-[280px] sm:w-[350px] drop-shadow-2xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="text-center md:text-left pl-[25%]">
            <h2 className="text-3xl font-light">Selective App Locking</h2>
            <p className="text-gray-400 max-w-lg">
              Choose specific apps to lock during focus mode.
            </p>
          </div>
        </div>

        {/* Feature 2: Pomodoro Timer */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center space-y-10 md:space-y-0 md:space-x-30 pl-[5%]">
          <motion.img
            src={phoneFocus}
            alt="Pomodoro Timer"
            className="w-[280px] sm:w-[350px] drop-shadow-2xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="text-center md:text-left pr-[25%]">
            <h2 className="text-3xl font-light">Pomodoro Timer</h2>
            <p className="text-gray-400 max-w-lg">
              Work in cycles with built-in breaks.
            </p>
          </div>
        </div>
    {/* Feature 3: Customizable Durations */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20 pr-[5%]">
          <motion.img
            src={phoneSettings}
            alt="Customizable Durations"
            className="w-[280px] sm:w-[350px] drop-shadow-2xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="text-center md:text-left pl-[25%]">
            <h2 className="text-3xl font-light">Customizable Durations</h2>
            <p className="text-gray-400 max-w-lg">
              Set your own focus & break times.
            </p>
          </div>

    
        </div>
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
  );
}
