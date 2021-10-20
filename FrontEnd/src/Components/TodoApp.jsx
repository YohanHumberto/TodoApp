import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import TodoList from "./TodoList";


function TodoApp() {

    const { Todos, DeleteTodo, ChangeStateTodo, ActiveEditFormState } = useContext(DataContext);

    return (
        <div className="mt-5 mx-2 row">
                <TodoList ActiveEditFormState={ActiveEditFormState} todos={Todos} DeleteTodo={DeleteTodo} ChangeStateTodo={ChangeStateTodo} />
        </div>
    );
}

export default TodoApp;

