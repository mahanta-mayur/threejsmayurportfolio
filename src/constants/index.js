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

import cvs from '../assets/company/cvs.png';
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
      title: "Data Scientist",
      company_name: "CVSHealth",
      icon: cvs,
      iconBg: "#FFFFFF",
      date: "July 2024 - Present",
      points: [
        "Augmented P&L forecasting accuracy by 5% using Python & SQL, directly influencing contract adjustments & client outcomes",
        "Conducted Root Cause Analysis to identify & resolve forecasting errors in rebate rates & specialty cost of goods improving reliability",
        "Streamlined data pipelines in Databricks with PySpark & MySQL, boosting processing efficiency by 12% & reducing forecast errors",
        "Integrated artifacts in GCP for Data Forecast Mart, automated ingestion & built APIs, enhancing data availability for underwriters",
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
        "Advanced a predictive maintenance model using machine learning on a UCI dataset with 14 features, like Air Temperature and Torque. Focused on data preprocessing and employed Logistic Regression, Naive Bayes, Decision Trees, and SVMs for predicting equipment failures. Achieved a notable F1-score of 0.95 with Logistic Regression, significantly improving maintenance scheduling and reducing costs",
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
        "Implemented K-means clustering and other techniques to segment synthetic and real-world datasets. The project involved thorough data preprocessing and optimization of clustering algorithms, validated through various methods to ensure result accuracy. Demonstrated clustering's potential in uncovering patterns for informed decision-making",
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
        "Developed a data engineering pipeline on AWS for YouTube analytics, encompassing data ingestion, ETL processes with Lambda, and data storage in a scalable S3 data lake. Leveraged AWS Glue and Athena for data organization and querying, culminating in QuickSight dashboards that provided detailed analyses of video trends and viewer engagement",
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
        "Constructed an AWS-based data analysis pipeline for COVID-19 data, starting with data collection into S3 and utilizing AWS Glue for ETL. A scalable data lake was formed using S3, with Redshift for warehousing and Athena for queries. Advanced data transformations and exploratory analysis were conducted using Python in Jupyter Notebooks, resulting in dynamic dashboards that visualized key pandemic trends and supported public health decisions",
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
        "Utilized AWS and Python to analyze the Spotify 2023 dataset, revealing streaming trends. Cleaned and preprocessed data using Python, stored it in S3, and transformed it via AWS Glue for analysis. Leveraged Glue crawlers for schema detection and Athena for SQL querying, which fed into AWS QuickSight dashboards that highlighted music streaming dynamics, providing valuable industry insights",
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
        "Analyzed Washington D.C.'s Capital Bikeshare data from 2011-2012, studying the influence of weather and seasons on bike-sharing patterns. Processed a dataset of 17,389 records to discover trends in urban mobility, using Tableau to visualize user behaviors, temperature impacts, and rental cycles. Results informed strategic bike distribution to enhance system efficiency and promote sustainable transportation",
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
