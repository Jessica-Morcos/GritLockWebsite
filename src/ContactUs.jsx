import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo.png";
import emailjs from '@emailjs/browser';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    description: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;



    const templateParams = {
      from_email: formData.email,
      subject: formData.subject,
      message: formData.description,
      to_email: 'support@gritlock.ca'
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Your message has been sent successfully!');
        // Optionally clear the form
        setFormData({
          email: '',
          subject: '',
          description: '',
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatusMessage('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <div className="relative bg-[#1C1C1C] text-white overflow-hidden">
      {/* Background arcs */}
      <div className="absolute -top-32 -left-64 w-[1000px] h-[1000px] bg-[#333333] rounded-full blur-2xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-32 -right-64 w-[1000px] h-[1000px] bg-[#333333] rounded-full blur-2xl opacity-30 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10">
        {/* Header / Logo */}
        <header className="text-center mb-12">
          <Link to="/">
            <img 
              src={logo}
              alt="GritLock Logo" 
              className="w-25 mx-auto h-auto cursor-pointer" 
            />
          </Link>
          <h1 className="text-3xl md:text-4xl font-light">
            Contact Us / Submit a request
          </h1>
        </header>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-300">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#2B2B2B] text-white border border-[#444] rounded focus:outline-none focus:border-[#666]"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block mb-1 text-gray-300">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#2B2B2B] text-white border border-[#444] rounded focus:outline-none focus:border-[#666]"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-1 text-gray-300">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#2B2B2B] text-white border border-[#444] rounded focus:outline-none focus:border-[#666]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-[#333333] text-white rounded hover:bg-[#444] transition-colors"
          >
            Submit
          </button>

          {/* Status Message */}
          {statusMessage && <p className="text-gray-300 mt-4">{statusMessage}</p>}
        </form>

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
}
