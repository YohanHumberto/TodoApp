import React, { Fragment, useEffect, useState } from "react";
import './styleCard.css';

const CardTodo = function ({ ActiveEditFormState, todo, DeleteTodo, ChangeStateTodo }) {

    const [checkboxState, setCheckboxState] = useState(todo.state);

    useEffect(() => {
        setCheckboxState(todo.state);
    }, [todo.state]);

    return (
        <Fragment>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2 my-2">
                <div className={todo.state ? 'state-text bg-info' : 'm-2 bg-light'}>
                    <div className="title">
                        <input type="checkbox" id="checkboxState" onChange={() => setCheckboxState(todo.state)} onClick={() => ChangeStateTodo(todo)} checked={checkboxState} />
                        <h2>{todo.title}</h2>
                    </div>
                    <hr></hr>
                    <p>{todo.description}</p>
                    <hr></hr>
                    <div className="title">
                        <button className="btn btn-warning" onClick={() => ActiveEditFormState(todo)}>Editar</button>
                        <button className="btn btn-danger" onClick={() => DeleteTodo(todo.todoId)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CardTodo;