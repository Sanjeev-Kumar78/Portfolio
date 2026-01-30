interface ProfileData {
personal: {
  name: string;
  title: string;
  tagline: string;
  location: string;
  photoUrl: string;
  contact: {
    email: string;
    website: string;
    linkedin: string;
    github: string;
    telegram: string;
    discord: string;
  };
};
about: {
  description: string;
  interest: string[];
};
skills: {
  programmingLanguages: {
    name: string;
    icon: string;
  }[];
  webdev: {
    frontend: {
      name: string;
      icon: string;
    }[];
    backend: {
      name: string;
      icon: string;
    }[];
    databases: {
      name: string;
      icon: string;
    }[];
  };
  datascience: {
    name: string;
    icon: string;
  }[];
  cloud: {
    name: string;
    icon: string;
  }[];
  tools: {
    name: string;
    icon: string;
  }[];
};
experience: {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skillsUsed: string[];
}[];
education: {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  grade: string;
  description: string;
}[];
projects: {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
  skillsUsed: string[];
  projectdomain: string;
  status: string;
}[];
}

export const ProfileData: ProfileData = {
personal: {
  name: "Sanjeev Kumar",
  title: "",
  tagline: "Building innovative solutions with code",
  location: "N/A",
  photoUrl: "https://example.com/photo.jpg",
  // if changed needs to add a icon in Contact.tsx
  contact: {
    email: "sanjeev-kumar78@outlook.com",
    website: "https://sanjeev-kumar78.vercel.app",
    linkedin: "https://www.linkedin.com/in/sanjeev-kumar78",
    github: "https://www.github.com/Sanjeev-Kumar78",
    telegram: "https://t.me/sanjeev032",
    discord: "https://discord.com/users/sanjeevkumar78",
  },
},
about: {
  description: `I am a Computer Science Engineering student (CGPA 9.0) at KIIT with hands-on experience in AI, machine learning, and full-stack development. I develop scalable applications that solve real-world problems and deliver tangible results. My work includes projects like:

> Travel Itinerary Generator: 100 + monthly visitors
> Book Recommendation System: A web application that recommends books based on user choice.
> Weather Trend Analyzer: The service is a platform that visualizes real-time information.

  Got direct experience with open source by actively participating in Hacktoberfest 2022 and 2024 and GirlScript Summer of Code 2024. Passionate open-source developer with a track record of working collaboratively, bug fixes, documentation and code review.

  Energetic to develop AI based solutions which provide a practical solution to real world problems and deliver quantifiable business results. My vision is to attain optimal solutions of real-life problems using innovative technology.`,
  interest: [
    "Programming",
    "Web Development",
    "Open Source",
    "Cloud Computing",
    "Data Science",
  ],
},
skills: {
  programmingLanguages: [
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain colored",
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain colored",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
  ],
  webdev: {
    frontend: [
      {
        name: "HTML",
        icon: "devicon-html5-plain colored",
      },
      {
        name: "CSS",
        icon: "devicon-css3-plain colored",
      },
      {
        name: "React",
        icon: "devicon-react-original colored",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-original colored",
      },
      {
        name: "Bootstrap",
        icon: "devicon-bootstrap-plain colored",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Express.js",
        icon: "devicon-express-original",
      },
      {
        name: "Django",
        icon: "devicon-django-plain colored",
      },
      {
        name: "Flask",
        icon: "devicon-flask-original colored",
      },
      {
        name: "FastAPI",
        icon: "devicon-fastapi-plain colored",
      },
    ],
    databases: [
      {
        name: "MongoDB",
        icon: "devicon-mongodb-plain colored",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain",
      },
      {
        name: "MySQL",
        icon: "devicon-mysql-plain",
      },
    ],
  },
  datascience: [
    {
      name: "NumPy",
      icon: "devicon-numpy-plain colored",
    },
    {
      name: "Pandas",
      icon: "devicon-pandas-plain colored",
    },
    {
      name: "Matplotlib",
      icon: "devicon-matplotlib-plain",
    },
    {
      name: "Scikit-learn",
      icon: "devicon-scikitlearn-plain colored",
    },
    {
      name: "TensorFlow",
      icon: "devicon-tensorflow-original colored",
    },
    {
      name: "PyTorch",
      icon: "devicon-pytorch-original colored",
    },
  ],
  cloud: [
    {
      name: "Google Cloud Platform",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg ",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "devicon-git-plain colored",
    },
    {
      name: "Github",
      icon: "devicon-github-original colored",
    },
    {
      name: "Docker",
      icon: "devicon-docker-plain colored",
    },
    {
      name: "Postman",
      icon: "devicon-postman-plain colored",
    },
  ],
},
experience: [
  // Example experience entry
  {
    company: "Tech Solutions Inc.",
    position: "Software Engineer",
    startDate: "2022-01-01",
    endDate: "Present",
    description:
      "Developing web applications and APIs using modern technologies.",
    skillsUsed: ["JavaScript", "Node.js", "React"],
  },
],
education: [
  {
    institution: "Kalinga Institute of Industrial Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    startDate: "2024-08-01",
    endDate: "2028-05-31",
    grade: "9.0 CGPA",
    description:
      "Studied computer science with a focus on building strong understanding of computer fundamentals.",
  },
],
projects: [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    imageUrl: "/Projects_Banner/Portfolio.webp",
    liveUrl: "https://sanjeev-kumar78.vercel.app",
    sourceUrl: "https://github.com/Sanjeev-Kumar78/portfolio",
    skillsUsed: ["TypeScript", "React", "Tailwind CSS"],
    projectdomain: "Web Development",
    status: "Completed",
  },
  {
    title: "Splitwise v2 CI/CD Pipeline",
    description:
      "Built CI/CD for Splitwise v2 with GitHub Actions, Amazon EC2 deployment via SSM, and an on-instance script to orchestrate Docker releases behind Caddy. Includes Prometheus + Grafana monitoring and auto-updates the GitHub repo About website URL; architecture diagram shown in the project image.",
    imageUrl:
      "https://raw.githubusercontent.com/Sanjeev-Kumar78/splitwise-v2/main/Architecture_Diagram.png",
    liveUrl: "",
    sourceUrl: "https://github.com/Sanjeev-Kumar78/splitwise-v2",
    skillsUsed: [
      "Docker",
      "Caddy",
      "Prometheus",
      "Grafana",
      "Java",
      "Spring Boot",
      "GitHub Actions",
      "AWS EC2",
      "SSM",
    ],
    projectdomain: "DevOps & Backend",
    status: "Completed",
  },
{
  title: "Expense Manager",
  description:
    "An AI-powered expense management system with receipt OCR, smart categorization, and spend analytics, built using FastAPI, MongoDB, and Docker for scalable deployment.",
  imageUrl: "/Projects_Banner/Expense_Manager.jpg",
  liveUrl: "https://expense-manager-e6t1.onrender.com/docs",
  sourceUrl: "https://github.com/Sanjeev-Kumar78/Expense_Manager",
  skillsUsed: [
    "FastAPI",
    "Python",
    "MongoDB",
    "Docker",
    "Gemini API",
  ],
  projectdomain: "Backend Development & AI",
  status: "Completed",
},

{
  title: "Travel Itinerary Generator",
  description:
    "A web application that generates travel itineraries based on user preferences along with the weather information.",
  imageUrl: "/Projects_Banner/Travel_Itinerary.jpg",
  liveUrl: "https://sanjeev02.pythonanywhere.com/",
  sourceUrl:
    "https://github.com/Sanjeev-Kumar78/travel-itinerary-generator",
  skillsUsed: [
    "Flask",
    "Python",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
  ],
  projectdomain: "Web Development & AI",
  status: "Completed",
},
{
  title: "Weather Trend Analyzer",
  description:
    "Data visualization platform for weather patterns using Python libraries. Implemented caching to reduce API calls by 60%.",
  imageUrl: "/Projects_Banner/Weather_Trend_Analyzer.webp",
  liveUrl: "https://weathertrendanalyzer.streamlit.app/",
  sourceUrl: "https://github.com/Sanjeev-Kumar78/Weather_Trend_Analyzer",
  skillsUsed: ["Python", "Matplotlib", "Pandas", "NumPy", "Streamlit"],
  projectdomain: "Data Analysis",
  status: "Completed",
},
{
  title: "Object Detection",
  description:
    "An advanced object recognition project using Python and OpenCV with YOLO. It features object-detection in images, custom object training, and initial models for various applications.",
  imageUrl: "/Projects_Banner/Object_Detection.webp",
  liveUrl:
    "https://object-detection-yolov10.streamlit.app/?embed_options=dark_theme",
  sourceUrl: "https://github.com/Sanjeev-Kumar78/Object-Detection",
  skillsUsed: ["Python", "YOLO", "Streamlit"],
  projectdomain: "Machine Learning",
  status: "Completed",
},
{
  title: "Book Recommendation System",
  description:
    "This is a book recommendation system based on the book rating data from GoodReads_100k dataset. The dataset contains 100k book. Used Tf-idf vectorization and cosine similarity to recommend books based on user choice.",
  imageUrl: "/Projects_Banner/Book_Recommendation.png",
  liveUrl: "https://recommendation-book.streamlit.app/",
  sourceUrl:
    "https://github.com/Sanjeev-Kumar78/Book-Recommendation-System",
  skillsUsed: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
  projectdomain: "Machine Learning",
  status: "Completed",
},
],
};
