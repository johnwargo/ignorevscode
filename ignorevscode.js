#!/usr/bin/env node

//@ts-check

/******************************************************************
 * Ignore Visual Studio Code
 * 
 * by John M. Wargo
 * 
 * Node module that updates the current folder's .gitignore file
 * with the internal files Visual Studio Code uses.
 ******************************************************************/

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const rn = "\r\n"

//The following is the list of files we want to add to the .gitignore file 
const entries = [".code-workspace", ".vscode/"];

//build a complete path to the .gitignore file
let filePath = path.join(__dirname, ".gitignore");
//Tell the user which file we're upating
console.log(chalk.green("File:"), filePath);
//Check to see if the.gitignore file exists
fs.access(filePath, fs.constants.W_OK, (err) => {
    if (err) {
        console.log(chalk.red("Error:"), "File does not exist");
        process.exit(1);
    } else {
        //OK, the file is there and we can write to it
        console.log(chalk.green("Status:"), 'File exists and is writable');
        //Read the file into an array of values, splitting off the carriage return and line 
        //feed characters 
        var gitFile = fs.readFileSync(filePath).toString().split(rn);
        var fileChanged = false;
        //For each entry in entries, see if its in the array
        entries.forEach(function(item) {
            //Is the item in the array?
            if (gitFile.indexOf(item) < 0) {
                //No? Then add it to the array
                console.log(chalk.green("Adding:"), item);
                gitFile.push(item);
                fileChanged = true;
            } else {
                //Otherwise we're skipping it
                console.log(chalk.yellow("Skipping:"), item);
            }
        });

        //did we make any changes to the file?
        if (fileChanged) {
            //write the file back out to disk
            fs.writeFile(filePath, gitFile.join(rn), (err) => {
                if (err) {
                    console.error(chalk.red("Unable to write file"));
                    throw err;
                }
                console.log(chalk.green("Result: "), "File saved!");
            });
        } else {
            console.log(chalk.green("Result: "), "No changes made to file");
        }
    }
});