import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_TODO } from '../redux/type';

const TodoApp = () => {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  if (!state.length) {
    return <p>Enter Todo</p>;
  }

  const removeTodo = (id) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });
  };

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {state &&
          state.map((posts, index) => {
            return (
              <div
                className="todo__inner"
                key={index}
                style={{ display: 'flex', border: '1px solid #ccc' }}
              >
                <li className="todo__list">{posts.title}</li>
                {posts.title.length ? (
                  <button
                    onClick={() => removeTodo(posts.id)}
                    style={{ marginLeft: '20px', cursor: 'pointer' }}
                  >
                    &times;
                  </button>
                ) : (
                  ''
                )}
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoApp;
