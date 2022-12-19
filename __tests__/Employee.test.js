// Import employee constructor
const Employee = require('../lib/Employee.js');

// Test to see if employee constructor creates a working object
test("create employee object", () => {
    const employee = new Employee("James", 4, "jamesjames@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getName() test
test("get employee name", () => {
    const employee = new Employee("James", 4, "jamesjames@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

// getId() test
test("get employee ID", () => {
    const employee = new Employee("James", 4, "jamesjames@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

// getEmail() test
test("get employee email", () => {
    const employee = new Employee("James", 4, "jamesjames@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// getRole() test
test("get employee role", () => {
    const employee = new Employee("James", 4, "jamesjames@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
});