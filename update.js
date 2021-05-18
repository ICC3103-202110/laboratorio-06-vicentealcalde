
function Kelvin(temperature,exit){   //esto pasa todo a kelvin
    const multi = {
        'Kelvin' : 1,
        'Celsius': 1,
        'Fahrenheit' : 32*(5/9)
    }
    const sum = {
        'Kelvin' : 0,
        'Celsius': 273.15,
        'Fahrenheit' : 273.15-32*(5/9)//estoy en duda aca 
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
        'Kelvin' :-273.15,
        'Celsius': 0,
        'Fahrenheit' : -32*(5/9) 
        }
        console.log ("hola")
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
        'Fahrenheit' : 0
    }
    return temperature*multi[exit]+sum[exit]
}

const tempExit ={
'Kelvin': Kelvin ,
'Celsius': Celsius ,
'Fahrenheit': Fahrenheit
}


    
function update(inputTemp,outputTemp,temp, model){
    const newTemp= tempExit[outputTemp](temp,inputTemp)
    return {
        ...model,
        left: temp,
        leftUnity: inputTemp,
        right: newTemp,
        rightUnity: outputTemp

    }
}

module.exports = {
    update
}