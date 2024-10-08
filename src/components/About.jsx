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
import profilePic from '../assets/profile_pic.png'; 

// At the top of your About.jsx file
const SkillBadge = ({ src, alt, name }) => (
  <div className="flex flex-col items-center m-4">
    <img src={src} alt={alt} style={{ width: '40px', height: '40px' }} />
    <span className="text-sm text-white mt-2">{name}</span>
  </div>
);

const SkillsSection = () => (
  <div className="skills-section my-10 w-full max-w-6xl mx-auto mt-20">
    <h3 className="text-white text-2xl font-bold text-center mb-6">Technology & Expertise</h3>
    <div className="skills-container grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 className="skills-category-title text-white text-center">Programming Languages</h4>
        <div className="skills-list flex justify-center flex-wrap">
          <SkillBadge src="https://skillicons.dev/icons?i=python" alt="Python" name="Python"/>
          <SkillBadge src="https://skillicons.dev/icons?i=c" alt="C" name="C" />
          <SkillBadge src="https://skillicons.dev/icons?i=java" alt="Java" name="Java" />
          <SkillBadge src="https://skillicons.dev/icons?i=r" alt="R" name="R"/>
          <SkillBadge src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" name="JavaScript" />
          <SkillBadge src="https://skillicons.dev/icons?i=scala" alt="Scala" name="Scala" />
        </div>
      </div>
      <div>
        <h4 className="skills-category-title  text-white text-center">Frameworks & Libraries</h4>
        <div className="skills-list flex justify-center flex-wrap">
          <SkillBadge src="https://skillicons.dev/icons?i=react" alt="React" name="React" />
          <SkillBadge src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" name="Node.js" />
          <SkillBadge src="https://skillicons.dev/icons?i=vue" alt="Vue" name="Vue" />
          <SkillBadge src="https://skillicons.dev/icons?i=angular" alt="Angular" name="Angular" />
          <SkillBadge src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" name="Bootstrap"/>
          <SkillBadge src="https://skillicons.dev/icons?i=threejs" alt="Three.js" name="Three.js" />
        </div>
      </div>
      <div>
        <h4 className="skills-category-title  text-white text-center">Cloud Services & Platforms</h4>
        <div className="skills-list flex justify-center flex-wrap">
          <SkillBadge src="https://skillicons.dev/icons?i=aws" alt="AWS" name="AWS"/>
          <SkillBadge src="https://skillicons.dev/icons?i=azure" alt="Azure" name="Azure"/>
          <SkillBadge src="https://skillicons.dev/icons?i=docker" alt="Docker" name="Docker"/>
          <SkillBadge src="https://skillicons.dev/icons?i=git" alt="Git" name="Git"/>
          <SkillBadge src="https://skillicons.dev/icons?i=github" alt="GitHub" name="GitHub"/>
          <SkillBadge src="https://skillicons.dev/icons?i=gitlab" alt="GitLab" name="GitLab"/>
        </div>
      </div>
      <div>
        <h4 className="skills-category-title  text-white text-center">Databases</h4>
        <div className="skills-list flex justify-center flex-wrap">
          <SkillBadge src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" name="MongoDB"/>
          <SkillBadge src="https://skillicons.dev/icons?i=mysql" alt="MySQL" name="MySQL"/>
          <SkillBadge src="https://skillicons.dev/icons?i=dynamodb" alt="DynamoDB" name="DynamoDB"/>
          <SkillBadge src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL" name="PostgreSQL"/>
        </div>
      </div>
      <div>
        <h4 className="skills-category-title  text-white text-center">Tools & Other Technologies</h4>
        <div className="skills-list flex justify-center flex-wrap">
          <SkillBadge src="https://skillicons.dev/icons?i=vscode" alt="VS Code" name="VS Code"/>
          <SkillBadge src="https://skillicons.dev/icons?i=eclipse" alt="Eclipse" name="Eclipse"/>
          <SkillBadge src="https://skillicons.dev/icons?i=maven" alt="Maven" name="Maven"/>
          <SkillBadge src="https://skillicons.dev/icons?i=sklearn" alt="Scikit-learn" name="Scikit-learn"/>
          <SkillBadge src="https://skillicons.dev/icons?i=kafka" alt="Kafka" name="Kafka"/>
          <SkillBadge src="https://skillicons.dev/icons?i=regex" alt="Regex" name="Regex"/>
        </div>
      </div>
      <div>
        <h4 className="skills-category-title  text-white text-center">Game Development</h4>
        <div className="skills-list flex justify-center flex-wrap">
          <SkillBadge src="https://skillicons.dev/icons?i=unity" alt="Unity" name="Unity"/>
          <SkillBadge src="https://skillicons.dev/icons?i=unreal" alt="Unreal" name="Unreal"/>
        </div>
      </div>
    </div>
  </div>
);

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
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText} mx-auto`}>About me</h2>
        <div className="profile-pic-container mt-4 flex justify-center">
          <img src={profilePic} alt="Mayur Mahanta" className="profile-pic" />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        <div className="w-full md:w-[1200px]">
          I'm a skilled data engineer turned data scientist with experience in
          Python, PySpark, SQL, AWS Services like S3, Glue Studio, Athena, QuickSight, Redshift, Lambda, GCP services, Databricks along
          with Talend, Tableau, Power BI, PostgreSQL, MongoDB. I also have experience in JavaScript, with expertise in 
          frameworks like ReactJS, ThreeJS, AngularJS and VueJS. On the data side of things, with around 2+ years of work experience, 
          and through development of personal projects, I have learned the importance of having 
          an iterative, hypothesis-oriented approach to Data Engineering, Science/Analytics and Decision Intelligence. 
          I also have experience as a Software Engineer in Front-end and Testing, skilled in ensuring the quality and 
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
      <SkillsSection />
    </>
  );
};

export default SectionWrapper(About, "about");
