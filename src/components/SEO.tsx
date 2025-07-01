import { useEffect } from "react";
import { SiteMetadata, generateMetaTags } from "../data/metadata";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
}) => {
  useEffect(() => {
    const metaTags = generateMetaTags(title, description);

    // Update document title
    document.title = metaTags.title;

    // Update meta description
    updateMetaTag("description", metaTags.description);

    // Update keywords if provided
    if (keywords && keywords.length > 0) {
      updateMetaTag("keywords", keywords.join(", "));
    }

    // Update Open Graph tags
    updateMetaTag("og:title", metaTags.title, "property");
    updateMetaTag("og:description", metaTags.description, "property");
    updateMetaTag("og:url", url || SiteMetadata.siteUrl, "property");
    updateMetaTag(
      "og:image",
      image || `${SiteMetadata.siteUrl}${SiteMetadata.images.og}`,
      "property"
    );

    // Update Twitter tags
    updateMetaTag("twitter:title", metaTags.title, "property");
    updateMetaTag("twitter:description", metaTags.description, "property");
    updateMetaTag(
      "twitter:image",
      image || `${SiteMetadata.siteUrl}${SiteMetadata.images.og}`,
      "property"
    );

    // Update canonical URL
    updateCanonicalUrl(url || SiteMetadata.siteUrl);
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

// Helper function to update meta tags
const updateMetaTag = (
  name: string,
  content: string,
  attribute: string = "name"
) => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (element) {
    element.setAttribute("content", content);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    element.setAttribute("content", content);
    document.head.appendChild(element);
  }
};

// Helper function to update canonical URL
const updateCanonicalUrl = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (canonical) {
    canonical.setAttribute("href", url);
  } else {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", url);
    document.head.appendChild(canonical);
  }
};

export default SEO;
