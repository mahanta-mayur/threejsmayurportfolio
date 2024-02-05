import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
  } from "../assets";

import pred from '../assets/pred.png';

import awstech from '../assets/tech/aws.png'
import archcovid from '../assets/archcovid.png';
import post from '../assets/tech/postgre.png' 
import kmeans from '../assets/kmeans.png'; 
import aws from '../assets/aws.png';  
import mapboxImage from "../assets/mapboxImage.png";
import tab from "../assets/tab.png";
import time from "../assets/time.png";
import tableaupng from '../assets/tech/tableau.png'
import spotify from '../assets/spotify.png';
import tableau from '../assets/tableau.png';
import threejs from "../assets/tech/threejs.svg";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Science",
      icon: web,
    },
    {
      title: "Data Engineering",
      icon: mobile,
    },
    {
      title: "Analytics",
      icon: backend,
    },
    {
      title: "Cloud Services",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "AWS",
      icon: awstech,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PostgreSQL",
      icon: post,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Tableau",
      icon: tableaupng,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Cypress",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Software Developer",
      company_name: "Ericsson Global",
      icon: starbucks,
      iconBg: "#d7e1f7",
      date: "January 2020 - June 2020",
      points: [
        "Pioneered and handled an Angular Dashboard by employing Angular, Rest API via JavaScript for a Low-Code Program and delivered front-end service to beginner developers to choose a pre-defined coding template/environment",
        "Collaborated on the front-end of a Vila-Portal Project via JavaScript, Bootstrap, HTML3 and CSS5 and provided drag and drop access to company analysis comprising of yearly profits and loss resulting in a detailed insight analysis increase by 8%",
        "Planned, coordinated, and developed a Resource Management Web Tool using Java with Spring-Boot framework on the backend and JavaScript with Angular framework on the front-end executing a filter-based method on specific employee-based domain and their details and boosted storing and maintaining feature efficiency by ~3-4% from the prior company tool",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "Ericsson Global",
      icon: tesla,
      iconBg: "#d7e1f7",
      date: "July 2020 - December 2020",
      points: [
        "Performed data mining and analysis utilizing Python libraries to generate hourly alerts and timed reports along with designing and maintaining production-quality dashboards and carried out data manipulation and organization of 100+ complex datasets",
        "Optimized SQL queries, data aggregation for analyzing data on established and prospective customers, interactive marketing channels and developed Tableau dashboards and increased sales revenue by 18%",
        "Designed normalized tables, implemented indexes, and successfully optimized the SQL query processing in MySQL database",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "Abiomed",
      icon: shopify,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - July 2023",
      points: [
        "Streamlined attribute retrieval and resolved UI issues for SiteInformation and LocationInformation Schema using PostgreSQL, DBeaver, VueJS and Postman by optimizing queries and conducting unit tests and Postman API testing to ensure accurate display of information and enhancing the reliability and accuracy of the ABI Virtual Assistant application by 7%",
        "Demonstrated effective document management and control by adding User Interface Requirement Specifications to the Project Plan in JAMA by defining component appearance, attributes, and their purpose, increasing clarity and ensuring efficient development of the AxM Project",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Collaborated with the development team to implement UI style changes and bug fixes in the alarm config component, resulting in the accurate rendering of alarm text by using AngularJS and contributed to comprehensive end-to-end testing, including verification of SRS items and writing automated tests by leveraging the Cypress testing tool to perform UI testing, evaluating elements such as side navigation menu, theme change functionality, and saving custom layouts",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Classification Analysis on NYPD Crime Arrest Data",
      description:
        "Presenting an insightful breakdown of NYPD arrests in New York City this year. I conducted comprehensive Data Wrangling, involving meticulous data preprocessing and cleaning. Leveraging Python libraries like Scikit-Learn, NumPy, Pandas, SNS, Seaborn, and Matplotlib, I extracted compelling visualizations. Machine Learning Models --",
      tags: [
        {
          name: "DataScience",
          color: "green-text-gradient",
        },        
        {
          name: "KNN",
          color: "blue-text-gradient",
        },
        {
          name: "Linear Regression",
          color: "green-text-gradient",
        },
        {
          name: "Logistic Regression",
          color: "pink-text-gradient",
        },
        {
          name: "Random Forest",
          color: "green-text-gradient",
        },
        {
          name: "Naïve-Bayes",
          color: "blue-text-gradient",
        },
        {
          name: "Neural Networks",
          color: "pink-text-gradient",
        },
      ],
      image: mapboxImage,
      source_code_link: "https://github.com/mahanta-mayur/Classification-Analysis-on-NYPD-Crime-Arrest-Data",
    },
    {
      name: "Advanced Machine Learning in Predictive Maintenance",
      description:
        "This project represents a leap in predictive maintenance for engineering, utilizing machine learning to preemptively identify maintenance needs. Leveraging a UCI synthetic dataset with 10,000 records and 14 features, including Air Temperature and Torque, I delved into extensive data preprocessing to handle nulls, outliers, and feature selection. The project employed a variety of ML models - Logistic Regression, Naive Bayes, Decision Trees, and Support Vector Machines - to predict equipment failures, leading to optimized maintenance schedules, enhanced productivity, and reduced operational costs. Key success metrics included an impressive F1-score of 0.95 for Logistic Regression, underscoring its efficacy in failure prediction.",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },        
        {
          name: "MachineLearning",
          color: "blue-text-gradient",
        },
        {
          name: "LogisticRegression",
          color: "green-text-gradient",
        },
        {
          name: "NaiveBayes",
          color: "pink-text-gradient",
        },
        {
          name: "DecisionTrees",
          color: "green-text-gradient",
        },
        {
          name: "SVM",
          color: "blue-text-gradient",
        },
      ],
      image: pred,
      source_code_link: "https://github.com/mahanta-mayur/predictivemaintenance",
    },
    {
      name: "Advanced Data Clustering Techniques in Machine Learning",
      description:
        "In this project, I focused on the sophisticated application of clustering methods in data science, with a special emphasis on K-means clustering. Utilizing both synthetic and real-world datasets, I implemented and fine-tuned the K-means algorithm, alongside other clustering techniques, to categorize data efficiently based on inherent similarities. My approach included rigorous data preprocessing, algorithm optimization, and the employment of various validation methods to ascertain the integrity and accuracy of the clustering results. This intricate work highlighted the versatility of clustering methods in revealing intrinsic patterns and groupings within complex datasets, providing valuable insights for data-driven decision-making.",
      tags: [
        {
          name: "DataScience",
          color: "blue-text-gradient",
        },        
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Sckit-Learn",
          color: "blue-text-gradient",
        },
        {
          name: "Numpy",
          color: "pink-text-gradient",
        },
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "pink-text-gradient",
        },
        {
          name: "Seaborn",
          color: "green-text-gradient",
        },
        {
          name: "KMeans",
          color: "pink-text-gradient",
        },
        {
          name: "AlgorithmOptimization",
          color: "blue-text-gradient",
        },                
      ],
      image: kmeans,
      source_code_link: "https://github.com/mahanta-mayur/Clustering-Method-Implementation/tree/main",
    },
    {
      name: "YouTube Data Engineering & Analytics (AWS & PySpark",
      description:
        "In this innovative project, I harnessed AWS cloud technology to orchestrate a robust data engineering pipeline for YouTube video analytics. The journey began with data ingestion from diverse sources, leading to a sophisticated ETL process using AWS Lambda functions. This process efficiently transformed raw data into analyzable formats. Utilizing AWS services like S3, Glue, and Athena, I created a scalable data lake, ensuring high adaptability for growing data volumes. The culmination of this project was the development of insightful QuickSight dashboards, offering a comprehensive analysis of YouTube video trends and viewer interactions based on categories and metrics.",
      tags: [
        {
          name: "PySpark",
          color: "green-text-gradient",
        },
        {
          name: "DataEngineering",
          color: "blue-text-gradient",
        },        
        {
          name: "AWS",
          color: "blue-text-gradient",
        },
        {
          name: "Lambda",
          color: "pink-text-gradient",
        },
        {
          name: "QuickSight",
          color: "blue-text-gradient",
        },
        {
          name: "S3",
          color: "green-text-gradient",
        },        
        {
          name: "Athena",
          color: "pink-text-gradient",
        },
        {
          name: "Glue",
          color: "green-text-gradient",
        },
      ],
      image: aws,
      source_code_link: "https://github.com/mahanta-mayur/Youtube-Analysis-AWS",
    },
    {
      name: "COVID-19 Data Insights & Trends (AWS & Python)",
      description:
        "In this pivotal project, I leveraged AWS cloud infrastructure to develop a comprehensive data mining and analysis pipeline focused on COVID-19. Starting with the systematic ingestion of global COVID-19 datasets into AWS S3, the project utilized AWS Glue for the ETL processes, transforming a wide range of data into a structured format suitable for analysis. By integrating services such as S3 for data storage, Redshift for data warehousing, and Athena for seamless querying, I built a robust data lake architecture capable of scaling with the influx of data. The project's highlight was employing Python in Jupyter Notebooks for advanced data transformations and exploratory analysis, culminating in the generation of dynamic dashboards. These dashboards visualize critical insights into the pandemic’s trends, risk factors, and impacts, providing valuable resources for public health decision-making.",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },        
        {
          name: "DataMining",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "Redshift",
          color: "pink-text-gradient",
        },
        {
          name: "Athena",
          color: "green-text-gradient",
        },
        {
          name: "Glue",
          color: "blue-text-gradient",
        },
        {
          name: "S3",
          color: "green-text-gradient",
        },
        {
          name: "Public Health",
          color: "blue-text-gradient",
        }
      ],
      image: archcovid,
      source_code_link: "https://github.com/mahanta-mayur/SARS-CoV-2-AWS-Data-Mining-and-Insights",
    },
    {
      name: "Spotify Data Engineering and Analysis (AWS & Python)",
      description:
        "In this innovative project, I harnessed the power of AWS to engineer and analyze the Spotify 2023 dataset, uncovering key insights into music streaming trends. Starting with Python for data cleaning and preprocessing, stored the curated data in Amazon S3. AWS Glue's ETL capabilities transformed this data for in-depth analysis. Automated schema detection by AWS Glue crawlers enabled efficient SQL queries in Amazon Athena, culminating in the creation of insightful dashboards in AWS QuickSight. This project illustrates the potential of combining AWS cloud services with Python to delve into the dynamics of music preferences, offering valuable insights for the industry.",
      tags: [
        {
          name: "DataEngineering",
          color: "blue-text-gradient",
        },        
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "blue-text-gradient",
        },
        {
          name: "QuickSight",
          color: "pink-text-gradient",
        },
        {
          name: "S3",
          color: "blue-text-gradient",
        },
        {
          name: "Athena",
          color: "pink-text-gradient",
        },
        {
          name: "Glue",
          color: "green-text-gradient",
        },
        {
          name: "MusicStreaming",
          color: "pink-text-gradient",
        }                
      ],
      image: spotify,
      source_code_link: "https://github.com/mahanta-mayur/Spotify-Data-Engineering-and-analysis-using-AWS",
    },
    {
      name: "Employee Rating Application",
      description:
        "Modelled and developed an employee performance Data Warehouse, by creating a multi-dimensional schema and ran various SQL and NoSQL (MongoDB) queries on it. Visualized and provided some important observations in Python by drawing significant insights on the Review Data.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Neo4js",
          color: "pink-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/mahanta-mayur/Resource-Management-System",
    },
    {
      name: "Bike Sharing Analysis in Capital Bikeshare System (Tableau)",
      description:
        "This project dives into the Capital Bikeshare system in Washington D.C., analyzing bike-sharing activities for 2011 and 2012 to gauge the impact of environmental factors and seasonal variations on bike rental patterns. Using a dataset with 17,389 records, including detailed bike rental counts and weather conditions, unlocked insights into urban mobility and its correlation with weather and seasons. Through advanced data processing and Tableau visualizations, I've highlighted key trends, such as the variation in casual and registered user behavior, the influence of temperature on bike usage, and the distinct patterns of bike rentals during different times of the day and year. The findings underscore the importance of strategic bike placement and availability to maximize system profitability and support sustainable urban transport solutions.",
      tags: [
        {
          name: "DataAnalysis",
          color: "pink-text-gradient",
        },
        {
          name: "Tableau",
          color: "blue-text-gradient",
        },
        {
          name: "BikeSharing",
          color: "green-text-gradient",
        },
        {
          name: "UrbanMobility",
          color: "blue-text-gradient",
        },
        {
          name: "Sustainability",
          color: "pink-text-gradient",
        },                
      ],
      image: tableau,
      source_code_link: "https://github.com/mahanta-mayur/bike-sharing-analysis-tableau-project",
    },
    {
      name: "Data Analysis on Elections",
      description:
        "This mini project delves into Indian Elections Analysis using Hadoop (Big Data). It encompasses a comprehensive study of the 2019 Indian Elections datasets through Tableau and Hadoop. This endeavor seeks to ascertain political party popularity, decipher intricate trends, and patterns via Python. Additionally, it probes the correlation between party density and topography. The project culminates with a detailed analysis report, utilizing Hive to explore and infer win/loss percentages of parties.",
      tags: [
        {
          name: "DataAnalytics",
          color: "pink-text-gradient",
        },        
        {
          name: "Tableau",
          color: "blue-text-gradient",
        },
        {
          name: "Hive",
          color: "green-text-gradient",
        },
        {
          name: "HBase",
          color: "pink-text-gradient",
        },
        {
          name: "HDFS",
          color: "green-text-gradient",
        },
        {
          name: "MapReduce",
          color: "blue-text-gradient",
        },
      ],
      image: tab,
      source_code_link: "https://github.com/mahanta-mayur/Data-Analysis-Vizualizations",
    },         
  ];

  export { services, technologies, experiences, testimonials, projects };
