import React, { Fragment, useEffect, useRef, useState } from "react";

const FormTodo = function ({ ChangeFormState, EditTodos, NowEditTodo, FormState, AddTodos }) {

    const [Alert, setAlert] = useState(null);

    const refTitle = useRef();
    const refDescription = useRef();
    const refState = useRef();

    useEffect(() => {
        if(FormState){
            refTitle.current.value = NowEditTodo.title;
            refDescription.current.value = NowEditTodo.description;
            refState.current.value = NowEditTodo.state ? 'Complete' : 'Incomplete';
        }
    }, [FormState, NowEditTodo]);

    const ProcesarFormulario = (e) => {
        e.preventDefault();

        if (refTitle.current.value.trim() === '' || refDescription.current.value.trim() === '') {
            setAlert(true)
            return
        }else{
            setAlert(false)
        }

        const todo = {
            todoId: FormState ? NowEditTodo.todoId : Date.now(),
            title: refTitle.current.value,
            description: refDescription.current.value,
            state: refState.current.value === "Complete" ? true : false,
            userId: NowEditTodo.userId
        }

        if (FormState) {
            refTitle.current.value = '';
            refDescription.current.value = '';
            refState.current.value = 'Incomplete';

            EditTodos(todo);
            ChangeFormState();
        } else {
            refTitle.current.value = '';
            refDescription.current.value = '';
            refState.current.value = 'Incomplete';

            AddTodos(todo);
        }
    }

    const jsxAlert = Alert ? <div className="alert alert-danger mt-2"><strong>Alert!</strong> Debes llenar todos los campos.</div> : '';


return (
    <Fragment>
        <form className="bg-dark text-primary form-group p-3 w-2" style={{ "width": "400px" }}>
            <h1 className="mb-4 text-center">Form Todo</h1>
            <input type="text" className="form-control mb-3" ref={refTitle} placeholder="Title"></input>
            <textarea type="text" className="form-control mb-3" ref={refDescription} placeholder="Description"></textarea>
            <select className="form-control" ref={refState}>
                <option>Incomplete</option>
                <option>Complete</option>
            </select>
            <button className="btn btn-primary form-control ms-0" onClick={ProcesarFormulario}>Agregar</button>
        </form>

        {
                 jsxAlert
        }
    </Fragment>
);
}

export default FormTodo;
