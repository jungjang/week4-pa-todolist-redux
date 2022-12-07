import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, editTodo, detailTodo } from "../../../redux/modules/todos";
import styled from "styled-components";

const Todo = ({ data }) => {
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    dispatch(deleteTodo(data.id));
  };

  const editTodoHandler = () => {
    dispatch(editTodo(data.id));
  };

  const detailTodoHandler = () => {
    navigate(`/detail/${data.id}`);
    dispatch(detailTodo(data.id));
  };

  const navigate = useNavigate();
  return (
    <StTodo>
      <StDetailBtn onClick={detailTodoHandler}>상세보기</StDetailBtn>
      <StTodoBox>
        <StTitle>{data.title}</StTitle>
        <StContent>{data.content}</StContent>
      </StTodoBox>
      <StBtnBox>
        <StDelBtn onClick={deleteTodoHandler}>삭제하기</StDelBtn>
        <StConditionBtn onClick={editTodoHandler}>
          {data.isDone ? "취소" : "완료"}
        </StConditionBtn>
      </StBtnBox>
    </StTodo>
  );
};

export default Todo;

const StTodo = styled.div`
  border: 3px solid rgb(1, 97, 97);
  border-radius: 10px;

  display: inline-block;
  margin: 0 20px 20px 0;

  width: 330px;
`;

const StDetailBtn = styled.button`
  border: transparent;
  border-radius: 5px;

  height: 30px;
  width: 80px;

  margin: 20px 0 0 20px;

  background-color: rgb(1, 97, 97);
  color: white;

  font-size: 14px;
`;

const StTodoBox = styled.div`
  height: 120px;
  padding: 20px;
`;

const StTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const StContent = styled.div`
  font-weight: 300;
  font-size: 18px;

  margin-top: 10px;
  padding: 0 0 20px 0;
`;

const StBtnBox = styled.div`
  display: flex;
  margin: 0 20px 20px 20px;
  gap: 15px;
  background-color: transparent;
`;

const StDelBtn = styled.button`
  border: 2px solid red;
  border-radius: 5px;

  width: 140px;
  height: 40px;
`;

const StConditionBtn = styled.button`
  border: 2px solid green;
  border-radius: 5px;

  width: 140px;
  height: 40px;
`;
