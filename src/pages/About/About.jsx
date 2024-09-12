import React from 'react';
import {  PhoneIcon, CalendarIcon, MapIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { BiMailSend } from 'react-icons/bi';
const About = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        {/* Personal Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-10 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-indigo-500 mr-2" />
              <span>+91 932-599-9657</span>
            </li>
            <li className="flex items-center">
              <BiMailSend className="h-5 w-5 text-indigo-500 mr-2" />
              <span>udaykalse123@gmail.com</span>
            </li>
            <li className="flex items-center">
              <CalendarIcon className="h-5 w-5 text-indigo-500 mr-2" />
              <span>Date of Birth: 22/12/2000</span>
            </li>
            <li className="flex items-center">
              <MapIcon className="h-5 w-5 text-indigo-500 mr-2" />
              <span>LinkedIn: <a href="https://www.linkedin.com/in/uday-kalse-5aa5862b7/" target='_blank' className="underline text-indigo-400">uday-kalse</a></span>
            </li>
            <li className="flex items-center">
              <MapIcon className="h-5 w-5 text-indigo-500 mr-2" />
              <span>GitHub: <a href="https://github.com/Udaykalse" target='_blank' className="underline text-indigo-400">uday-kalse</a></span>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-gray-800 rounded-lg p-6 mb-10 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <AcademicCapIcon className="h-6 w-6 text-indigo-500 mr-4" />
              <div>
                <h3 className="font-semibold">Master of Science in Computer Science</h3>
                <p className="text-sm text-gray-400">Swami Vivekanand College of Information Technology, Udgir, Maharashtra (2023 – Present)</p>
              </div>
            </div>
            <div className="flex items-start">
              <AcademicCapIcon className="h-6 w-6 text-indigo-500 mr-4" />
              <div>
                <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-sm text-gray-400">Dayanand Science College, Latur, Maharashtra (2019 – 2022)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <BriefcaseIcon className="h-6 w-6 text-indigo-500 mr-4" />
              <div>
                <h3 className="font-semibold">React.js Developer Intern</h3>
                <p className="text-sm text-gray-400">Ricoz, Pune, Maharashtra (2023 – 2024)</p>
                <ul className="list-disc list-inside text-sm text-gray-400">
                  <li>Developed and maintained 80+ user interfaces using React.js.</li>
                  <li>Collaborated with design teams to implement 75+ responsive web pages.</li>
                  <li>Created 50+ dynamic web applications with JavaScript, HTML, and CSS.</li>
                  <li>Integrated 15 RESTful APIs for smooth functionality across applications.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
