import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
// other imported components here
const TodosLogic = () => {
    const [todos, setTodos] = useState(getInitialTodos());

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
    }, [todos]);
    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    }
    const addTodoItem = (title) => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const handleChange = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };
    const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            }),
        ]);
    };
    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.title = updatedTitle;
                }
                return todo;
            })
        );
    };

    return (
        <div className='container'>
            <h1>Todos</h1>
            <InputTodo addTodoItem={addTodoItem} />
            <TodosList
                todosProps={todos}
                handleChange={handleChange}
                delTodo={delTodo}
                setUpdate={setUpdate}
            />
        </div>
    );
};
export default TodosLogic;
