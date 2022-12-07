const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";
const DETAIL_TODO = "DETAIL_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};

export const detailTodo = (payload) => {
  return {
    type: DETAIL_TODO,
    payload,
  };
};

/*
id :
title : 
content :
isDone :
*/

//initialState
const initialState = [{ todosList: [], detail: {} }];
//reducer
const todos = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todosList: [...state.todosList, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todosList: state.todosList.filter((value) => {
          return value.id !== action.payload;
        }),
      };
    case EDIT_TODO:
      const editData = {
        ...state,
        todosList: state.todosList.map((value) => {
          if (value.id === action.payload) {
            return { ...value, isDone: !value.isDone };
          } else {
            return { ...value };
          }
        }),
      };
      return editData;
    case DETAIL_TODO:
      const detailData = {
        ...state,
        detail: state.todosList.find((item) => {
          return item.id === action.payload;
        }),
      };
      return detailData;
    default:
      return state;
  }
};
//export
export default todos;
