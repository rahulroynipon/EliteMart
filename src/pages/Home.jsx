import HomeSEO from "../components/home/HomeSEO";
import HeroSection from "../components/home/HeroSection";
import TopSection from "../components/home/TopSection";

const Home = () => {
  return (
    <>
      <HomeSEO />
      <h1 className="text-red-500">Home</h1>
      <main>
        <HeroSection />
        <TopSection />
      </main>
    </>
  );
};

export default Home;
