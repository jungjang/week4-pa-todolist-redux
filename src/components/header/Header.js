import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeaderBox>
      <div>W4 - My Todo List</div>
      <div>React-redux</div>
    </StHeaderBox>
  );
};

export default Header;

const StHeaderBox = styled.div`
  border: 1px solid rgb(212, 212, 212);
  border-radius: 5px;

  padding: 0 20px 0 20px;

  color: rgb(44, 46, 46);

  font-size: 18px;
  font-weight: bold;

  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
