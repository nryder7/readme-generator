var fs = require("fs");
var inquirer = require("inquirer");

const questions = [
            {
                type: "input",
                message: "What is your project name?",
                name: "projectname"
            },
            {
                type: "input",
                message: "Please write a short description of your project",
                name: "description"
            },
            {
                type: "input",
                message: "What command should be run to install dependencies?",
                name: "dependencies"
            },
            {
                type: "input",
                message: "What command should be run to run tests?",
                name: "test"
            },
            {
                type: "input",
                message: "What does the user need to know about using the repo?",
                name: "usage"
            },
            {
                type: "input",
                message: "What does the user need to know about contributing to the repo?",
                name: "contributing"
            },
            {
                type: "list",
                message: "What kind of license should your project have?",
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
                name: "license"
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "username"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            }
        ];


inquirer.prompt(questions)
.then(function (answers) {
        fs.writeFile("README.md", "# " + answers.projectname + "\n" +
        "## Description" + "\n" +
        answers.description + "\n" +
        "## Table of Contents \n" +
        "* [Installation](#installation)" + "\n" +
        "* [Tests](#tests)" + "\n" +
        "* [Usage](#usage)" + "\n" +
        "* [License](#license)" + "\n" +
        "* [Contributing](#contributing)" + "\n" +
        "* [Questions](#questions)" + "\n" +
        "## Installation \n" +
        answers.dependencies + "\n" +
        "## Tests \n" +
        answers.test + "\n" +
        "## Usage \n" +
        answers.usage + "\n" +
        "## Contributing \n" +
        answers.contributing + "\n" +
        "## License \n" +
        answers.license + "\n" +
        "## Questions \n" +
        "Please direct your questions to " +
        answers.username + " by sending an email to " + answers.email, 
        function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
});





  