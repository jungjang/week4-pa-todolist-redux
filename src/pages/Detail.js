import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

/*
해당id
해당 title
해당 content
*/
const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const detailCard = useSelector((state) => state.todos.detail);

  const goHomeHandler = () => {
    navigate("/");
    // navigate(-1)
  };
  return (
    <StDetail>
      <StHeader>
        <h3>ID : {id}</h3>
        <StButton onClick={goHomeHandler}>메인페이지로</StButton>
      </StHeader>
      <StContainer>
        <StSpanTitle>TITLE</StSpanTitle>
        <StTitle>{detailCard.title}</StTitle>
        <StSpanContent>CONTENT</StSpanContent>
        <StContent>{detailCard.content}</StContent>
      </StContainer>
    </StDetail>
  );
};

export default Detail;

const StDetail = styled.div`
  border: 3px solid rgb(1, 97, 97);
  border-radius: 10px;

  width: 500px;
  height: 300px;
`;

const StHeader = styled.div`
  border-radius: 5px;
  margin: 10px auto auto auto;

  width: 450px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StButton = styled.button`
  width: 100px;
  height: 30px;

  border: transparent;
  border-radius: 10px;

  color: white;
  background-color: rgb(1, 97, 97);
`;

const StContainer = styled.div`
  width: 450px;
  height: 210px;

  margin: 10px auto auto auto;
`;

const StSpanTitle = styled.span`
  font-size: 15px;
`;

const StSpanContent = styled.span`
  font-size: 15px;
`;

const StTitle = styled.div`
  font-size: 40px;
`;

const StContent = styled.div`
  font-size: 25px;
`;
