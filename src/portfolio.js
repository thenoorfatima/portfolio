import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Noor Fatima",
  title: "Hi all, I'm Noor",
  subTitle: emoji(
    "I am a Master's of Computer Applications student researching data science and machine learning. She's also a full-stack Software (Web & App) Developer and holds a deep interest in Sports, Graphics, and Arts with an eye for aesthetic photography."
  ),
  resumeLink:
    "#",
  cvLink: "#",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thenoorfatima",
  linkedin: "https://www.linkedin.com/in/thenoorfatima/",
  gmail: "noor14fatima@gmail.com",
  medium: "https://medium.com/@noor14fatima",
  instagram: "https://instagram.com/the_noorfatima",
  twitter: "https://twitter.com/the_noorfatima",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Blogs Section

const blogSection = {
  title: "Research Publications",
  subtitle:
    "Research Papers that I've published",

  blogs: [
    {
      url: "https://ifst.onlinelibrary.wiley.com/doi/10.1111/jfpp.16043",
      title: "Siamese Network-Based Computer Vision Approach to Detect Papaya Seed Adulteration in Black Peppercorns",
      description:
        "Journal of Food Processing and Preservation, Wiley (2.19 IF)."
    },
     {
      title: "Tracing Adulteration in Cumin, Cinnamon, and Coffee using Transfer Learning",
      description:
        "International Conference on Data Analytics for Business and Industry, Bahrain (Oct 25 – 26, 2021)."
    },
     {
      title: "AI Art Critic: Artistic Classification of Poster Images using Neural Networks",
      description:
        "International Conference on Data Analytics for Business and Industry, Bahrain (Oct 25 – 26, 2021)."
    },
     {
      title: "Disease and Quality Prediction of Potatoes using Computer Vision",
      description:
        "ACCEPTED in Advances in Distributed Computing and Artificial Intelligence Journal (ADCAIJ) - Journal of the University of Salamanca, Spain (ESCI Indexed)."
    },
     {
      title: "Machine Learning based Prediction and Analysis of River Water Metal Toxicity",
      description:
        "ACCEPTED in Advances in Distributed Computing and Artificial Intelligence Journal (ADCAIJ) - Journal of the University of Salamanca, Spain (ESCI Indexed)."
    },
    {
      url: "https://doi.org/10.1109/IVCNZ51579.2020.9290737",
      title: "AI in Photography: Scrutinizing Implementation of Super-Resolution Techniques in Photo-Editors",
      description:
        "IEEE (Scopus Indexed) 35th International Conference on Image and Vision Computing NewZealand - IVCNZ 2020 (November 25 - 27, 2020)."
    },
    {
      url: "https://doi.org/10.14201/ADCAIJ2020927990",
      title: "Enhancing Performance of a Deep Neural Network: A Comparative Analysis of Optimization Algorithms",
      description:
        "Publisher: Advances in Distributed Computing and Artificial Intelligence Journal (ADCAIJ) - Journal of the University of Salamanca, Spain (ESCI Indexed)."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Research in Data Science and Image Processing and a Developer",
  skills: [
    emoji(
      "⚡ My domain of work lies in Data Science Research, Image Processing and Computer Vison."
    ),
    emoji("⚡ SCI and Scopus-recognised researcher, a full-stack developer"),
    emoji(
      "⚡ Graphic Designer with a decent command in App development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aligarh Muslim Uiniversity",
      logo: require("./assets/images/amulogo.png"),
      subHeader: "Master's of Computer Applications (MCA)",
      duration: "2020 - Present",
      desc: "Department of Computer Science, AMU",
      descBullets: [
        "Coursework: Data Structures, OS, Networking, Data Science, Programming",
        "Paricipating in Reseach and published papers."
      ]
    },
    {
      schoolName: "Aligarh Muslim Uiniversity",
      logo: require("./assets/images/amulogo.png"),
      subHeader: "Bachelor of Science in Computer Applications",
      duration: "2017 - 2020",
      desc: "Department of Computer Science, AMU",
      descBullets: ["Coursework : DBMS, OS, DSA, Mathematics, Statistics"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: "App development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
     {
      role: "Research Intern",
      company: "IIT Kharagpur",
      companylogo: require("./assets/images/iitklogo.png"),
      date: "Dec 2021 – Present",
      desc: "Winter Research Intern at SWAN Labs - IIT Kharagpur under Prof. Sudip Misra"
    },
    {
      role: "DSC Lead",
      company: "Google Developer Student Club",
      companylogo: require("./assets/images/dsclogo.png"),
      date: "June 2021 – Present",
      desc: "Google DSC Lead of Aligarh Muslim University, India",
      descBullets: [
        "Lead of the first Google Developer Student Club of the University",
        "Organiser of hackathons, events, internships and workshops."
      ]
    },
    {
      role: "Data Annotator",
      company: "IIT Delhi",
      companylogo: require("./assets/images/iitdlogo.png"),
      date: "Feb – Oct 2021",
      desc: "Project: Optical Character and Hand-Written Text Recognition for Indian Languages (Under Grand Challenge Scheme - 2) of IRD"
    },
    {
      role: "Data Science Fellow",
      company: "Fellowship.ai",
      companylogo: require("./assets/images/fai.png"),
      date: "Sept – Dec 2021",
      desc: "Worked on real life industry based projects."
    },
    {
      role: "Graphic Designer and Developer",
      company: "Coedify Technologies",
      companylogo: require("./assets/images/coedifylogo.png"),
      date: "2020 – Present",
      desc: "Worked as a Graphical Designer and Web Developer"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I WORKED ON",
  projects: [
    {
      image: require("./assets/images/amusquarelogo.png"),
      projectName: "GANs For Image Super-Resolution",
      projectDesc: "Employed GANs for improving satellite images from the Department of Remote sensing and GIS, AMU."
    },
    {
      image: require("./assets/images/fai.png"),
      projectName: "Price Optimization of various brands on Online Marketing Platforms",
      projectDesc: "Designed a Virtual Laboratory Website for Jawaharlal Nehru Medical College, AMU"
    },
    {
      image: require("./assets/images/amusquarelogo.png"),
      projectName: "PathLab Portal, JNMC AMU",
      projectDesc: "Designed a Virtual Laboratory Website for Jawaharlal Nehru Medical College, AMU",
    },
    {
      image: require("./assets/images/amucalendarlogo.png"),
      projectName: "AMU Calendar App",
      projectDesc: "App developer, worked on React Native and Django Rest Framework",
      footerLink: [
        {
          name: "Visit Code",
          url: "https://github.com/CSS-AMU/amu-calendar-app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Responsibilities & Achievements 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
     {
      title: "Women Tech Global Awards 2021 Winner",
      subtitle:
        "Was awarded the Golden Prize in IT Graduate Category",
      image: require("./assets/images/women.png"),
      footerLink: [
      ]
    },
    {
      title: "IEEE Ambasaddor",
      subtitle:
        "Served as Research Paper Reviewer to IEEE Journals",
      image: require("./assets/images/ieeelogo.png"),
      footerLink: [
      ]
    },
    {
      title: "Coordinator CSS AMU",
      subtitle:
        "Working as Coodinator and research mentor at CSS AMU.",
      image: require("./assets/images/csslogo.png"),
      footerLink: [
        {
          name: "View Club",
          url: "https://www.linkedin.com/company/cssamu/"
        }
      ]
    },

    {
      title: "Official Photographer CSD",
      subtitle: "Official Photographer of the Department of Computer Science, AMU",
      image: require("./assets/images/photographerlogo.png"),
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi?",
  number: "Mail me at :",
  email_address: "nfatima111@myamu.ac.in"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  blogSection,
  skillsSection,
  educationInfo,
  workExperiences,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
