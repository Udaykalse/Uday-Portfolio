import React from "react";
import frontendIcon from "../../assets/fnng.png";
import fullstackIcon from "./../../assets/bnPng.png";
import Uday from "./../../assets/uk.jpeg";
import "./style.css";

function Home() {
  const openResume = (type) => {
    let filePath = "";

    switch (type) {
      case "frontend":
        filePath = "/Resume/Frontend/Udaysinh_Kalse_Frontend_Resume.pdf";
        break;
      case "fullstack":
        filePath = "/Resume/Backend/Udaysinh_Kalse_FullStack_Resume.pdf";
        break;
      default:
        return;
    }

    window.open(filePath, "_blank");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
        <div className="flex-none w-full md:w-1/2 flex items-center justify-center p-6">
          <img src={Uday} alt="Uday" className="h-96 w-96 rounded-full border-4 border-gray-700 object-cover" />
        </div>

        <div className="flex-1 h-full p-6 text-white flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl font-bold mb-4">
            Hey, I am <span className="text-yellow-400">Uday</span> Kalse
          </h1>
          <p className="text-xl mb-4">
            I'm a{" "}
            <span className="text-green-400 animate-fadeInOut">frontend developer</span>{" "}
            and <span className="text-blue-400 animate-fadeInOut animation-delay-2s">MERN developer</span>
          </p>
          <p className="mb-6 text-center md:text-left">
            As a frontend web developer passionate about crafting engaging user experiences, I specialize in turning ideas into intuitive,
            responsive interfaces. With proficiency in modern technologies like React and expertise in crafting pixel-perfect designs with Tailwind
            CSS, I strive to create visually stunning and functional websites. I bring creativity and technical skill together to deliver
            user-centric solutions that enhance usability and drive engagement.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => openResume("frontend")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300"
            >
              <img src={frontendIcon} alt="Frontend Icon" className="mr-2 h-6 w-6" />
              Frontend
            </button>
            <button
              onClick={() => openResume("fullstack")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300"
            >
              <img src={fullstackIcon} alt="Fullstack Icon" className="mr-2 h-6 w-6" />
              Fullstack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
