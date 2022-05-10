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