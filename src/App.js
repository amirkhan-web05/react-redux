import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from './redux/type';
import TodoApp from './components/TodoApp';

function App() {
  const dispatch = useDispatch();

  const todoApp = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        title: newTodo,
        id: Date.now().toString(),
      },
    });
  };

  const [newTodo, setNewTodo] = useState([]);

  const handlerChangeInput = (event) => setNewTodo(event.target.value);

  const handlerSumbit = (event) => {
    event.preventDefault();

    if (String(newTodo).trim()) {
      setNewTodo('');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handlerSumbit} className="App">
        <input type="text" value={newTodo} onChange={handlerChangeInput} />
        <button onClick={todoApp}>Add Todo</button>
      </form>
      <TodoApp />
    </div>
  );
}

export default App;
