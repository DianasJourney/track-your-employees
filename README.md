## Employee Tracking

### Overview
Employee tracking is a database that allows employers in the current field to access info and change info inside the database. Employers can update roles, delete roles, and add roles as well as being able to view certain list of categories. This is a great application to keep track of sensitive information.

### Table Of Contents
- [Installation](#installation)
- [Tests](#tests)
- [UserStory](#userstory)
- [AcceptanceCriteria](#acceptancecriteria)
- [Questions](#questions)
- [License](#license)


## Installation
The following technologies needed will be:
1. Vscode
2. Node.js
3. Package.json
4. inquirer
5. dotenv
6. mysql2

## Tests
When using this application users will need to run the command `node server.js` this will then prompt a series of list and users will be able to select and view what they choose. Demonstration of the application is presented below for further guidance.

[Employee Tracker Demo.webm](https://user-images.githubusercontent.com/109758045/197096173-47743ce1-33d1-491a-a375-d6ee012241b9.webm)


## UserStory
---
- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business
---

## AcceptanceCriteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Questions?
### Feel free to contact me
- Github: https://github.com/DianasJourney
- Email: diana.vu@hotmail.com

## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

https://choosealicense.com/licenses/mit/
