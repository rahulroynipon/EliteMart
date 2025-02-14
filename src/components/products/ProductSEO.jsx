import SEO from "../global/SEO";
import { useLocation } from "react-router";
import useDBStore from "../../store/DB";

const ProductSEO = () => {
  const { selectedProduct: product } = useDBStore();
  if (!product) return;

  const location = useLocation();
  const productUrl = `${window.location.origin}${location.pathname}`;

  return (
    <SEO
      title={`${product?.name || "Product"} - Buy at Elite Mart`}
      description={
        product?.description ||
        "Shop the best deals on high-quality fashion, clothing, electronics, and accessories at Elite Mart."
      }
      keywords={[
        product?.name || "Elite Mart",
        "online shopping",
        "best deals",
        "fashion",
        "electronics",
        "clothing",
        "affordable products",
      ]}
      canonicalUrl={productUrl}
      ogType="product"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product?.name || "Elite Mart Product",
        description:
          product?.description ||
          "Find the latest fashion trends, top-quality gadgets, and accessories at the best prices.",
        image: product?.image || "/images/default-product.jpg",
        url: productUrl,
        brand: {
          "@type": "Brand",
          name: "Elite Mart",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: product?.price || "0.00",
          availability: "https://schema.org/InStock",
          url: productUrl,
        },
      }}
    />
  );
};

export default ProductSEO;
