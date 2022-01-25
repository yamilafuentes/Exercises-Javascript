/* 
In this little assignment you are given a string of space separated numbers, and have to return 
the highest and lowest number.
*/


function highAndLow(numbers){
  let numMax = numbers[1]
  for (num in numbers) {
    if (num > numMax) {
      numMax = num
    } else {
      numMax = numMax
    }
  }
  let numMin = numbers[1] 
  for (num in numbers) {
    if (num < numMin) {
      numMin = num
    } else {
      numMin = numMin
    }
  }
  return (numMax, numMin)
}


/* 
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
*/