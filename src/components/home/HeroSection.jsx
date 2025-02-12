import Container from "../global/Container";
import heroImage from "../../assets/hero.jpg";
import { DeskCategory } from "../global/DesKCategory";
import useIsMobile from "../../hook/useIsMobile";

const HeroSection = () => {
  const isMobile = useIsMobile(1024);

  return (
    <Container className={"space-x-3"}>
      {!isMobile && (
        <div className="h-[20.1rem] w-[20rem] shrink-0 bg-white border border-gray/30 ">
          <DeskCategory />
        </div>
      )}
      <div className="max-h-[20.1rem] md:h-[20rem] w-full">
        <img
          className="h-full w-full object-fill"
          src={heroImage}
          alt="hero-image"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
