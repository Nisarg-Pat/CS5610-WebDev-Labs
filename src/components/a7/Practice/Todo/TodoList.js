import React from "react";
import TodoItem from "./TodoItem";
import todos from "./todos.json";


const TodoList = () => {
    return(
        <ul>
            {todos.map((todo, key) => {
            return(<TodoItem todo={todo} key = {key}/>);
        })
    }
        </ul>
    );
}
export default TodoList;


