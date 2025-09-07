import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Contact me
          </span>
        </h2>
        <p className={`text-lg mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>

        {/* Contact Form */}
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl mb-12`}>
          <form
            action="https://formspree.io/f/meolvzkd" // Replace this with your Formspree endpoint
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="mailto:akalankanime24@gmail.com"
            className={`flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${
              darkMode
                ? 'bg-gray-800 border-purple-600 text-gray-300 hover:bg-purple-600 hover:text-white'
                : 'bg-white border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
            }`}
          >
            <Mail className="w-5 h-5 mr-2" /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/nimesh-akalanka-b131791ab/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${
              darkMode
                ? 'bg-gray-800 border-blue-600 text-gray-300 hover:bg-blue-600 hover:text-white'
                : 'bg-white border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
          </a>
          <a
            href="https://github.com/nimeshakalanka"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${
              darkMode
                ? 'bg-gray-800 border-white text-gray-300 hover:bg-white hover:text-gray-900'
                : 'bg-white border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <Github className="w-5 h-5 mr-2" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
