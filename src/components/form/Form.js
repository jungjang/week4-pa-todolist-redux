import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";

const Form = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ title: "", content: "" });
  const todos = useSelector((state) => state.todos.todosList);
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    //제목이나 내용이 빈 값일 경우 아무것도 리턴하지 않아요!
    if (input.title === "" && input.content === "") return;

    const payload = {
      id: todos.length + 1,
      title: input.title,
      content: input.content,
      isDone: false,
    };
    dispatch(addTodo(payload));
    setInput({ title: "", content: "" });
  };

  return (
    <StForm
      onSubmit={() => {
        dispatch(addTodo(input));
      }}
    >
      <div>
        <StLabel>제목 </StLabel>
        <StInput
          type="text"
          name="title"
          value={input.title}
          onChange={onChangeHandler}
          required
        />
        <StLabel>내용 </StLabel>
        <StInput
          type="text"
          name="content"
          value={input.content}
          onChange={onChangeHandler}
          required
        />
      </div>
      <StButton onClick={addTodoHandler}>추가하기</StButton>
    </StForm>
  );
};

export default Form;

const StForm = styled.form`
  border-radius: 5px;
  background-color: rgb(212, 212, 212);

  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;

const StLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

const StInput = styled.input`
  border: transparent;
  border-radius: 5px;

  background-color: white;

  height: 35px;
  width: 220px;

  margin-right: 15px;
`;

const StButton = styled.button`
  border: transparent;
  border-radius: 5px;

  height: 40px;
  width: 150px;

  background-color: rgb(1, 97, 97);
  color: white;

  font-size: 16px;
  font-weight: 500;
`;
