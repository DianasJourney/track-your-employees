const inquirer = require('inquirer');
const db = require('./db/connection');

// connecting db to server after it starts
db.connect(err => {
  if (err) throw err
  console.log('Database connected.')
  all_employees()
});

//function to prompt the inquirer 
let all_employees = function () {
  inquirer
    .prompt([
      {
        // Begin Command Line
        type: 'list',
        name: 'prompt',
        message: 'Select what you want to do.',
        choices: [
          'View All Department',
          'View All Roles',
          'View All Employees',
          'Add a Department',
          'Add a Role',
          'Add an Employee',
          'Update Employee',
          'Quit'
        ]
      }