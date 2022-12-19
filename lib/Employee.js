// employee class declaration
class Employee {
    // constructor for employee
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    // return employee name
    getName() {
        return this.name;
    }

    // return employee id
    getId() {
        return this.id;
    }

    // return employee email
    getEmail() {
        return this.email;
    }

    //return role of employee
    getRole() {
        return "Employee";
    }
}

// export role
module.exports = Employee