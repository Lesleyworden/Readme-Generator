const inquirer = require('inquirer');
const fs = require('fs');
const { format } = require('path');

// array of questions for user
const questions = 
[
    {
        type:'input',
        message:'What is the title of this app?',
        name:'title'
    },
    {
        type:'input',
        message:'What is the app for?',
        name:'for'
    },
    {
        type:'input',
        message:'How do you use this app?',
        name:'use'
    },
    {
        type:'input',
        message:'How do you install this app?',
        name:'install'
    },
    {
        type:'input',
        message:'How do you report issues?',
        name:'report'
    },
    {
        type:'input',
        message:'How does one make contributions?',
        name:'contributions'
    }
];

// function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(`./${fileName}`, data, function () {
        console.log("File write successful.");
    });
}

// Function to initialize program
function init() 
{
    inquirer.prompt(questions).then(function (response)
    {
        formatReadMe(response);
    });
}

function formatReadMe (data)
{
    const readMeText = 
`# ${data.title}
## This app is used for:
${data.for}
## How to use this app:
${data.use}
## How to install this app:
${data.install}
## How to report issues:
${data.report}
## Contribute by:
${data.contributions}
`;

    writeToFile('DEV_README.md', readMeText);
}

// function call to initialize program
init();