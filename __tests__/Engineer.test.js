// Import engineer Constructor
const Engineer = require('../lib/Engineer');

// creates engineer test
test("creates engineer test", () => {
    const engineer = new Engineer(
        "Austin",
        "3",
        "austin@gmail.com",
        "areed98"
    );
    //expecting github name to be a string
    expect(engineer.github).toEqual(expect.any(String));
});

// getGithub() test
test("get employee github", () => {
    const engineer = new Engineer(
        "Austin",
        "3",
        "austin@gmail.com",
        "areed98"
    );

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// get engineer role
test("get role of engineer", () => {
    const engineer = new Engineer(
        "Austin",
        "3",
        "austin@gmail.com",
        "areed98"
    );

    expect(engineer.getRole()).toEqual("Engineer");
});