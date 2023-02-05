/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "EM",
  title: "Hi, I'm Quique",
  subTitle: emoji(
    "I'm a Software Engineer with a passion for designing innovative solutions and streamlining processes through technology and data, with a focus on Big Data, AI, and Machine Learning."
  ),
  resumeLink: "https://docs.google.com/document/d/1wqYaxuQlNT4ROfjA1DffCUvPQg72BsIt/edit?usp=sharing&ouid=114614159031807590682&rtpof=true&sd=true", // Set to empty to hide the button
  profilePicture: require("./assets/images/profile-image.jpeg"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/quiquemz",
  linkedin: "https://www.linkedin.com/in/enriquemendezr/",
  gmail: "enrique.mendez.rs@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fa-brands fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fa-solid fa-cloud"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fa-brands fa-google"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fa-brands fa-git"
    },
    {
      skillName: "databricks",
      fontAwesomeClassname: "fa-solid fa-layer-group"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fa-brands fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fa-brands fa-js"
    },
    {
      skillName: "go",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fa-brands fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Esade",
      logo: require("./assets/images/esadeLogo.jpeg"),
      subHeader: "Master of Science in Business Analytics",
      duration: "August 2022 - June 2023",
      desc: "Relevant Courses:",
      descBullets: [
        "Artificial Intelligence 1 & 2",
        "Competing with AI and Cloud",
        "Data-Driven Transformation",
        "Thinking with Data",
      ]
    },
    {
      schoolName: "UC San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 - December 2018",
      desc: "Relevant Courses:",
      descBullets: [
        "Introduction to AI: Search & Reasoning",
        "Introduction to Computer Architecture",
        "Data Science in Practice",
        "Web Client Languages",
        "Computer Networks",
        "Database System Principles",
        "Human-Computer Interaction Design",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Top 6 areas of interest 

const areasOfInterest = {
  display: true,
  areas: [
    {
      name: 'Big Data',
      description: 'Proficient in using Delta to build efficient and scalable Lakehouses for big data processing, analysis, and storage',
      fontAwesomeClassname: 'fa-solid fa-water'
    },
    {
      name: 'Data Visualization',
      description: 'I love creating interactive and intuitive visualizations to effectively communicate data insights',
      fontAwesomeClassname: 'fa-solid fa-chart-simple'
    },
    {
      name: 'Cloud Computing',
      description: 'I have expertise in utilizing cloud-based solutions for data storage, model training, and deployment',
      fontAwesomeClassname: "fa-solid fa-globe"
    },
    {
      name: 'Machine Learning',
      description: 'I am proficient in designing, training, and deploying machine learning models, using popular frameworks in Python',
      fontAwesomeClassname: 'fa-solid fa-graduation-cap'
    },
    {
      name: 'Frontend',
      description: ' I have a solid understanding of frontend technologies and design principles, with a focus on creating user-friendly and responsive interfaces',
      fontAwesomeClassname: 'fa-brands fa-html5'
    },
    
    {
      name: 'DevOps',
      description: 'I have experience in implementing efficient development and operational processes to streamline software delivery',
      fontAwesomeClassname: 'fa-solid fa-infinity'
    },
  ]
}

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technology Innovation Leader",
      company: "Saúl",
      companylogo: require("./assets/images/saulLogo.png"),
      date: "Apr 2020 – Jul 2022",
      desc: "Leveraged my knowledge of software analysis and expertise in Lakehouse technology to optimize core processes and store, process, and analyze large-scale data sets. Implemented best practices in data collection and software development, and executed a data-driven strategy to ensure success.",
      descBullets: []
    },
    {
      role: "Full Stack Engineer",
      company: "Macy's",
      companylogo: require("./assets/images/macysLogo.jpg"),
      date: "Mar 2019 – Apr 2020",
      desc: "As Full Stack Engineer at Macy's, I worked together with Merchandising teams maintaining in-house platforms to design smart events and promotions, keep track of inventory, and category management."
    },
    {
      role: "Software Engineer Intern",
      company: "Qualcomm",
      companylogo: require("./assets/images/qualcommLogo.jpg"),
      date: "Jul 2018 – Sep 2018",
      desc: "As Software Engineer Intern at Qualcomm, I was responsible for writing reliable codes, implementing software architectural improvements, user-facing features or fixing defects and optimizing the code for maximum performance."
    },
    {
      role: "Summer Technology Analyst",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/gsLogo.jpeg"),
      date: "Jun 2016 – Aug 2016",
      desc: "Developed a web application for external clients, collaborating in both sides: front-end and back-end. Used React.js for front-end design and Redux to manage the state of the application. For the backend, we create a REST API based on Java."
    },
    {
      role: "Summer Technology Analyst",
      company: "XumaK",
      companylogo: require("./assets/images/xumakLogo.jpg"),
      date: "Aug 2015 – Sep 2015",
      desc: "Developed a web application for external clients, collaborating in both sides: front-end and back-end. Used React.js for front-end design and Redux to manage the state of the application. For the backend, we create a REST API based on Java."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ✉️"),
  subtitle: "", 
  number: "+34677953268",
  numberStylish: "+34 677-953-268",
  emailAddress: "enrique.mendez.rs@gmail.com"
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  areasOfInterest,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
