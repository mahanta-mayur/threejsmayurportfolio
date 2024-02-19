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
      title: "Software Developer",
      company_name: "Ericsson Global",
      icon: starbucks,
      iconBg: "#d7e1f7",
      date: "January 2020 - June 2020",
      points: [
        "Developed Angular Dashboard using AngularJS & Rest API for a Low-Code Program, augmenting template selection for beginners",
        "Enhanced the Vila-Portal Project interface with JavaScript, Bootstrap, HTML & CSS, introducing drag-and-drop for analytics",
        "Achieved 6% increase in analytical insight accuracy by optimizing data visualization using AWS Quicksight on the Vila-Portal Project",
        "Utilized AWS (S3, EC2, Lambda, & DynamoDB) for backend support, elevating Vila-Portals performance & reliability by 3-4%",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "Ericsson Global",
      icon: tesla,
      iconBg: "#d7e1f7",
      date: "July 2020 - February 2021",
      points: [
        "Leveraged Python(PySpark, Scikit-learn, Matplotlib, Celery) for data mining & analysis, generating hourly alerts & report for insights",
        "Crafted & maintained Tableau dashboards, streamlining analysis of 100+ complex MongoDB datasets, reducing analysis time by 8%",
        "Implemented ETL framework & integrated Kafka streams to optimize telecom data flow from networks, reducing workload by 10%",
        "Built ETL pipeline to process unstructured data from telecom network APIs on network faults, traffic data & service usage",
        "Deployed AWS (Lambda, S3, Glue, Redshift) pipeline enriching Tableau dashboards on user data leading to 11% increase in sales",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "Abiomed",
      icon: shopify,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - July 2023",
      points: [
        "Optimized data pipeline to boost processing speed of Impella pump logs (200+GB/hr) collected from patients across US hospitals",
        "Collaborated on AWS (Quicksight, Kinesis, Redshift) real-time dashboard on incoming pump data aiding live data analysis",
        "Executed AWS (S3, Lambda, Kinesis, Redshift) data pipeline plus Python & Kafka for Impella 2.5 pumps clinical metrics (BPM, CO)",
        "Improved clinical teams data accessibility by building ETL pipeline from shared devices to S3 & Redshift, saving 10 hours weekly",
        "Revamped ABIs (Virtual Assistant) UI functionality & design for alarm feature using JavaScript & Vue.JS, ensuring quality feedback",
        "Refined ABIs attribute retrieval accuracy by 7% via PostgreSQL, DBeaver for DBM, Vue.JS (front-end) & Postman for API validation",
        "Performed in-depth UI testing via Cypress to ensure 100% SRS compliance, significantly improving navigation and layout usability",
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
