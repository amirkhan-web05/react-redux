import { ADD_TODO, REMOVE_TODO } from '../type';

const initialState = {
  todo: [],
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todo: state.todo.concat([action.payload]) };
    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todos) => todos.id !== action.payload),
      };
    default:
      return state;
  }
};
