//Create employee profiles
const createProfile = (employees) => {
    //create manager profile
    const createManagerCard = (manager) => {
        return `
            <div class="card employee">
                <div class="cardHeader text-center manager">
                    <h3 class="cardTitle">${manager.getName()}</h2>
                    <h4 class="cardTitle">Title: ${manager.getRole()}</h4>
                </div>
                <div class="cardBody">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" target="${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `;
    };
    //create engineer card
    const createEngineerCard = (engineer) => {
        return `
            <div class="card employee">
                <div class="cardHeader text-center engineer">
                    <h3 class="cardTitle">${engineer.getName()}</h3>
                    <h4 class="cardTitle">Title: ${engineer.getRole()}</h4>
                </div>
                <div class="cardBody">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" target="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        `;
    };
    //create intern card
    const createInternCard = (intern) => {
        return `
            <div class="card employee">
                <div class="cardHeader text-center intern">
                    <h3 class="cardTitle">${intern.getName()}</h3>
                    <h4 class="cardTitle">Title: ${intern.getRole()}</h4>
                </div>
                <div class="cardBody">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" target="${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };
    // set htmlpage array
    const htmlPage = [];
    // push manager to htmlpage
    htmlPage.push(
        employees
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => createManagerCard(manager))
    );
    // push engineer to htmlpage
    htmlPage.push(
        employees
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => createEngineerCard(engineer))
            .join("")
    );
    //push intern to htmlpage
    htmlPage.push(
        employees
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => createInternCard(intern))
            .join("")
    );

    return htmlPage.join("");
}



//export function to create html page
module.exports = (employees) => {
    return `
    <!DOCTYPE htmlPage>
    <htmlPage lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <!-- Stylesheets linked -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <!-- Simple Header -->
        <header class="navbar">
            <h1 class="text-center w-100">Team Profile</h1>
        </header>
        <main>
            <div class="container">
                <div class="justify-content-center" id="employeeCards">
                    <!-- Employee Cards go here -->
                    ${createProfile(employees)}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </htmlPage>
    `;
};