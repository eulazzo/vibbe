import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import image_1 from "../assets/Images/1.webp";
import image_2 from "../assets/Images/2.webp";
import image_3 from "../assets/Images/3.webp";
import image_4 from "../assets/Images/4.webp";
import image_5 from "../assets/Images/5.webp";
import image_6 from "../assets/Images/6.webp";
import image_7 from "../assets/Images/7.webp";
import image_8 from "../assets/Images/8.webp";
import image_9 from "../assets/Images/9.webp";
import image_10 from "../assets/Images/10.webp";
import image_11 from "../assets/Images/11.webp";
import image_12 from "../assets/Images/12.webp";
import image_13 from "../assets/Images/13.webp";
import image_14 from "../assets/Images/14.webp";
import { motion } from "framer-motion";
import Product from "../components/Product";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 1%;
  z-index: 11;
`;
const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef?.current;
    let pinWrapWidth = scrollingElement?.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
          markers: true,
        },
        //height scrolling of this section same as the scrolling element has to be incresead
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      //horizontal scrolling [photos]
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          markers: true,
        },
        //height scrolling of this section same as the scrolling element has to be incresead
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  return (
    <Section ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        New Collection
      </Title>
      <Left>
        <p>
          The brand new collection is currently being developed in Brazil. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics. <br />
          <br /> We have lots of different clothing options like shoes, jackets
          and dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={image_1} title="Man basics" />
        <Product img={image_2} title="Tops" />
        <Product img={image_3} title="Sweatshirts" />
        <Product img={image_4} title="Ethnic Wear" />
        <Product img={image_5} title="Blazers" />
        <Product img={image_6} title="Suits" />
        <Product img={image_7} title="Antiques" />
        <Product img={image_8} title="Jewellery" />
        <Product img={image_9} title="Watches" />
        <Product img={image_10} title="Special Edition" />
      </Right>
    </Section>
  );
};

export default Shop;
