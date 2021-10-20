import { useState } from "react";

const useTodos = () => {

    const [userId, setUserId] = useState(null);
    const [Todos, setTodos] = useState([]);
    const [render, setRender] = useState(true);

    const LoadTodos = (user) => {
        if (user) {
            setUserId(user.Id)
            const DataDB = [];

            fetch(`http://localhost:3001/todo/${user?.Id}`)
                .then(res => res.json())
                .then(data => {
                    data?.forEach(item => {
                        DataDB.push({
                            todoId: item.Id,
                            title: item.Title,
                            description: item.Description,
                            state: item.State === 1 ? true : false,
                            userId: item.UserId
                        });
                    });
                    setTodos(DataDB);
                }).catch(e => console.log(e))
        }
    }

    const AddTodos = (todo) => {

        fetch('http://localhost:3001/todo', {
            method: 'POST',
            body: JSON.stringify({
                Title: todo.title,
                Description: todo.description,
                State: todo.state ? 1 : 2,
                UserId: userId
            }),
            headers: { "Content-Type": "application/json" }
        })

        setTodos([...Todos, todo]);
    }

    const EditTodos = (todo) => {

        fetch('http://localhost:3001/todo', {
            method: 'PUT',
            body: JSON.stringify({
                Id: todo.todoId,
                Title: todo.title,
                Description: todo.description,
                State: todo.state ? 1 : 2,
                UserId: userId
            }),
            headers: { "Content-Type": "application/json" }
        })

        const index = Todos.findIndex((item) => item.todoId === todo.todoId)
        const ChangedTodos = Todos;
        ChangedTodos.splice(index, 1, todo);
        setTodos(ChangedTodos);
    }

    const DeleteTodo = (todoId) => {

        fetch(`http://localhost:3001/todo/${todoId}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })

        const ChangedTodos = Todos.filter(iten => iten.todoId !== todoId);
        setTodos(ChangedTodos);
    }

    const ChangeStateTodo = (todo) => {

        fetch('http://localhost:3001/todo', {
            method: 'PUT',
            body: JSON.stringify({
                Id: todo.todoId,
                Title: todo.title,
                Description: todo.description,
                State: todo.state ? 2 : 1,
                UserId: userId
            }),
            headers: { "Content-Type": "application/json" }
        })

        const ChangedTodo = {
            todoId: todo.todoId,
            title: todo.title,
            description: todo.description,
            state: todo.state ? false : true,
            userId: userId
        };

        const index = Todos.findIndex((item) => item.todoId === todo.todoId)

        const ChangedTodos = Todos;

        ChangedTodos.splice(index, 1, ChangedTodo);

        setRender(!render);
        setTodos(ChangedTodos);
    }

    return (
        {
            Todos,
            AddTodos,
            EditTodos,
            DeleteTodo,
            ChangeStateTodo,
            LoadTodos
        }
    );
}

export default useTodos;