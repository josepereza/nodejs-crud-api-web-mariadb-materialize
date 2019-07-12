const express = require("express");

const router = express.Router();
const mariadb = require('mariadb');
var db = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'seq_db'
})

const pool = mariadb.createPool({ host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'seq_db' });

exports.listado = (req, res) => {
    db.then(conn => {
        conn.query("select * from Usuarios")
            .then(rows => {
                res.render('listado', {rows});

            })
    })
};

exports.buscar = (req, res) => {
    busqueda = req.params.busqueda;
    busqueda = '%' + busqueda + '%';
    db.then(conn => {
        conn.query("select * from Usuarios where nombre like ?", [busqueda])
            .then(rows => {
                res.render('listado', {rows});


            })
    })
};

