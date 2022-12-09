import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Containment } from "./Create";

const Update = () => {
  const [id, setID] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("Title"));
    setPrice(localStorage.getItem("Price"));
    setDescription(localStorage.getItem("Description"));
    setCategory(localStorage.getItem("Category"));
    setImage(localStorage.getItem("Image"));
  }, []);

  const updateApiData = (e) => {
    e.preventDefault();
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: { title },
        price: { price },
        description: { description },
        image: { image },
        category: { category },
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <Containment>
      <Form>
        <fieldset>
          <legend>Update Product</legend>

          <Label>
            Title
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Label>
          <Label>
            Price
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Label>
          <Label>
            Description
            <TextArea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Label>
          <Label>
            Category
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Label>
          <Label>
            Image Url
            <Input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Label>
        </fieldset>
        <button type="submit" onClick={updateApiData}>
          Submit
        </button>
      </Form>
    </Containment>
  );
};

export default Update;

const Input = styled.input`
  display: block;
`;
const Label = styled.label`
  display: block;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  display: block;
`;

const Form = styled.form`
  margin-left: 20px;
  width: 80vw;
  height: 80vh;
`;
