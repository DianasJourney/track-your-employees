const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');


// connecting db to server after it starts
db.connect(err => {
  if (err) throw err
  console.log('You are now connected to the database!')
  console.log(`
    ╔═══╗─────╔╗──────────────╔═╗╔═╗
    ║╔══╝─────║║──────────────║║╚╝║║
    ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
    ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
    ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
    ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
    ───────║║──────╔═╝║─────────────────────╔═╝║
    ───────╚╝──────╚══╝─────────────────────╚══╝`)
  all_employees()
});

//function to prompt the inquirer 
let all_employees = function () {
  inquirer
    .prompt([
      {
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
        ])
    .then(answers => {
      // this will allow us to view the tables in the department
      if (answers.prompt === 'View All Department') {
        db.query(`SELECT * FROM department`, (err, result) => {
          if (err) throw err
          console.log('Viewing All Departments: ')
          console.table(result)
          all_employees()
        })
      
