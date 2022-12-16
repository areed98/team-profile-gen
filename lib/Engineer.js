// imports employee
const Employee = require("./Employee");
// class declaration
class Engineer extends Employee {
    //constructor
    constructor(name, id, email, github) {
        //uses the employee constructor for the following
        super(name, id, email);

        this.github = github;
    }
    // returns the employees github name
    getGithub() {
        return this.github;
    }
    // returns the engineer role
    getRole() {
        return "Engineer";
    }
}
// exports class
module.exports = Engineer;