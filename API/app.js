const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const cors = require('cors');
const myconnection = require('express-myconnection')

const port = process.env.PORT || 3001;
const routes = require('./routes')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConnectionObject = {
    port: '3306',
    host: '127.0.0.1',
    database: 'bd_fullstack',
    user: 'root',
    password: ''
}

app.use(myconnection(mysql, dbConnectionObject, 'single'))


app.use('/', routes)

//PUERTO
app.listen(port, () => {
    console.log("Server Running in port: " + port);
});


