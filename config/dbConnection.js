const mysql = require('mysql')
const { HOST, USER, PASSWORD, DATABASE } = require('./config')

console.log(HOST)
console.log(USER)
console.log(PASSWORD)
console.log(DATABASE)

module.exports = () => {
    return mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE
    })
}