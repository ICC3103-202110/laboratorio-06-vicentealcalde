const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {left,right,leftUnity,rightUnity} = model
    return [
        {
            leftValue: left , leftUnit: leftUnity , rightValue: right , rightUnit: rightUnity},
    ]
}

function inputForm(model){
    const {input} = model
    const message = 'Increase or decrease?'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input,
            validate: function(value){
                if(value === '+' || value === '-'){
                    return true
                } else {
                    return 'Enter + or -'
                }
            }
        }
    ])
}

function listForm(model,message){
    const choices = [
        'Kelvin',
        'Celsius',
        'Fahrenheit']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        choices: choices
    })
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    listForm
}