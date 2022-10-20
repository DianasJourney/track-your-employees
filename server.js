const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');

// connecting db to server after it starts
db.connect(err => {
  if (err) throw err
  console.log('You are now connected to the database!')
  console.log('Welcome to all employee tracker!')
  all_employees()
});

let all_employees = function () {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: [
          'View All Department',
          'View All Roles',
          'View All Employees',
          'Add A Department',
          'Add A Role',
          'Add An Employee',
          'Update An Employee Role',
          'Quit'
        ]
      }
    ])
   