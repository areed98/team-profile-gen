// import employee
const Employee = require("./Employee");
// create intern class
class Intern extends Employee {
    //construct class
    constructor(name, id, email, school) {
        //take these from Employee
        super(name, id, email);
        //grab school
        this.school = school;
    }
    //return school
    getSchool() {
        return this.school;
    }
    //return role
    getRole() {
        return "Intern";
    }
}
// export class
module.exports = Intern;