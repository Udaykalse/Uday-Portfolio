import React from 'react';
// import VerticalStepper from './VerticalStepper';

const About = () => {
  return (
    <header className="bg-divColor w-full h-full p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Information</h2>
          <p className="text-gray-700 mb-2">Name: Udaysinh Kalse</p>
          <p className="text-gray-700 mb-2">Phone: +91 932-599-9657</p>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:udaykalse123@gmail.com" className="text-blue-500">udaykalse123@gmail.com</a></p>
          <p className="text-gray-700 mb-2">LinkedIn: <a href="https://linkedin.com/in/uday-kalse" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/uday-kalse</a></p>
          <p className="text-gray-700 mb-2">GitHub: <a href="https://github.com/in/uday-kalse" className="text-blue-500" target="_blank" rel="noopener noreferrer">github.com/in/uday-kalse</a></p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Objective</h2>
          <p className="text-gray-700">To secure a challenging position as a Java Developer at Pragmatic Career Solutions where I can utilize my technical skills in Java programming and contribute effectively to software development initiatives.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
          <p className="text-gray-700">Languages: Java, SQL, JavaScript, HTML/CSS</p>
          <p className="text-gray-700">Frameworks: Hibernate, React.js, Spring Boot</p>
          <p className="text-gray-700">Tools & Platforms: Git, GitHub</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
          {/* <VerticalStepper /> */}
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professional Experience</h2>
          <p className="text-gray-700 mb-2">React.js Developer Intern, Ricoz, Pune, Maharashtra (2023 – 2024)</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed and maintained 80+ user interfaces using React.js.</li>
            <li>Collaborated with the design team to implement 75+ responsive web pages.</li>
            <li>Created 50+ dynamic web applications with JavaScript and HTML/CSS.</li>
            <li>Integrated 15 RESTful APIs to ensure seamless functionality.</li>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default About;
