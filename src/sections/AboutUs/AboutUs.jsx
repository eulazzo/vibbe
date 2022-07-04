 
import img3 from "../../assets/Images/3.webp";
import img4 from "../../assets/Images/15.jpg";
import img5 from "../../assets/Images/16.jpg";

import{Section,Title,Left,Right,Paragraph} from './styles'
 

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book is an ART that can not be
          grasped by everyone. <br />
          <br /> We are very dedicated to making our products. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. <br />
        </Paragraph>
      </Left>
      <Right>
        <img src={img5} alt="about us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img4}
          className="small-img-1"
          alt="about us"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          alt="about us"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
};

export default About;
