import React, { Fragment } from "react";
import CardTodo from "./CardTodo.jsx";


const TodoList = function ({ ActiveEditFormState, todos, DeleteTodo, ChangeStateTodo }) {

    let ListCardTodo = todos?.map(todo => <CardTodo ActiveEditFormState={ActiveEditFormState} todo={todo} DeleteTodo={DeleteTodo} ChangeStateTodo={ChangeStateTodo} key={todo.todoId} />)

    return (
        <Fragment>
            {
                ListCardTodo
            }
        </Fragment>
    );
}

export default TodoList;

