/* 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
without any elements with the same value next to each other and preserving the original order of elements.
For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = (iterable) => {
  let newString = []

  if (iterable == null || iterable.length === 0) {
    return []
  }
  newString.push(iterable[0])
  
  for (const letter in iterable) {
    
    if (iterable[letter] !== iterable[parseInt(letter)+1] && iterable[parseInt(letter) + 1] !== undefined) {
      newString.push(iterable[parseInt(letter) + 1])
    } 
  }
  return newString  
}


console.log('Respuesta:', uniqueInOrder('AAAABBBCCDAABBB'))


