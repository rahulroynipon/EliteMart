import { useLocation } from "react-router";
import SEO from "../global/SEO";

const AllProductsSEO = () => {
  const location = useLocation();
  const productUrl = `${window.location.origin}${location.pathname}`;

  return (
    <SEO
      title="Shop the Best Products at Elite Mart"
      description="Find top-quality fashion, electronics, and accessories at unbeatable prices. Shop now at Elite Mart."
      keywords={[
        "Elite Mart",
        "online shopping",
        "fashion",
        "electronics",
        "accessories",
        "tech gadgets",
        "best deals",
        "top-rated products",
      ]}
      canonicalUrl={productUrl}
      ogType="product"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Store",
        name: "Elite Mart",
        description:
          "Elite Mart offers high-quality fashion, clothing, electronics, and accessories at unbeatable prices.",
        url: productUrl,
        image: "/images/default-product.jpg",
        sameAs: [
          "https://www.facebook.com/EliteMart",
          "https://www.instagram.com/EliteMart",
          "https://www.twitter.com/EliteMart",
        ],
      }}
    />
  );
};

export default AllProductsSEO;
