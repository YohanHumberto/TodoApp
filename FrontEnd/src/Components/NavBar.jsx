import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../Context/DataContext'

function NavBar() {

    const history = useHistory();
    const { ChangeUser, user } = useContext(DataContext);

    return (
        <div className="navbar bg-dark">
            <h1 className="nav-link active h1-xxl h2-xl h2-lg h3-md h4-sm h6 text-light text-uppercase">{user?.UserName}</h1>

            <div>
                <NavLink className="h1-xxl h2-xl h2-lg h3-md h4-sm h6 mx-lg-3" to="/">TodoList</NavLink>
                <NavLink className="h1-xxl h2-xl h2-lg h3-md h4-sm h6 mx-lg-3" to="/formtodo">FormTodo</NavLink>
                <button className="btn btn-danger px-lg-5" onClick={() => ChangeUser(null)} >Logout</button>
            </div>
        </div>
    )
}

export default NavBar
