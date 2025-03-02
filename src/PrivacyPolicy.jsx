import React from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen flex flex-col items-center px-6 py-12">
      <div className="max-w-3xl">
        <header className="text-center mb-8">
          <Link to="/">
            <img 
              src={logo}
              alt="GritLock Logo" 
              className="w-25 mx-auto h-auto cursor-pointer" 
            />
          </Link>
          <h1 className="text-3xl font-bold mt-4">Privacy Policy for GritLock</h1>
          <p className="text-gray-400 mt-2">Last Updated: 1 March 2024</p>
        </header>
        
        <p className="text-gray-300 mb-6">
          Thank you for using GritLock. Your privacy is important to us, and this Privacy Policy outlines how we collect, use, and protect your information when you use our app.
        </p>
        
        <section className="border-t border-gray-700 pt-4">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p className="text-gray-300 mt-2">
            Initially, GritLock did not collect personally identifiable information, with all interactions occurring locally via Apple’s Screen Time API. With upcoming features—such as group app locking and premium accounts—we may collect additional information to support these functionalities.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>App usage data to determine locked/unlocked states</li>
            <li>Device time settings to manage Pomodoro timer cycles</li>
            <li>Account details (e.g., email, username) for premium services</li>
            <li>Group management data for collaborative app locking features</li>
          </ul>
          <p className="text-gray-300 mt-2">
            Data collected for premium or group features may be stored on secure external servers.
          </p>
        </section>
        
        <section className="border-t border-gray-700 pt-4">
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Lock and unlock apps based on user-set focus schedules</li>
            <li>Enable a seamless Pomodoro workflow without distractions</li>
            <li>Manage user accounts and premium subscription features</li>
            <li>Support group app locking functionalities</li>
          </ul>
          <p className="text-gray-300 mt-2">
            Any data stored externally is used solely to enhance your experience and is protected with industry-standard security measures.
          </p>
        </section>
        
        <section className="border-t border-gray-700 pt-4">
          <h2 className="text-xl font-semibold">3. Third-Party Services</h2>
          <p className="text-gray-300 mt-2">
            We may integrate with third-party services for authentication, analytics, payment processing, or group management. These services are chosen for their robust privacy practices.
          </p>
        </section>
        
        <section className="border-t border-gray-700 pt-4">
          <h2 className="text-xl font-semibold">4. Security Measures</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Data related to user accounts and premium features is transmitted securely and stored using encryption.</li>
            <li>The app utilizes Apple’s Screen Time API for local functions, with external data only stored as needed.</li>
            <li>No unnecessary data retention: personal data is kept only for the duration required to provide premium or group services.</li>
          </ul>
          <p className="text-gray-300 mt-2">
            While we implement strong security practices, we recommend that users secure their accounts with strong passwords and enable additional security measures where available.
          </p>
        </section>
        
        <section className="border-t border-gray-700 pt-4">
          <h2 className="text-xl font-semibold">5. Your Rights & Control</h2>
          <p className="text-gray-300 mt-2">
            You have the right to access, correct, or request deletion of your personal data. If you have any questions or wish to exercise your rights, please contact us.
          </p>
        </section>
        
        <section className="border-t border-gray-700 pt-4">
          <h2 className="text-xl font-semibold">6. Changes to This Privacy Policy</h2>
          <p className="text-gray-300 mt-2">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Significant updates will be communicated via the app’s main page and your registered email.
          </p>
        </section>
        
        <section className="border-t border-gray-700 pt-4">
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p className="text-gray-300 mt-2">
            If you have any questions about this Privacy Policy, please contact us at support@gritlock.ca.
          </p>
          <p className="text-gray-400 mt-2">
            By using GritLock, you agree to this Privacy Policy and the principles outlined herein.
          </p>
        </section>
        
        {/* Footer */}
        <footer className="mt-32 py-10 text-center">
          <div className="w-[50%] h-[2px] bg-white opacity-50 mx-auto mb-5"></div>
          <div className="flex justify-center space-x-10">
            <div>
              <h2 className="text-white text-xl">Support</h2>
              <p>
                <Link to="/contact" className="text-gray-400 hover:underline">
                  Contact Us
                </Link>
              </p>
              <p>
                <Link to="/privacy" className="text-gray-400 hover:underline">
                  Privacy & Security
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl">About Us</h3>
              <Link to="/about" className="text-gray-400 hover:underline">
                About GritLock
              </Link>
            </div>
            <div>
              <h3 className="text-white text-xl">Get the App</h3>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
