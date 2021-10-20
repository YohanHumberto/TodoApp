import React, { useContext } from 'react'
import TodoApp from '../Components/TodoApp'
import NavBar from '../Components/NavBar'
import { DataContext } from '../Context/DataContext';
import { Redirect } from 'react-router';

function HomeTodo() {

    const { user } = useContext(DataContext);


    return (
        <div>
            {
                user ?
                    <>
                        <NavBar />
                        <TodoApp />
                    </>

                    : <Redirect to="/login" />
            }
        </div>
    )
}

export default HomeTodo
