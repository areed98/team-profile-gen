// Import Intern Constructor
const Intern = require('../lib/Intern');

// Intern test
test("creates intern test", () => {
    const intern = new Intern("Michael", 8, "michaelm@gmail.com", "UCF");

    expect(intern.school).toEqual(expect.any(String));
});

// getSchool test
test("Gets interns school", () => {
    const intern = new Intern("Michael", 8, "michaelm@gmail.com", "UCF");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getRole test
test("gets intern role", () => {
    const intern = new Intern("Michael", 8, "michaelm@gmail.com", "UCF");

    expect(intern.getRole()).toEqual("Intern");
});