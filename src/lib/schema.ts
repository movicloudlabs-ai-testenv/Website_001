export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MoviCloud Labs Private Limited",
  "alternateName": "MoviCloud Labs",
  "url": "https://movicloudlabs.com",
  "logo": "https://movicloudlabs.com/logo1.webp",
  "description": "MoviCloud Labs builds intelligent applications with advanced AI and analytics capabilities. Expert in mobile & web app development for enterprises.",
  "email": "info@movicloudlabs.com",
  "telephone": "+919600701007",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/movicloud-labs-pvt-ltd/",
    "https://x.com/movicloudlabs",
    "https://www.facebook.com/movicloudlabs",
    "https://www.instagram.com/movicloudlabs"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MoviCloud Labs",
  "url": "https://movicloudlabs.com",
  "description": "Intelligent enterprise solutions powered by advanced analytics and AI",
  "publisher": {
    "@type": "Organization",
    "name": "MoviCloud Labs Private Limited"
  }
};

export const createProductSchema = (product: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": product.name,
  "description": product.description,
  "url": `https://movicloudlabs.com${product.url}`,
  "image": product.image || "https://movicloudlabs.com/logo1.webp",
  "applicationCategory": product.category || "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for enterprise pricing"
  },
  "provider": {
    "@type": "Organization",
    "name": "MoviCloud Labs Private Limited"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50"
  }
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://movicloudlabs.com${item.url}`
  }))
});
