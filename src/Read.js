import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "./Card";

const Read = () => {
  const [cartData, setCartData] = useState([]);

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCartData(data));
  };

  useEffect(() => {
    getData();
    console.log(cartData);
  });
  return (
    <Container>
      {cartData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          img={item.image}
        />
      ))}
    </Container>
  );
};

export default Read;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
