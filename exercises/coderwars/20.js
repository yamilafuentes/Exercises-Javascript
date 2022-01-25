/* 
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/


function IncreaseLetter(str) {
  let newString = ""
  let accountant = 1

  for(let i in str) {
    newString += (str[i].toUpperCase() + str[i].repeat(accountant - 1) + (str[parseInt(i) + 1] === undefined ? "" : "-"))
    accountant += 1 
  }
  return newString
}


console.log('Respuesta:', IncreaseLetter("abcd"))
