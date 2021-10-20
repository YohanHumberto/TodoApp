import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import NotFount from '../Pages/NotFount'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import HomeTodo from '../Pages/HomeTodo'
import FormTodoPage from '../Pages/FormTodoPage'

function AppRouter() {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />


                <Route exact path='/' component={HomeTodo} />
                <Route exact path='/formtodo' component={FormTodoPage} />
    

                <Route exact path='/404' component={NotFount} />

                <Route path='*'>
                    <Redirect to='/404' />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
