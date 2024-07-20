import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition-colors duration-300"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;


// Online Assessment (80 minutes)
// Aptitude Test - Verbal, Analytical, Quantitative (Each section has 20 minutes/ 20 questions)
// Written Communication Test (20 minutes)
// Upon selection in the Online Assessment, candidates will be required to go through Business Discussion Round
