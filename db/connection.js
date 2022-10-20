//requires the sql package to connect sql 
const mysql = require('mysql2')

const db = mysql.createConnection({
  // user info for sql
  host: 'localhost',
  user: 'root',
  password: '061419StevenH',
  database: 'all_employees_db'
})
//exports db 
module.exports = db
