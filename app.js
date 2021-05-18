/*
For this laboratory, 
the example shown by the teacher in class was used as a basis,
so in view.js they are very similar
link: https://github.com/ICC3103-202110/counter_app_example
*/
const {initModel} = require('./model')
const {update} = require('./update')
const {allView,inputForm,listForm,inputTempConvert} = require('./view')
const {printTable} = require('console-table-printer')
model=initModel
/*
app I did it recurrent because 
I wanted it to be different
 from what was shown in classes

*/
async function app(model){
    console.clear() //For some reason the console.clear goes crazy
    const {title,table}=allView(model)
    console.log(title)
    printTable(table)
    const {posi} = await inputForm(model)
    const {tempConvert} = await inputTempConvert()
    const {inputTemp} = await listForm("From ?",'inputTemp')
    const {outputTemp} = await listForm("To ?",'outputTemp')
    model=update(inputTemp,outputTemp,tempConvert, model,posi)
    //console.clear()
   // console.log('hola')
    app(model)
}




app(model)
