import SEO from "../global/SEO";

const HomeSEO = () => {
  return (
    <SEO
      title="Elite Mart - Your One-Stop Shopping Destination"
      description="Discover top-quality fashion, clothing, electronics, and accessories at Elite Mart. Get the best deals on trendy outfits and gadgets!"
      keywords={[
        "Elite Mart",
        "online shopping",
        "fashion",
        "clothing",
        "electronics",
        "accessories",
        "tech gadgets",
        "trendy outfits",
      ]}
      canonicalUrl={window.location.origin}
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Elite Mart",
        url: window.location.origin,
        logo: "/images/logo.png",
        description:
          "Elite Mart offers high-quality fashion, clothing, electronics, and accessories at unbeatable prices.",
        image: "/images/home-banner.jpg",
        sameAs: [
          "https://www.facebook.com/EliteMart",
          "https://www.instagram.com/EliteMart",
          "https://www.twitter.com/EliteMart",
        ],
      }}
    />
  );
};

export default HomeSEO;
