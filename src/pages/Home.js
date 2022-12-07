import React from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import styled from "styled-components";

const Home = () => {
  return (
    <StHome>
      <Header />
      <Form />
      <List />
    </StHome>
  );
};

export default Home;

const StHome = styled.div`
  width: 80%;
  max-width: 1200px;

  border: 1px solid white;

  margin: auto;
`;
