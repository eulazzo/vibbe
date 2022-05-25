import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Product from "../components/Product";

//scroll effect
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

// images
import image_1 from "../assets/Images/11.webp";
import image_2 from "../assets/Images/12.webp";
import image_3 from "../assets/Images/13.webp";
import image_4 from "../assets/Images/14.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  border: 3px solid ${(props) => props.theme.body};
  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  z-index: 11;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 1%;
  z-index: 11;
`;

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  z-index: 5;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height:auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NewArrivals = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const scrollingVerticalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = scrollingVerticalRef?.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App",
          scrub: true,
          pin: true,
        },

        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref}>
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>
      <Container ref={scrollingVerticalRef}>
        <Product img={image_1} title="Denin" newArrival={true} />
        <Product img={image_2} title="Cool Dresses" newArrival={true} />
        <Product img={image_3} title="Jackets" newArrival={true} />
        <Product img={image_4} title="T-shirts" newArrival={true} />
      </Container>
      <Text data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. This
        collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also
        find some cool clothes that you <br />
        <br /> can wear everyday. The first line of clothing you will see on
        this collection is for men. The collection also includes three new
        styles for women.
        <br />
        <br /> Give it a try and experience a new look.
      </Text>
    </Section>
  );
};

export default NewArrivals;
