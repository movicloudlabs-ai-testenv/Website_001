// SEO Component Template Generator
// Add this before the return statement in each product component

export const generateProductPageSEO = (productKey: 'office' | 'school' | 'ecommerce' | 'hotel' | 'survey' | 'marketing', url: string, breadcrumbName: string) => {
  const seo = productSEO[productKey];
  const productSchema = createProductSchema({
    name: seo.productName,
    description: seo.productDescription,
    url: url,
    category: seo.category
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: breadcrumbName, url: url }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [productSchema, breadcrumbSchema]
  };

  return {
    seoProps: {
      title: seo.title,
      description: seo.description,
      canonical: url,
      keywords: seo.keywords,
      ogType: "product" as const,
      jsonLd: combinedSchema
    }
  };
};

// Usage in each component (before return statement):
// const { seoProps } = generateProductPageSEO('office', '/products/office', 'Office Management');
// Then in JSX: <SEO {...seoProps} />
