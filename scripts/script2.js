const http = require('http');
const qs = require('querystring');
const mysql = require('mysql');
const port = 3000;

const server = http.createServer((req, res) => {
	if (req.method==='POST' && req.ulr==='/submit') {
		const body = '';
		req.on('data', chunk => {
			body += chunk.toString();
		});
		req.on('end', () => {
			const name = qs.parse(body).name;
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
				});
			}

			conexion.end((err) => {
			if (err) {
				alert('error con finalizacion de sesion con bd');
				return;
			} 
			console.log('sesion terminada correctamente');
		});
		const answer_p = 'Se ingreso correctamente';
		if (!flag) answer_p = 'El elemento ya existe en la base de datos';
		alert(answer_p);
		res.send(answer_p);
		});
	}
});
server.listen(port, () => {
	console.log('Server ejecutando en el puerto: ', port);
})
