// imports employee
const Employee = require("./Employee");
// manager class declaration
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //return office number
    officeNumber() {
        return this.officeNumber;
    }

    //return manager role
    getRole() {
        return "Manager";
    }
}
// exports class
module.exports = Manager;