



const FUNCTIONS = {
    '+': increase,
    '-': decrease
}

function Kelvin(temperature,exit){   //esto pasa todo a kelvin
    const multi = {
        'Kelvin' : 1,
        'Celsius': 1,
        'Fahrenheit' : 32*(5/9)
    }
    const sum = {
        'Kelvin' : 0,
        'Celsius': 273.15,
        'Fahrenheit' : 0//estoy en duda aca 
    }
    return temperature*multi[exit]+sum[exit]
}



function Celsius(temperature,exit){   //esto pasa todo a celsius
    const multi = {
        'Kelvin' : 1,
        'Celsius': 1,
        'Fahrenheit' : 32*(5/9)
        }
    const sum = {
        'Kelvin' : 0,
        'Celsius': -273.15,
        'Fahrenheit' : -32*(5/9) //estoy en duda aca 
        }
    return temperature*multi[exit]+sum[exit]
}

function Fahrenheit(temperature,exit){   //esto pasa todo a fahrenheit
    const multi = {
        'Kelvin' : 9/5,
        'Celsius': 9/5,
        'Fahrenheit' : 1
    }
    const sum = {
        'Kelvin' : 32-273.15*(9/5),
        'Celsius': 32,
        'Fahrenheit' : 0//estoy en duda aca 
    }
    return temperature*multi[exit]+sum[exit]
}

const tempExit ={
'Kelvin': Kelvin ,
'Celsius': Celsius ,
'Fahrenheit': Fahrenheit
}


    





function increase(counter){
    return counter + 1
}

function decrease(counter){
    return counter - 1
}

function update(input, model){
    const {counter} = model
    const newCounter = FUNCTIONS[input](counter)
    return {
        ...model,
        counter: newCounter,
        input: input
    }
}

module.exports = {
    update
}