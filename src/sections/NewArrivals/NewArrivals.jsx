import { useLayoutEffect, useRef } from "react";
import {Product} from "../../components";

//scroll effect
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

// images
import image_1 from "../../assets/Images/11.webp";
import image_2 from "../../assets/Images/12.webp";
import image_3 from "../../assets/Images/13.webp";
import image_4 from "../../assets/Images/14.webp";

import {Section,Overlay,Title,Text,Container} from './styles'

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
    <Section ref={ref} id="new-arrival">
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
