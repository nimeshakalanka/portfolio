import React, { useState } from 'react';

const MailIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const GithubIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.8c0-1.3-.4-2.2-1-3.5 0-.4 1.5-2 1.5-5.5 0-1.2-.5-2-1-2.5.5-.5 1-1.5 1.5-3h-1c-.5 0-1.5.5-2.5 1s-1.5 1-2 1.5c-1 0-2-1-2.5-1.5s-1-1-2-1.5c-.5-.5-1.5-1-2-1.5-1 0-2 1-2 2s.5 2.5 1.5 3.5c1.5 1.5 3 1 4 1h1c0 1.5.5 2 1 2.5a2.5 2.5 0 0 0 2 1h1c0 1.5.5 2.5 1 3a2.5 2.5 0 0 0 2 1" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className={`mt-4 text-lg md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>
          Feel free to reach out to me for any inquiries or collaborations.
        </p>
      </div>
      <div className="max-w-xl mx-auto p-8 rounded-2xl shadow-custom transition-colors duration-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-zinc-900'}`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-zinc-900'}`}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-0 py-2 px-3 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-zinc-900'}`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && (
            <p className="mt-4 text-center text-green-500 font-medium">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
