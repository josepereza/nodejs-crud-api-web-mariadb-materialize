# nodejs-hbs-materialize
plantilla basica con nodejs- handelbars (hbs) y materialize 1.0.0 (completo) y api crud
con mysql con mariadb-connector-nodejs.
- Hay dos formas de acceso:
  * Una como api mediante: myip:3000/api/(listado|crear|modificar|borrar|buscar).
  * Otra como web mediante: myip:3000/users/(listado|buscar).

Funcionamiento basico:
```ruby
mysql>CREATE DATABASE seq_db;
$ git clone https://github.com/josepereza/nodejs-crud-api-web-mariadb-materialize.git
$ cd nodejs-crud-api-web-mariadb-materialize
$mysql -u root -p seq_db < db.sql
//Tenemos que modificar los datos de acceso a mysql en:controllers/apicrud.js  y controllers/listado.js
$ npm install
$ npm start
```

Este proyecto lo hemos creado utiliando express-generator:

```ruby
$ npm install -g express-generator
$ express --hbs miapp
$ cd miapp
$ npm install


```
