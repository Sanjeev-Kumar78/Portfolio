export const SiteMetadata = {
  // Basic Site Info
  siteName: "Sanjeev Kumar Portfolio",
  siteUrl: "https://sanjeev-kumar78.vercel.app",
  siteDescription:
    "Computer Science Engineering student specializing in AI, Machine Learning, and full-stack development. Building scalable applications with real-world impact.",

  // SEO
  title: "Sanjeev Kumar78 | Portfolio",
  description:
    "Computer Science Engineering student specializing in AI, Machine Learning, and full-stack development. Building scalable applications with real-world impact.",
  keywords: [
    "Sanjeev Kumar",
    "Sanjeev Kumar78",
    "Sanjeev-Kumar78",
    "AI Developer",
    "Machine Learning",
    "Full Stack Developer",
    "Python",
    "React",
    "Portfolio",
    "Computer Science",
    "Web Development",
    "Data Science",
    "Flask",
    "Streamlit",
    "Cloud Computing",
  ],

  // Social Media
  social: {
    linkedin: "https://www.linkedin.com/in/sanjeev-kumar78",
    github: "https://www.github.com/Sanjeev-Kumar78",
    email: "sanjeev-kumar78@outlook.com",
  },

  // Images
  images: {
    og: "/Projects_Banner/Portfolio.webp",
    favicon: "/portfolio.svg",
    apple: "/portfolio.svg",
  },

  // Theme
  themeColor: "#2563eb",
  backgroundColor: "#0a0a0a",

  // Structured Data
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sanjeev Kumar",
    url: "https://sanjeev-kumar78.vercel.app",
    image: "https://sanjeev-kumar78.vercel.app/portfolio.webp",
    sameAs: [
      "https://www.linkedin.com/in/sanjeev-kumar78",
      "https://www.github.com/Sanjeev-Kumar78",
    ],
    jobTitle: "AI & Full-Stack Developer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Kalinga Institute of Industrial Technology",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Full-Stack Development",
      "Python",
      "React",
      "Data Science",
      "Web Development",
      "Flask",
      "Streamlit",
      "Cloud Computing",
    ],
    email: "sanjeev-kumar78@outlook.com",
    description:
      "Computer Science Engineering student specializing in AI, Machine Learning, and full-stack development. Building scalable applications with real-world impact.",
  },
};

// Dynamic Meta Tag Generator
export const generateMetaTags = (
  pageTitle?: string,
  pageDescription?: string
) => {
  const title = pageTitle
    ? `${pageTitle} | ${SiteMetadata.siteName}`
    : SiteMetadata.title;
  const description = pageDescription || SiteMetadata.description;

  return {
    title,
    description,
    canonical: SiteMetadata.siteUrl,
    openGraph: {
      title,
      description,
      url: SiteMetadata.siteUrl,
      siteName: SiteMetadata.siteName,
      images: [
        {
          url: `${SiteMetadata.siteUrl}${SiteMetadata.images.og}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
};
