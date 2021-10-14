const Addition = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}

const Subtraction = (num1, num2) => {
    return parseInt(num1)- parseInt(num2) 
}

const times = (num1, num2) => {
    return parseInt(num1) * parseInt(num2) 
}

const divided = (num1, num2) => {
    return parseInt(num1)/ parseInt(num2) 
}

alert ("¿Que operacion desea realizar?")
let math_operations = prompt ("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division")

if (math_operations == 1) {
    let number1 = prompt("Primer numero para sumar")
    let number2 = prompt("Segundo numero para sumar")
    result = Addition(number1, number2)
    alert (`Tu resultado es ${result}`)

} 

else if (math_operations == 2) {
    let number1 = prompt("Primer numero para restar")
    let number2 = prompt("Segundo numero para restar")
    result = Subtraction(number1, number2)
    alert (`Tu resultado es ${result}`)

} 

else if (math_operations == 3) {
    let number1 = prompt("Primer numero para multiplicar")
    let number2 = prompt("Segundo numero para multiplicar")
    result = times(number1, number2)
    alert (`Tu resultado es ${result}`)

} 

else if (math_operations == 3) {
    let number1 = prompt("Primer numero para dividir")
    let number2 = prompt("Segundo numero para dividir")
    result = divided(number1, number2)
    alert (`Tu resultado es ${result}`)

} 