import products from "../Data/products.json";
import Brands from "../Data/brand.json";

import HomeSEO from "../components/home/HomeSEO";
import HeroSection from "../components/home/HeroSection";
import TopSection from "../components/home/TopSection";
import ProductSection from "../components/home/ProductSection";
import BrandSection from "../components/home/BrandSection";

const Home = () => {
  return (
    <>
      <HomeSEO />
      <main className="flex flex-col gap-16">
        <HeroSection />

        {/* Top Category Section Start */}
        <TopSection />
        {/* Top Category Section end */}

        {/* Featured Products Section Start  */}
        <ProductSection
          title="Featured Products"
          products={products}
          viewAllLink="/products"
        />

        {/* Women Products Section Start  */}
        <ProductSection
          title="Women Products"
          products={products}
          viewAllLink="/products"
        />

        {/* Men Accessories Products Section Start  */}
        <ProductSection
          title="Men Accessories"
          products={products}
          viewAllLink="/products"
        />

        {/* Beauty Products Section Start  */}
        <ProductSection
          title="Beauty Products"
          products={products}
          viewAllLink="/products"
        />

        {/* Latest Products Section Start  */}
        <ProductSection
          title="Latest Products"
          products={products}
          viewAllLink="/products"
        />

        {/* Brand section start here */}
        <BrandSection
          title="Shop by Brandss"
          barnds={Brands}
          viewAllLink="/brands"
        />
      </main>
    </>
  );
};

export default Home;
