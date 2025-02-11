import HomeSEO from "../components/home/HomeSEO";
import HeroSection from "../components/home/HeroSection";
import TopSection from "../components/home/TopSection";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HomeSEO />
      <h1 className="text-red-500">Home</h1>
      <main className="flex flex-col gap-16">
        <HeroSection />
        <TopSection />
        <FeaturedProducts />
      </main>
    </>
  );
};

export default Home;
