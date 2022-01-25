/* 

In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

*/

function alphabetPosition(text) {
  let newArray = ""
  let largoString = 0
  let newText = text.toLowerCase()

  const abc = 
    {
      "a" : 1,
      "b" : 2,
      "c" : 3,
      "d" : 4,
      "e" : 5,
      "f" : 6,
      "g" : 7,
      "h" : 8,
      "i" : 9,
      "j" : 10,
      "k" : 11,
      "l" : 12,
      "m" : 13,
      "n" : 14,
      "o" : 15,
      "p" : 16,
      "q" : 17,
      "r" : 18,
      "s" : 19,
      "t" : 20,
      "u" : 21,
      "v" : 22,
      "w" : 23,
      "x" : 24,
      "y" : 25,
      "z" : 26,
    }


  for (let ind in newText){
    largoString = ind
    newText = newText.replace(newText[ind], abc[newText[ind]] === undefined ? '' : newText[ind])
  }

  largoString = parseInt(largoString) + 1

  for (let i in newText) {
    newArray += abc[newText[parseInt(i)]] + ((newText[parseInt(i)]) !== undefined && (newText[parseInt(i) + 1]) === undefined ? "": " ")
    console.log("1ro",parseInt(i) !== undefined)
    console.log("2do", parseInt(i) + 1 === undefined)
    console.log( parseInt(i) + 2)
    console.log((parseInt(i)) !== undefined && (parseInt(i) + 1) === undefined)
  }

console.log(`a${newArray}a`)

  return newArray
}

console.log(alphabetPosition("The narwhal bacons at midnight."))


/* thenarwhalbaconsatmidnight  26 */
