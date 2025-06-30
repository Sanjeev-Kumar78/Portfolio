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
    name: "John Doe",
    title: "",
    tagline: "Building innovative solutions with code",
    location: "N/A",
    photoUrl: "https://example.com/photo.jpg",
    // if changed needs to add a icon in Contact.tsx
    contact: {
      email: "john.doe@example.com",
      website: "https://johndoe.com",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://www.github.com/johndoe",
      telegram: "https://t.me/johndoe",
      discord: "https://discord.com/users/johndoe",
    },
  },
  about: {
    description: "",
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
      imageUrl:
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
      liveUrl: "https://johndoe.com/portfolio",
      sourceUrl: "https://github.com/johndoe/portfolio",
      skillsUsed: ["TypeScript", "React", "Tailwind CSS"],
      projectdomain: "Web Development",
      status: "Completed",
    },
    {
      title: "E-commerce Platform",
      description:
        "An e-commerce platform built with React and Node.js, featuring product listings, user authentication, and payment integration.",
      imageUrl:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
      liveUrl: "https://johndoe.com/ecommerce",
      sourceUrl: "https://github.com/johndoe/ecommerce",
      skillsUsed: ["TypeScript", "React", "Node.js", "Express.js"],
      projectdomain: "Web Development",
      status: "In Progress",
    },
  ],
};
