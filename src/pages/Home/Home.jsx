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
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
      <div className="flex-none w-full md:w-1/2 flex items-center justify-center p-6 animate-fadeIn">
        <img
          src={Uday}
          alt="Uday"
          className="h-64 w-64 md:h-96 md:w-96 rounded-full border-4 border-gray-700 object-cover shadow-xl transform transition duration-500 hover:scale-105 hover:rotate-3"
        />
      </div>
  
      <div className="flex-1 h-full p-6 text-white flex flex-col justify-center items-center md:items-start animate-slideInLeft">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text animate-textGlow">
          Hey, I am <span className="text-transparent">Uday</span> Kalse
        </h1>
        <p className="text-xl md:text-2xl mb-6 animate-fadeInDelay">
          I'm a{" "}
          <span className="text-green-400 font-semibold animate-bounce">frontend developer</span> and{" "}
          <span className="text-blue-400 font-semibold animate-pulse">MERN developer</span>
        </p>
  
        <div className="flex flex-col md:flex-row gap-4 mb-4 animate-fadeInDelay w-[80%] md:w-auto">
  <button
    onClick={() => openResume("frontend")}
    className="py-3 px-6 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 transition duration-300 transform hover:scale-105 hover:outline hover:outline-2 hover:outline-white shadow-lg flex items-center w-full"
  >
    <img src={frontendIcon} alt="Frontend Icon" className="mr-2 h-5 w-5" />
    Frontend
  </button>
  <button
    onClick={() => openResume("fullstack")}
    className="py-3 px-6 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-yellow-400 to-red-500 transition duration-300 transform hover:scale-105 hover:outline hover:outline-2 hover:outline-white shadow-lg flex items-center w-full"
  >
    <img src={fullstackIcon} alt="Fullstack Icon" className="mr-2 h-5 w-5" />
    Fullstack
  </button>
</div>

      </div>
    </div>
  </div>
  
  
  );
}

export default Home;

// // {/* <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-8">
//   <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 max-w-6xl">
//   <div className="relative group w-full md:w-1/2 flex justify-center">
//     <div className="relative rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80 transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
//       <img
//         src={Uday}
//         alt="Uday"
//         className="w-full h-full object-cover border-4 border-gray-700 shadow-xl"
//       />
//       <div className="absolute inset-0 bg-black opacity-30 rounded-full group-hover:opacity-0 transition-opacity duration-500"></div>
//     </div>
//   </div>

//  \
//   <div className="flex-1 text-center md:text-left text-white">
//     <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
//       Hey, I am <span className="text-yellow-400">Uday</span> Kalse
//     </h1>
//     <p className="text-lg md:text-xl mb-6">
//       I'm a{" "}
//       <span className="text-green-400">frontend developer</span> and{" "}
//       <span className="text-blue-400">MERN developer</span>.
//     </p>

//     <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">

//       <button
//         onClick={() => openResume("frontend")}
//         className="inline-flex items-center gap-2 py-3 px-6 bg-gray-800 text-white font-medium rounded-lg shadow-md transition-transform hover:scale-105 focus:ring-4 focus:ring-yellow-400"
//       >
//         <img
//           src={frontendIcon}
//           alt="Frontend Icon"
//           className="h-5 w-5"
//         />
//         Frontend Resume
//       </button>

//       <button
//         onClick={() => openResume("fullstack")}
//         className="inline-flex items-center gap-2 py-3 px-6 bg-gray-800 text-white font-medium rounded-lg shadow-md transition-transform hover:scale-105 focus:ring-4 focus:ring-blue-400"
//       >
//         <img
//           src={fullstackIcon}
//           alt="Fullstack Icon"
//           className="h-5 w-5"
//         />
//         Fullstack Resume
//       </button>
//     </div>
//   </div>
// </div>
// </div>
