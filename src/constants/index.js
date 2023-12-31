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
  
import mapboxImage from "../assets/mapboxImage.png";
import tab from "../assets/tab.png";
import time from "../assets/time.png";
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "Data Engineering",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "Dev Ops",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "AngularJS",
      icon: typescript,
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
      name: "Node JS",
      icon: nodejs,
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
      date: "March 2020 - April 2021",
      points: [
        "Pioneered and handled an Angular Dashboard by employing Angular, Rest API via JavaScript for a Low-Code Program and delivered front-end service to beginner developers to choose a pre-defined coding template/environment",
        "Collaborated on the front-end of a Vila-Portal Project via JavaScript, Bootstrap, HTML3 and CSS5 and provided drag and drop access to company analysis comprising of yearly profits and loss resulting in a detailed insight analysis increase by 8%",
        "Planned, coordinated, and developed a Resource Management Web Tool using Java with Spring-Boot framework on the backend and JavaScript with Angular framework on the front-end executing a filter-based method on specific employee-based domain and their details and boosted storing and maintaining feature efficiency by ~3-4% from the prior company tool",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Ericsson Global",
      icon: tesla,
      iconBg: "#d7e1f7",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Performed data mining and analysis utilizing Python libraries to generate hourly alerts and timed reports along with designing and maintaining production-quality dashboards and carried out data manipulation and organization of 100+ complex datasets",
        "Optimized SQL queries, data aggregation for analyzing data on established and prospective customers, interactive marketing channels and developed Tableau dashboards and increased sales revenue by 18%",
        "Designed normalized tables, implemented indexes, and successfully optimized the SQL query processing in MySQL database",
      ],
    },
    {
      title: "Data Software Engineering Coop",
      company_name: "Abiomed",
      icon: shopify,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - June 2023",
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
      name: "Online Auction System",
      description:
        "Presenting an advanced Online Auction System crafted with JavaScript, JSP, HTML5, and CSS3. This cutting-edge platform optimizes bidding and auctioning, offering an intuitive user experience. JavaScript and JSP facilitate seamless bidding and auction tracking, while HTML5 and CSS3 ensure a responsive interface for effortless listing exploration across devices.",
      tags: [
        {
          name: "AngularJS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/mahanta-mayur/Online-Merchandise-Exchange",
    },
    {
      name: "Weather App",
      description:
        "Discover a user-friendly Weather app built in React JS. Leveraging Open Weather Map API, it fetches current weather data seamlessly. Modern JavaScript Fetch API and React hooks ensure efficient data management, while conditionals adapt the interface to varying weather states. Experience real-time weather insights with simplicity and innovation.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "fetchAPI",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/mahanta-mayur/react-weather-app",
    },
    {
      name: "Classification Analysis on NYPD Crime Arrest Data",
      description:
        "Presenting an insightful breakdown of NYPD arrests in New York City this year. I conducted comprehensive Data Wrangling, involving meticulous data preprocessing and cleaning. Leveraging Python libraries like Scikit-Learn, NumPy, Pandas, SNS, Seaborn, and Matplotlib, I extracted compelling visualizations. Machine Learning Models --",
      tags: [
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
      name: "Data Analysis on Elections",
      description:
        "This mini project delves into Indian Elections Analysis using Hadoop (Big Data). It encompasses a comprehensive study of the 2019 Indian Elections datasets through Tableau and Hadoop. This endeavor seeks to ascertain political party popularity, decipher intricate trends, and patterns via Python. Additionally, it probes the correlation between party density and topography. The project culminates with a detailed analysis report, utilizing Hive to explore and infer win/loss percentages of parties.",
      tags: [
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
    {
      name: "Time Series Feature Extraction for Human Body Monitoring",
      description:
        "Employing advanced computational techniques, I conducted Visibility Graph Network Computations. I harnessed both HVG and NVG methodologies to analyze intricate human body movement data. Leveraging Python libraries such as Scikit-Learn, NumPy, Pandas, SNS, Seaborn, and Matplotlib, factors were computed and helped generate insightful Scatter Plots. This holistic approach offers deeper insights into movement patterns and relationships.",
      tags: [
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
      ],
      image: time,
      source_code_link: "https://github.com/mahanta-mayur/Time-Series-Feature-Extraction-for-Human-Body-Monitoring",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };