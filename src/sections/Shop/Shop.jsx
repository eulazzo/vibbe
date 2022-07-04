import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import image_1 from "../../assets/Images/1.webp";
import image_2 from "../../assets/Images/2.webp";
import image_3 from "../../assets/Images/3.webp";
import image_4 from "../../assets/Images/4.webp";
import image_5 from "../../assets/Images/5.webp";
import image_6 from "../../assets/Images/6.webp";
import image_7 from "../../assets/Images/7.webp";
import image_8 from "../../assets/Images/8.webp";
import image_9 from "../../assets/Images/9.webp";
import image_10 from "../../assets/Images/10.webp";

import { Product } from "../../components";
import { Section, Title, Left, Right } from "./styles";

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
          // markers: true,
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
          // markers: true,
        },
        //height scrolling of this section same as the scrolling element has to be incresead
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
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
