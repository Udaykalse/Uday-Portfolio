import React from "react";
import Pdata from "./ProjectData.json";
import { SlArrowRight } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center bg-divColor w-full h-full p-4">
      {Pdata.map((project, index) => (
        <div
          key={index}
          className="bg-cardsDIv shadow-md rounded p-4 w-full md:w-2/3 lg:w-1/2 mt-4 h-auto flex flex-col md:flex-row border border-gray-300 transition-all duration-700 hover:scale-105"
        >
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <img
              src={project.Image}
              alt="Project"
              className="object-cover w-full h-48 rounded-lg overflow-hidden"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <h5 className="text-lg font-bold mb-2">{project.Name}</h5>
            <p className="text-gray-700 mb-4">{project.Description}</p>
            <div className="flex flex-wrap space-x-4">
              <a
                href={project.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <FaGithub className="mr-2" />
                <span>GitHub</span>
              </a>
              <a
                href={project.Live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <SiNetlify className="mr-2" />
                <span>Live</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      <a
        href="https://github.com/Udaykalse"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200 mt-4"
      >
        <span>More</span> <SlArrowRight />
      </a>
    </div>
  );
}

export default Projects;
