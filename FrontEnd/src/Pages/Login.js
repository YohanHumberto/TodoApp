import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import FormLogin from '../Components/FormLogin'
import { DataContext } from '../Context/DataContext'

function Login() {
    const { user } = useContext(DataContext);

    return (
        <div>
            { !user ? <FormLogin /> : <Redirect to="/"/> }
        </div>
    )
}

export default Login
