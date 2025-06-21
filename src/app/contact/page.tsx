// src/app/contact/page.tsx
'use client'; // This makes it a Client Component, necessary for useState and event handlers

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // To show feedback to the user

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setStatus('Sending...');

    // Your EmailJS Service ID, Template ID, and Public Key
    // Get these from your EmailJS dashboard
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';

    try {
      // You can use emailjs.sendForm if your input 'name' attributes match template placeholders
      // Or emailjs.send if you want to pass an object
      await emailjs.sendForm(serviceId, templateId, e.currentTarget, {
        publicKey: publicKey,
      });

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-black via-black to-black text-gray-300 flex items-center justify-center py-12 px-6"
    >
      <div className="max-w-4xl text-center space-y-8">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-yellow-700">Contact Me</h2>
        <p className="text-lg leading-relaxed">
          Feel free to reach out to me with any questions or opportunities.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name" // Make sure 'name' matches your EmailJS template placeholder (e.g., {{name}})
              placeholder="Your Name"
              className="w-full px-6 py-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email" // Make sure 'email' matches your EmailJS template placeholder (e.g., {{email}})
              placeholder="Your Email"
              className="w-full px-6 py-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message" // Make sure 'message' matches your EmailJS template placeholder (e.g., {{message}})
            rows={4}
            placeholder="Your Message"
            className="w-full px-6 py-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-yellow-700 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
            disabled={status === 'Sending...'} // Disable button while sending
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="mt-4 text-center text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;