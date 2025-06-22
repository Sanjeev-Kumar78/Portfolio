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
    programmingLanguages: string[];
    webdev: {
      frontend: string[];
      backend: string[];
      databases: string[];
    };
    datascience: string[];
    cloud: string[];
    tools: string[];
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
    name: "John Doe",
    title: "Software Engineer",
    tagline: "Building innovative solutions with code",
    location: "N/A",
    photoUrl: "https://example.com/photo.jpg",
    contact: {
      email: "john.doe@example.com",
      website: "https://johndoe.com",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://www.github.com/johndoe",
      telegram: "https://t.me/johndoe",
      discord: "https://discord.com/users/johndoe",
    },
  },
  about: {
    description: "Just some text about me",
    interest: [
      "Programming",
      "Web Development",
      "Open Source",
      "Machine Learning",
      "Cloud Computing",
      "Artificial Intelligence",
      "Data Science",
      "Cyber Security",
    ],
  },
  skills: {
    programmingLanguages: ["JavaScript", "Python", "C++"],
    webdev: {
      frontend: [
        "HTML",
        "CSS",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        // ... add more frontend skills
      ],
      backend: [
        "Node.js",
        "Express.js",
        "Django",
        "Flask",
        "FastAPI",
        // ... add more backend skills
      ],
      databases: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    datascience: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
    cloud: ["Google Cloud Platform"],
    tools: ["Git", "Docker", "Postman"],
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
      imageUrl: "https://example.com/portfolio.jpg",
      liveUrl: "https://johndoe.com/portfolio",
      sourceUrl: "https://github.com/johndoe/portfolio",
      skillsUsed: ["TypeScript", "React", "Tailwind CSS"],
      projectdomain: "Web Development",
      status: "Completed",
    },
  ],
};
