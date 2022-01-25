/* 
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be 
separated by an ampersand.
Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/


function list(names){
  let newString = ""

  if (names.lenght === 0) {
    return []
  }
  
  for (let i in names) {
    newString += names[i].name + (names[i] !== undefined && names[parseInt(i) + 1] && names[parseInt(i) + 2] === undefined ? " & " : names[parseInt(i) + 1] === undefined ? "" : ", " ) 
  }
  return newString
}


console.log('Respuesta:', list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
