import React from "react";
import Pdata from "./ProjectData.json";
import { SlArrowRight } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";


function Projects() {
  return (
    <div className="flex flex-col justify-center items-center bg-divColor w-full h-full">
      {Pdata.map((project, index) => (
        <div
          key={index}
          className="space-x-4 bg-cardsDIv shadow-md rounded p-4 w-2/3 mt-4  h-min flex border border-gray-300 min-h-40 transition-all duration-700 hover:scale-110"
        >
          <div className="w-full md:w-1/2 ">
            <img
              src={project.Image}
              alt="Project"
              className="object-center w-full h-48 rounded-lg overflow-hidden "
            />
            
          </div>
          <div className="w-full md:w-1/2 ">
            <h5 className="text-lg font-bold">{project.Name}</h5>
            <p className="text-gray-700">{project.Description}</p>
            <div className="mt-4 flex space-x-4">
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
        className="flex items-center space-x-2 border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200"
      >
        <span>More</span> <SlArrowRight />
      </a>
    </div>
  );
}

export default Projects;
