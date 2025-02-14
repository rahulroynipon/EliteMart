import Brands from "../Data/brand.json";

import HomeSEO from "../components/home/HomeSEO";
import HeroSection from "../components/home/HeroSection";
import TopSection from "../components/home/TopSection";
import ProductSection from "../components/global/ProductSection";
import BrandSection from "../components/home/BrandSection";
import useDBStore from "../store/DB";

const Home = () => {
  const { getProductsByCategoryType, getProductsByRating, getLatestProducts } =
    useDBStore();

  const bestProducts = getProductsByRating(5, 4, 6);
  const womenProducts = getProductsByCategoryType("women", 6);
  const menProducts = getProductsByCategoryType("men", 6);
  const beautyProducts = getProductsByCategoryType("beauty", 6);
  const latestProducts = getLatestProducts(6);

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
          products={bestProducts}
          viewAllLink="/products"
        />

        {/* Women Products Section Start  */}
        <ProductSection
          title="Women Products"
          products={womenProducts}
          viewAllLink="/products"
        />

        {/* Men Accessories Products Section Start  */}
        <ProductSection
          title="Men Accessories"
          products={menProducts}
          viewAllLink="/products"
        />

        {/* Beauty Products Section Start  */}
        <ProductSection
          title="Beauty Products"
          products={beautyProducts}
          viewAllLink="/products"
        />

        {/* Latest Products Section Start  */}
        <ProductSection
          title="Latest Products"
          products={latestProducts}
          viewAllLink="/products"
        />

        {/* Brand section start here */}
        <BrandSection
          title="Shop by Brands"
          brands={Brands}
          viewAllLink="/brands"
        />
      </main>
    </>
  );
};

export default Home;
