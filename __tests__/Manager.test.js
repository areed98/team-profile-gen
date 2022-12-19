// import Manager Constructor
const Manager = require('../lib/Manager');

// Manager test
test("creates manager test", () => {
    const manager = new Manager("Jack", 2, "jackjack@gmail.com", 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole() test
test("gets manager role", () => {
    const manager = new Manager("Jack", 2, "jackjack@gmail.com", 1);

    expect(manager.getRole()).toEqual("Manager");
});