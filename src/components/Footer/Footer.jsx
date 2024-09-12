import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 flex flex-col items-center">
      <div className="flex flex-wrap justify-center space-x-4 mb-2">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="mailto:your-email@example.com" className="hover:text-red-500">
          <FaEnvelope size={24} />
        </a>
      </div>
      <div className="text-sm text-center px-4">
        <p>© {new Date().getFullYear()} Uday Kalse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
