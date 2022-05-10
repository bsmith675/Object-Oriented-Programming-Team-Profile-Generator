const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./utils/generateHTML.js');

const html = './dist/index.html';

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const teamInfo = [];

function writeTeamInfo(fileName, data){
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('')
    );
};

function writeManager(fileName, data){
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Manager Added')
    );
};

function writeEngineer(fileName, data){
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Engineer Added!')
    );
};

function writeIntern(fileName, data){
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Intern Added!')
    );
};

function appendEndHTML(fileName, data){
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Finished Creating HTML')
    );
};

const managerQuestions = [
    {
        type: "input",
        message: "What is the Managers Name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "what is the Managers ID?",
        name: "managerId",
    },
    {
        type: "input",
        message: "What is the Managers Email Address?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "what is the Managers Office number?",
        name: "managerOffice",
    },
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the Engineers Name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is the Engineers ID?",
        name: "engineerId,"
    },
    {
        type: "input",
        message: "What is the Engineers Email Address?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the Engineers GitHub name?",
        name: "engineerGithub",
    },
];

const internQuestion = [
    {
        type: "input",
        message: "What is the Interns Name?",
        name: "internName",
    },
    {
        type: "input",
        message: "What is the Interns ID?",
        name: "internId",
    },
    {
        type: "input",
        message: "What is the Interns Email Address?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "What is the Interns School name?",
        name: "internSchool",
    },
];