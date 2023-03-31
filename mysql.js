const mysql = require ('mysql')
const { hostname } = require('os')

const conection = mysql.createConnection({
    host:'localhost',
    user:'mauri',
    password:'0000'
    database:'deporte'},
)
conection.connect ((err)=>{
if(err) throw err
console.log('La conexionfuniona')

})

conection.query('SELECT listadeporte from deporte where @deporte=deporte',(err,rows)=>{
    if(err) throw err
    console.log('los deportes son')
    console.log(rows)
})

conection.end()