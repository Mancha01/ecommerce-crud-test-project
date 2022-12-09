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
  });

  const setData = (data) => {
    let { id, title, price, description, category, image } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Title", title);
    localStorage.setItem("Price", price);
    localStorage.setItem("Description", description);
    localStorage.setItem("Category", category);
    localStorage.setItem("Image", image);
  };

  const onDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <Container>
      {cartData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          price={data.price}
          description={data.description}
          category={data.category}
          img={data.image}
          btn={() => setData(data)}
          btn2={() => onDelete(data.id)}
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
