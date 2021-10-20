const express = require('express');
const routes = express.Router();


//RUTAS DE USUARIOS

routes.post('/', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query(`INSERT INTO user(Name, UserName, Email, Password) VALUES('${req.body.Name}','${req.body.UserName}','${req.body.Email}', '${req.body.Password}')`, (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});

routes.get('/', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query('SELECT * FROM user', (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});

routes.get('/username/:username', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query(`SELECT * FROM user WHERE UserName = "${req.params.username}"`, (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});

routes.put('/', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query(`UPDATE user SET Name = '${req.body.Name}', UserName = '${req.body.UserName}', Email = '${req.body.Email}', Password = '${req.body.Password}' WHERE Id = ${req.body.Id}`, (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query(`DELETE FROM user WHERE Id = ${req.params.id}`, (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});


//RUTAS DE TAREAS

routes.post('/todo', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query(`INSERT INTO tareas(Title, Description, State, UserId) VALUES('${req.body.Title}','${req.body.Description}','${req.body.State}', '${req.body.UserId}')`, (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});

routes.get('/todo/:userId', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query(`SELECT * FROM tareas WHERE UserId = ${req.params.userId}`, (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});

routes.put('/todo', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query(`UPDATE tareas SET Title = '${req.body.Title}', Description = '${req.body.Description}', State = '${req.body.State}', UserId = '${req.body.UserId}' WHERE Id = ${req.body.Id}`, (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});

routes.delete('/todo/:id', (req, res) => {
    req.getConnection((err, conection) => {
        if (err) return res.send(err);

        conection.query(`DELETE FROM tareas WHERE Id = ${req.params.id}`, (err, rows) => {
            if (err) return res.send(err);
            res.json(rows)
        })
    });
});


module.exports = routes;
