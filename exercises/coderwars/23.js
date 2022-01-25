/* 
Count characters in your string
The main idea is to count all the occurring characters in a string. If you have a string like aba, then 
the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/


function count (string) {  
  if (string === "") {
    return {}
  }

  let caracteres = {}
  for (let i in string) {   
    if (string[i] !== string[parseInt(i) + 1] ) {
      caracteres[string[i]]  = 0
    }
  }

  for (let i in string) {
    caracteres[string[i]] += 1
  } 
  return caracteres 
}



function count (string) {  
  if (string === "")
    return {}

  const caracteres = {}
  for (let i in string)
      caracteres[string[i]] = caracteres[string[i]] === undefined ? 1 : caracteres[string[i]] + 1

  return caracteres 
}





console.log("Respuesta: ",count("aba"))