import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { useInView } from 'react-intersection-observer'; // Importing for scroll into view detection

const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true });

  const steps = [
    {
      title: "Higher Secondary Certificate",
      description:
        "Maharashtra Junior College, Latur, Maharashtra (2017 – 2019)",
    },
    {
      title: "Bachelor of Science in Computer Science",
      description: "Dayanand Science College, Latur, Maharashtra (2019 – 2022)",
    },
    {
      title: "Master of Science in Computer Science",
      description:
        "Swami Vivekanand College of Information Technology, Udgir, Maharashtra (2023 – Present)",
    },
  ];

  return (
    <header className="bg-divColor w-full h-full p-8 ">
      <div className="max-w-4xl mx-auto bg-transparent p-6 rounded-lg shadow-lg">
        
        <motion.section 
          ref={aboutRef}
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h1>

          <section className="mb-6">
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Contact Information
            </motion.h2>
            <p className="text-black-700 mb-2">Name: Udaysinh Kalse</p>
            <p className="text-black-700 mb-2">Phone: +91 932-599-9657</p>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:udaykalse123@gmail.com"
                className="text-blue-500 transition-transform duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <FaEnvelope className="inline-block w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/uday-kalse-5aa5862b7/"
                className="text-blue-500 transition-transform duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <FaLinkedin className="inline-block w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/Udaykalse"
                className="text-blue-500 transition-transform duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <FaGithub className="inline-block w-6 h-6" />
              </motion.a>
            </div>
          </section>

          <section className="mb-6">
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Objective
            </motion.h2>
            <p className="text-gray-900">
              To secure a challenging position as a Java Developer at Pragmatic
              Career Solutions where I can utilize my technical skills in Java
              programming and contribute effectively to software development
              initiatives.
            </p>
          </section>

          <section className="mb-6">
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              Skills
            </motion.h2>
            <p className="text-gray-900">
              Languages: Java, SQL, JavaScript, HTML/CSS
            </p>
            <p className="text-gray-900">
              Frameworks: Hibernate, React.js, Spring Boot
            </p>
            <p className="text-gray-900">Tools & Platforms: Git, GitHub</p>
          </section>
        </motion.section>

        <motion.section
          ref={educationRef}
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: educationInView ? 1 : 0, y: educationInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: educationInView ? 1 : 0, y: educationInView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Education
          </motion.h2>
          <ul className="list-none mb-2">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                className="mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: educationInView ? 1 : 0, y: educationInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4, ease: "easeOut" }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-900">{step.description}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          ref={experienceRef}
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Professional Experience
          </motion.h2>
          <p className="text-gray-900 mb-2">
            React.js Developer Intern, Ricoz, Pune, Maharashtra (2023 – 2024)
          </p>
          <ul className="list-disc list-inside text-gray-900">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: experienceInView ? 1 : 0, x: experienceInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Developed and maintained 80+ user interfaces using React.js.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: experienceInView ? 1 : 0, x: experienceInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              Collaborated with the design team to implement 75+ responsive web
              pages.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: experienceInView ? 1 : 0, x: experienceInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Created 50+ dynamic web applications with JavaScript and HTML/CSS.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: experienceInView ? 1 : 0, x: experienceInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            >
              Integrated 15 RESTful APIs to ensure seamless functionality.
            </motion.li>
          </ul>
        </motion.section>

      </div>
    </header>
  );
};

export default About;
