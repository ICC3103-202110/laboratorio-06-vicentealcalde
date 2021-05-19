
function Kelvin(temperature,exit){   //this all happens to kelvin
    const multi = {
        'Kelvin' : 1,
        'Celsius': 1,
        'Fahrenheit' : (5/9)
    }
    const sum = {
        'Kelvin' : 0,
        'Celsius': 273.15,
        'Fahrenheit' : 273.15-32*(5/9)
    }
    return temperature*multi[exit]+sum[exit]
}

function Celsius(temperature,exit){   //this all goes to celsius
    const multi = {
        'Kelvin' : 1,
        'Celsius': 1,
        'Fahrenheit' : (5/9)
        }
    const sum = {
        'Kelvin' :-273.15,
        'Celsius': 0,
        'Fahrenheit' : -32*(5/9) 
        }
    return temperature*multi[exit]+sum[exit]
}

function Fahrenheit(temperature,exit){   //this all goes to fahrenheit
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


    
function update(inputTemp,outputTemp,temp, model,posi){
    const newTemp=  tempExit[outputTemp](temp,inputTemp)
    if( posi === 'Yes'){
    return {
        ...model,
        left: temp,
        leftUnity: inputTemp,
        right: newTemp,
        rightUnity: outputTemp

    }}
    else{
        return {
            ...model,
            left: newTemp,
            leftUnity: outputTemp,
            right: temp,
            rightUnity: inputTemp

    }
}}

module.exports = {
    update
}