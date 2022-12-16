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
    return inquirer
    .createPromptModule([
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