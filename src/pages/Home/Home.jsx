import React from 'react';
import './HackerBackground.css'; // Custom CSS file for HackerBackground styles
import frontendIcon from '../../assets/fnng.png';
import fullstackIcon from './../../assets/bnPng.png';
import HackerBackground from './../../components/Background/HackerBackground';

function Home() {
  const openResume = (type) => {
    let filePath = '';

    switch (type) {
      case 'frontend':
        filePath = '/Resume/Frontend/Udaysinh_Kalse_Frontend_Resume.pdf';
        break;
      case 'fullstack':
        filePath = '/Resume/Backend/Udaysinh_Kalse_FullStack_Resume.pdf';
        break;
      default:
        return;
    }

    window.open(filePath, '_blank');
  };

  return (
    <HackerBackground>
      <header className="text-center">
        <h1 className="text-3xl font-bold">Hey, I am <span>Uday</span> Kalse</h1>
        <p className="mt-4">I'm a <span className="text-green-600">frontend developer</span> and <span className="text-blue-600">fullstack developer</span></p>
        <p className="mt-4">
          As a frontend web developer passionate about crafting engaging user experiences, I specialize in turning ideas into intuitive, responsive interfaces. With proficiency in modern technologies like React and expertise in crafting pixel-perfect designs with Tailwind CSS, I strive to create visually stunning and functional websites. I bring creativity and technical skill together to deliver user-centric solutions that enhance usability and drive engagement.
        </p>
      </header>
      <main className="mt-8 flex flex-col items-center">
        <button
          onClick={() => openResume('frontend')}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mb-4 flex items-center"
        >
          <img src={frontendIcon} alt="Frontend Icon" className="mr-2 h-6 w-6" />
          Frontend
        </button>
        <button
          onClick={() => openResume('fullstack')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-4 flex items-center"
        >
          <img src={fullstackIcon} alt="Fullstack Icon" className="mr-2 h-6 w-6" />
          Fullstack
        </button>
      </main>
    </HackerBackground>
  );
}

export default Home;
