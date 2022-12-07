import React from "react";
import styled from "styled-components";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

export const Card = ({ title, price, description, category, img }) => {
  return (
    <Card1>
      <Image src={img} alt="" />
      <Container1>
        <div>
          <Title>{title}</Title>
          <Desc>{description}</Desc>
          <Category>Category: {category}</Category>
        </div>
        <Container2>
          <Title>${price}</Title>
          <Container3>
            <div>
              <RiDeleteBin7Line />
            </div>
            <div>
              <CiEdit />
            </div>
          </Container3>
        </Container2>
      </Container1>
    </Card1>
  );
};

const Container1 = styled.div`
  display: flex;
  padding: 10px;
`;

const Container2 = styled.div`
  margin-left: 40px;
`;
const Container3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Card1 = styled.div`
  width: 350px;
  height: 455px;
  background-color: #91e5f6;
  border-radius: 15px;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 80%;
  height: 70%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 20px;
  margin-left: 10%;
  margin-top: 2%;
`;

const Desc = styled.p`
  font-size: small;
  margin: 0;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.h4`
  color: black;
  margin: 0;
`;

const Category = styled.h5`
  margin: 0;
  color: black;
`;
