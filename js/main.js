
// task 1

function removeZeros(nums) {
    let originalLen = nums.length
    let nonZero = nums.filter(Boolean)
    return [...nonZero,...new Array(originalLen-nonZero.length).fill(0)]
 }
 
 console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))

//  task 2

const arr = [true, false, true, false, true];
const count = arr.filter(Boolean).length;

console.log(count);

// task 3


function SummPositive( numbers ) {
    var negatives = [];
    var sum = 0;
  
    for(var i = 0; i < numbers.length; i++) {
      if(numbers[i] < 0) {
        negatives.push(numbers[i]);
      }else{
        sum += numbers[i];
      }
    }
  
    console.log(negatives);
  
    return sum;
  }
  
  var sum_result = SummPositive( [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10,-52 ] );
  
  console.log(sum_result);


//   task 4

var myArray = [
    {"ID": 1, "Price": 200},
    {"ID": 2, "Price": 1000},
    {"ID": 3, "CPriceost": 50},
    {"ID": 4, "Price": 500}
]

var lowest = Number.POSITIVE_INFINITY;
var highest = Number.NEGATIVE_INFINITY;
var tmp;
for (var i=myArray.length-1; i>=0; i--) {
    tmp = myArray[i].Cost;
    if (tmp < lowest) lowest = tmp;
    if (tmp > highest) highest = tmp;
}
console.log(highest, lowest);