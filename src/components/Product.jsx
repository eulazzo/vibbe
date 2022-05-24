import { motion } from "framer-motion";
import styled from "styled-components";

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    width: fit-content;
    display: inline-block;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} srcset="" />
      <h1>{title}</h1>
    </Item>
  );
};

export default Product;
