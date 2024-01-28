import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Lottie from 'lottie-react';
import animationData from '../assets/frontend.json'; 
import animationDataEngineer from '../assets/dataengineer.json';
import animationDataAnalyst from '../assets/dataanalyst.json';
import animationDataAutomationEngineer from '../assets/automationengineer.json';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full shadow-card" // Use the shadow-card class here
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="custom-background rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {index === 0 && <Lottie animationData={animationData} height={80} width={80} />} {/* Render Lottie animation for the first card */}
        {index === 1 && <Lottie animationData={animationDataEngineer} height={80} width={80} />} {/* Render Lottie animation for the second card */}
        {index === 2 && <Lottie animationData={animationDataAnalyst} height={80} width={80} />} {/* Render Lottie animation for the third card */}
        {index === 3 && <Lottie animationData={animationDataAutomationEngineer} height={80} width={80} />} {/* Render Lottie animation for the fourth card */}
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className="w-full md:w-[1000px]">
          I'm a skilled software developer and data engineer with experience in
          JavaScript, and expertise in frameworks like React, Node.js, Three.js,
          and Vue. On the data side of things, Through development of personal projects and 
          a valuable internship, I have learned the importance of having an iterative, 
          hypothesis-oriented approach to Machine Learning, Analysis and Decision Intelligence. 
          I have also gained proficiency working with Python, SQL, R, Tableau. I also have 
          experience as a Software Engineer in Testing, skilled in ensuring the quality and 
          reliability of software solutions. With expertise in tools like Cypress and Docker, 
          I specialize in validating and enhancing the performance of applications, contributing 
          to the creation of robust and dependable software experiences. 
          An audiophile, guitar player and a vagabond who always likes
          to explore nature in pursuit of a greater purpose in life!
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
