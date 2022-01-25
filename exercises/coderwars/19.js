/* 
Regex Password Validation

You need to write regex that will validate a password to make sure it meets the following criteria:
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/

function largo(cadena){
  let largoCadena = 0
  cadena = cadena.toString()

  for (let i in cadena) {
    largoCadena = i
  }
  largoCadena = parseInt(largoCadena) + 1
  return largoCadena
}


function validate(password) {
  if (largo(password) < 6){
    return false
  }
  
  let mayuscula = false
  let numero = false
  let minuscula = false

  for (let i in password){
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      mayuscula = true
    }  
  }
  for (let j in password){
    if (password.charCodeAt(j) >= 48 && password.charCodeAt(j) <= 57 ) {
      numero = true
    } 
  }
  for (let l in password){
    if (password.charCodeAt(l) >= 97 && password.charCodeAt(l) <= 122) {
      minuscula = true
    } 
  } 

  if (mayuscula && numero && minuscula === undefined){
    return false
  }

  return mayuscula && numero && minuscula
  
}


console.log(validate("abcA5f"))

/* password.charCodeAt(i) */

/* no funciona todavia */
