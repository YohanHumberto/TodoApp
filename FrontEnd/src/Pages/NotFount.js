import React, { Fragment } from 'react'
import { useHistory } from 'react-router'
function NotFount() {

    const history = useHistory();

    return (
        <Fragment>
            <div className="navbar bg-dark text-primary p-3">
                <h1>Welcome</h1>
                <div>
                    <button className="btn btn-outline-primary btn-lg" onClick={() => history.push('/login')}>Iniciar Seccion</button>
                    <button className="btn btn-outline-primary btn-lg" onClick={() => history.push('/register')}>Registrate</button>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="text-primary text-dark text-center mt-5 fs-1 fw-bold">ERROR 404 PAGE <br /> NOT FOUNT</h1>
            </div>
        </Fragment>
    )
}

export default NotFount
