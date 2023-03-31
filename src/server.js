const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host:'localhost',
    user:'mauri',
    password:'0000'
    database:'deporte'},
)
conection.connect ((err)=>{
if(err) throw err
console.log('La conexionfuniona')

})
conection.query('INSERT IN TO deporte listadeporte VALUES deporte, distania on deportes update deporte=deporte listadeporte=deporte',(err,rows)=>{
    if(err) throw err
    console.log('los deportes son')
    console.log(rows)
})
module.exports= connection;0