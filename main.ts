#! /usr/bin/env node

import inquirer from "inquirer";

let todos = []
let condition = true;

while(condition)

{
    let todoQuestions = await inquirer.prompt([
        {
            type: "input",
            name: "firstQuestion",
            message: "What would you like to add in your todos?"
        },
        
        {
            type: "confirm",
            name: "secondQuestion",
            message: "Would you like to add more in your todos?",
            default: "true"
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos)

    condition = todoQuestions.secondQuestion;
    
}
