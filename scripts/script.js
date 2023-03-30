const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/index.html');
});

app.post('/connect', (req, res) => {
	const name = req.body.name;

	const conexion = mysql.createConnection({
		host: 'localhost',
		user: 'exp', 
		password: 'gato',
		database: 'ejemplo'
	});
	conexion.connect((err) => {
		if (err) {
			console.log('error', err);
			return;
		}
	});
	console.log('conexion realizada en: ', conexion.threadID);

	const query='SELECT * FROM Deporte WHERE Nombre = (?)';
	const flag = false;
	conexion.query(query, [name], (err, results, fields) => {
		if (err) flag = false;
		else {
			flag = results.length==0;
		}
	});
	if (flag) {
		query = 'INSERT INTO Deporte (Nombre) VALUES (?)';
		conexion.query(query, [name], (err, results) => {
			if (err) return;
				console.log('inserto correctamente');
		});
	}

	conexion.end((err) => {
		if (err) {
			console.log('error con finalizacion de sesion con bd');
			return;
		} 
		console.log('sesion terminada correctamente');
	});
	const answer_p = 'Se ingreso correctamente';
	if (!flag) answer_p = 'El elemento ya existe en la base de datos';
	res.send(answer_p);
});
app.listen(port, () => {
	console.log('el servidor esta escuchando sobre el puerto 3000');
});