// import inquirer and fs
const inquirer = require('inquirer');
const fs = require("fs");

// link to template
const template = require('./src/template');

// import constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Global employee array
const employeeArrary = [];

const createManager = () => {

    console.log(`
    -----------------------------
    Fill out the manager position
    -----------------------------
    `);
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the manager",
            validate: (managerName) => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "Please input the manager's ID.",
            validate: (managerID) => {
                if (isNaN(managerID)) {
                    console.log("Please enter a number for the manager's ID.");
                    return false;
                } else {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email.",
            validate: (emailInput) => {
                valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter an email.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's office number.",
            validate: (officeInput) => {
                if (isNaN(officeInput)) {
                    console.log("Please enter an office number!");
                    return false;
                } else {
                    return true;
                }
            },
        },
    ])
    .then((managerInput) => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        employeeArrary.push(manager);
        console.log(manager);
    });
};

//employee array
const createEmployee = () => {
    console.log(`
    --------------------------------
    Fill out your employee positions
    --------------------------------
    `);

    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Please choose one of the following:",
                choices: ["Engineer", "Intern"],
            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
                validate: (employeeName) => {
                    if (employeeName) {
                        return true;
                    } else {
                        console.log('Please enter a name to continue.');
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the employee's ID.",
                validate: (employeeID) => {
                    if (isNaN(employeeID)) {
                        console.log("Please enter a valid ID.");
                    } else {
                        return true;
                    }
                },
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the employee's email.",
                validate: (email) => {
                    valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a proper email");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the employee's github username",
                when: (input) => input.role === "Engineer",
                validate: (githubCheck) => {
                    if (githubCheck) {
                        return true;
                    } else {
                        console.log("Please enter a github username.");
                    }
                },
            },
            {
                type: "input",
                name: "school",
                message: "Does this employee attend school?",
                when: (input) => input.role === "Intern",
                validate: (schoolCheck) => {
                    if (schoolCheck) {
                        return true;
                    } else {
                        console.log("Please enter the school that the intern is attending.");
                    }
                },
            },
            {
                type: "confirm",
                name: "confirmEmployee",
                message: "Would you like to add more employees?",
                default: false,
            },
        ])
        .then((employeeData) => {
            let { name, id, email, role, github, school, confirmEmployee } = employeeData;
            let employees;

            if (role === "Engineer") {
                employees = new Engineer(name, id, email, github);
                console.log(employees);
            } else if (role === "Intern") {
                employees = new Intern(name, id, email, school);
                console.log(employees);
            }

            employeeArrary.push(employees);

            if (confirmEmployee) {
                return createEmployee(employeeArrary);
            } else {
                return employeeArrary;
            }
        });
};

// write file
const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Employees set Correctly.");
        }
    });
};

createManager()
    .then(createEmployee)
    .then((employeeArrary) => {
        return template(employeeArrary);
    })
    .then((pages) => {
        return writeFile(pages);
    })
    .catch((err) => {
        console.log(err);
    });