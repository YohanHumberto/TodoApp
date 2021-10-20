import React, { Fragment, useContext } from 'react';
import { Redirect } from 'react-router';
import FormTodo from '../Components/FormTodo.jsx';
import NavBar from '../Components/NavBar.jsx';
import { DataContext } from '../Context/DataContext.js';

function FormTodoPage() {

    const { user, AddTodos, EditTodos, FormState, NowEditTodo, ChangeFormState } = useContext(DataContext);

    const Contenido = user ? < div className="mt-5 mx-0 row justify-content-center"><FormTodo ChangeFormState={ChangeFormState} EditTodos={EditTodos} NowEditTodo={NowEditTodo} FormState={FormState} AddTodos={AddTodos} /></div > : <Redirect to="" />;

    return (
        <Fragment>
            <NavBar />
            {
                Contenido
            }
        </Fragment>
    );
}

export default FormTodoPage
