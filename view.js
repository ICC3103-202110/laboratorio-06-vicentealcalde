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
            leftValue: left ,
            leftUnit: leftUnity ,
            rightValue: right , 
            rightUnit: rightUnity},
    ]
}

function inputForm(){
    const message = 'Left temperature is source? (Yes/No)'
    return inquirer.prompt([
        {
            name: 'posi',
            type: 'input',
            message: message,
            validate: function(value){
                if(value === "Yes" || value === "No"){
                    return true
                } else {
                    return 'Enter Yes or No'
                }
            }
        }
    ])
}

function inputTempConvert(){
    const message = 'Temperature value to convert ?'
    return inquirer.prompt([
        {
            name: 'tempConvert',
            type: 'input',
            message: message,
            validate: function(value){
                if(isNaN(value)){
                    return 'Enter a number'
                } else {
                    return true
                }
            }
        }
    ])
}

function listForm(message,name){
    const choices = [
        'Kelvin',
        'Celsius',
        'Fahrenheit']
    return inquirer.prompt({
        name: name,
        type: 'list',
        message: message,
        choices: choices
    })
}

// Get actual console view
function allView(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    allView, 
    inputForm,
    listForm,
    inputTempConvert
}

