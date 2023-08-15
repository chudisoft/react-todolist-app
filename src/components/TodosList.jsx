import React from 'react'
import TodoItem from "./TodoItem";

// ...
const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem
            setUpdate={setUpdate}
            key={todo.id}
            itemProp={todo}
            handleChange={handleChange}
            delTodo={delTodo}
          />
        ))}
      </ul>
    );
  };
  export default TodosList;
  