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
                message: "What command should be used to install dependencies?",
                name: "dependencies"
            },
            {
                type: "input",
                message: "What command should be used to run tests?",
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
                choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
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


inquirer
.prompt(questions)
.then(function (answers) {
        fs.writeFile("READMEexample1.md", "# " + answers.projectname + "\n" +
        "![LICENSE BADGE](https://img.shields.io/badge/LICENSE-" + answers.license +"-BLUE)" + "\n" +
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
        "Run the following command to install dependencies:" + "\n" +
        "```" + "\n" +
        answers.dependencies + "\n" +
        "```"+ "\n" +
        "## Tests \n" +
        "Run the following command for testing:" + "\n" +
        "```" + "\n" +
        answers.test + "\n" +
        "```" + "\n" +
        "## Usage \n" +
        answers.usage + "\n" +
        "## Contributing \n" +
        answers.contributing + "\n" +
        "## Questions \n" +
        "Please send any questions to " + answers.email  + ". " +
        "You can find more of my work at " + "[" + answers.username + "](https://github.com/" + answers.username + ")" + "\n" +
        "## License \n" +
        answers.license + "\n",
        function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
});





  