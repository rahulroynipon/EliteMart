import Container from "../global/Container";
import heroImage from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <Container className={"lg:justify-end"}>
      <div className="max-h-[20.1rem] md:h-[20rem] lg:w-[calc(100%-20.6rem)]">
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
