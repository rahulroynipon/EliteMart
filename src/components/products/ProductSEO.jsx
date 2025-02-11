import SEO from "../global/SEO";

const ProductSEO = () => {
  return (
    <SEO
      title="Shop the Best Products | Elite Mart"
      description="Explore a wide range of high-quality fashion, clothing, electronics, and accessories at Elite Mart."
      keywords={[
        "online shopping",
        "best deals",
        "fashion",
        "electronics",
        "clothing",
        "Elite Mart",
        "affordable products",
      ]}
      canonicalUrl={`${window.location.origin}/products`}
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Elite Mart Products",
        description:
          "Find the latest fashion trends, top-quality gadgets, and accessories at the best prices.",
        url: `${window.location.origin}/products`,
      }}
    />
  );
};

export default ProductSEO;
