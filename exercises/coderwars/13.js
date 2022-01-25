/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {
  if (input == null || input.length === 0) {
    return []
  }

  let positive = 0
  let negative = 0

  for (let num in input) {
    if (input[num] > 0) {           
      positive = positive + 1  
      console.log(positive)
    }
    if (input[num] < 0) {
      negative = negative + input[num]
      console.log(negative)
    }
  }
  return [positive, negative] 
}

console.log('res:', countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) )
