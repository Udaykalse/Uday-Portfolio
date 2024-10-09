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

  const hireMe = () => {
    window.location.href = "mailto:udaykalse123@gmail.com";
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
        <div className="flex-none w-full md:w-1/2 flex items-center justify-center p-6">
          <img
            src={Uday}
            alt="Uday"
            className="h-64 w-64 md:h-96 md:w-96 rounded-full border-4 border-gray-700 object-cover"
          />
        </div>

        <div className="flex-1 h-full p-6 text-white flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hey, I am <span className="text-yellow-400">Uday</span> Kalse
          </h1>
          <p className="text-xl mb-6">
            I'm a <span className="text-green-400">frontend developer</span> and{" "}
            <span className="text-blue-400">MERN developer</span>
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <button
              onClick={() => openResume("frontend")}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg flex items-center transition duration-300"
            >
              {/* py-1 px-3  */}
              <img
                src={frontendIcon}
                alt="Frontend Icon"
                className="mr-1 h-5 w-5"
              />
              Frontend
            </button>
            <button
              onClick={() => openResume("fullstack")}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium  rounded-lg flex items-center transition duration-300 p-2"
            >
              {/* py-1 px-3  */}
              <img
                src={fullstackIcon}
                alt="Fullstack Icon"
                className="mr-1 h-5 w-5"
              />
              Fullstack
            </button>
          </div>

          {/* <button
            onClick={hireMe}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Hire Me
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
