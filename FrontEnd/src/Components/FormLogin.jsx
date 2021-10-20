import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../Context/DataContext";

const FormLogin = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [Alert, setAlert] = useState(false);

    const { ChangeUser } = useContext(DataContext);
    const history = useHistory();

    const ValidarForm = async (e) => {
        e.preventDefault();

        let User = null;

        await fetch(`http://localhost:3001/username/${userName}`)
            .then(res => res.json())
            .then(data => {
                User = data[0];
            }).catch((e) => console.log(e))

        if (User !== null) {
            if (userName === User.UserName && password === User.Password) {
                setAlert(false);
                ChangeUser(User);
                history.push('/');
            } else {
                setAlert(true);
            }
        } else {
            console.log('datos is null')
        }
    }

    const jsxAlert = Alert ? <div className="alert alert-danger mt-2"><strong>Alert!</strong>UserName or Password is Incorrect.</div> : '';


    return (
        <Fragment>
            <div className="container-md bg-dark text-primary p-3 shadow " style={{ "width": "400px", "height": "300px", "marginTop": "120px" }}>
                <form>
                    <h1 className="mb-4 text-center">LOGIN</h1>
                    <input className="form-control mb-3" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="UserName"></input>
                    <input className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"></input>
                    <button onClick={ValidarForm} className="btn btn-primary" style={{ "marginLeft": "120px" }}>Iniciar Seccion</button>
                    <p><a href="#ada" onClick={() => history.push('/register')}>Registrate</a></p>
                </form>
                {
                    jsxAlert
                }
            </div>
        </Fragment>
    );
}

export default FormLogin;
