import React, { Fragment, useState } from "react";
import { useHistory } from "react-router";

const FormRegister = () => {

    const [Alert, setAlert] = useState({ state: false, message: '' });

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirnPassword, setConfirnPassword] = useState('');

    const history = useHistory();


    const AddUser = () => {

        const object = {
            method: 'POST',
            body: JSON.stringify({
                Name: name,
                UserName: userName,
                Email: email,
                Password: password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        };

        fetch('http://localhost:3001/', object)
            .then(data => {
                console.log(data)
            }).catch((e) => console.log(e))
    }

    const ValidarForm = (e) => {
        e.preventDefault();

        if (name !== '' && userName !== '' && email !== '' && password !== '' && confirnPassword !== '') {
            if (password === confirnPassword) {

                setAlert({ state: false })
                AddUser();

                setName('');
                setUserName('');
                setEmail('');
                setPassword('');
                setConfirnPassword('');

            } else {
                setAlert({ state: true, message: 'Las contraseñas no coniciden.' })
            }
        } else {
            setAlert({ state: true, message: 'Debe llenar todos los campos.' });
        }

    }

    const jsxAlert = Alert.state ? <div className="alert alert-danger mt-4"><strong>Alert! </strong>{Alert.message}.</div> : '';


    return (
        <Fragment>
            <div className="container pt-2 bg-dark text-primary" style={{ "width": "400px", "height": "460px", "marginTop": "120px" }}>
                <form style={{height: '450px'}}>
                    <h1 className="mb-4 text-center">REGISTRO</h1>
                    <input className="form-control mb-3 mt-5" value={name} onChange={(e) => setName(e.target.value.trim())} type="text" placeholder="Name"></input>
                    <input className="form-control mb-3" value={userName} onChange={(e) => setUserName(e.target.value.trim())} type="text" placeholder="UserName"></input>
                    <input className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value.trim())} type="text" placeholder="Email"></input>
                    <input className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value.trim())} type="password" placeholder="Password"></input>
                    <input className="form-control mb-3" value={confirnPassword} onChange={(e) => setConfirnPassword(e.target.value.trim())} type="password" placeholder="Confirn Password"></input>
                    <button onClick={ValidarForm} className="btn btn-primary" style={{ "marginLeft": "120px" }}>Iniciar Seccion</button>
                    <p style={{ height: '10px', minHeight: '10px' }}><a href="#ada" onClick={() => history.push('/login')}>Login</a></p>
                </form>
                {
                    jsxAlert
                }
            </div>
        </Fragment>
    );
}

export default FormRegister;
