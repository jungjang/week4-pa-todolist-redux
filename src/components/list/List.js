import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import Todo from "./todo/Todo";
import styled from "styled-components";

const List = () => {
  const data = useSelector((state) => state.todos.todosList);
  return (
    <StList>
      <h1>Working...😢</h1>
      <div>
        {data?.map((value) => {
          if (value.isDone === false) {
            return <Todo key={`List-Todo-${value.id}`} data={value}></Todo>;
          } else {
            return null;
          }
        })}
      </div>
      <h1>Done...😎</h1>
      <div>
        {data?.map((value) => {
          if (value.isDone === true) {
            return <Todo key={`List-Todo-${value.id}`} data={value}></Todo>;
          } else {
            return null;
          }
        })}
      </div>
    </StList>
  );
};

export default List;

const StList = styled.div`
  padding-left: 20px;
`;
