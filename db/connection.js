const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '061419StevenH',
  database: 'all_employees_db'
})

module.exports = db
