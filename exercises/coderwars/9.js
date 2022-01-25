/* 
Sum of Digits / Digital Root
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this 
way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

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

function digital_root(n) {
  
  while (largo(n) >= 1){
    let sumaDigitos = 0

    console.log("suma antes if", sumaDigitos)
    console.log("largo n", largo(n))
    console.log("largo n === 1", largo(n) === 1 )


    if (largo(n) === 1) {
      console.log("suma despues if", sumaDigitos)
      return n
    }

    console.log("n antes for", n)
    
    for (let i = 0; i < largo(n); i++) {      
      sumaDigitos += parseInt(n[i])
    } 
    console.log("n despues for", n)
    n = sumaDigitos
  } 
}



console.log(digital_root(942))

/* no funciona todavia */