import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import FormRegister from '../Components/FormRegister'
import { DataContext } from '../Context/DataContext';

function Register() {

    const { user } = useContext(DataContext);

    return (
        <div>
            { !user ? <FormRegister /> : <Redirect to="/" />}
        </div>
    )
}

export default Register
