import { createContext, useEffect, useState } from "react";
import useFormState from "../Hooks/useFormState";
import useTodos from "../Hooks/useTodos";

const DataContext = createContext();

function TodoDataContext({ children }) {

    const localUser = JSON.parse(localStorage.getItem('userTodo')) || null;
    const [user, setUser] = useState(localUser);
    const { Todos, AddTodos, EditTodos, DeleteTodo, ChangeStateTodo, LoadTodos } = useTodos();
    const { FormState, NowEditTodo, ChangeFormState, ActiveEditFormState } = useFormState();

    useEffect(() => {
        if (user) {
            LoadTodos(user);
        }
    }, [LoadTodos, user])

    const ChangeUser = (userParam) => {
        localStorage.setItem('userTodo', JSON.stringify(userParam));
        setUser(userParam);
        LoadTodos(userParam);
    }

    const Data = {
        Todos,
        AddTodos,
        EditTodos,
        DeleteTodo,
        ChangeStateTodo,
        FormState,
        NowEditTodo,
        ChangeFormState,
        ActiveEditFormState,
        user,
        ChangeUser,
        LoadTodos
    }

    return (
        <DataContext.Provider value={Data}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext }
export default TodoDataContext


