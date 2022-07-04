import { Section, Container, BannerSection } from "./styles";

const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Fashion is an armour
          </span>
        </BannerSection>
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            to survive everyday life.
          </span>
        </BannerSection>
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            One is never overdressed{" "}
          </span>
        </BannerSection>
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            {" "}
            or underdressed{" "}
          </span>
        </BannerSection>
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            with a Little Black Dress.
          </span>
        </BannerSection>
      </Container>
    </Section>
  );
};

export default Banner;
