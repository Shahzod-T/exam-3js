
// task 1

function removeZeros(nums) {
    let originalLen = nums.length
    let nonZero = nums.filter(Boolean)
    return [...nonZero,...new Array(originalLen-nonZero.length).fill(0)]
 }
 
 console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))

//  task 2


function countTrue (arry) {
    var count=0
    for (i=0; i<arry.length; i++){
        if(arry[i]===true)
        count++;
    }
    console.log(count);
}
countTrue([true,true,true,false]);

// task 3




var number =[1,2,0,-1,-2,3,4]


function array(){
    var newArray = 0

    for( var num of number ){
        newArray += num
       
        
        
    }

    return newArray
}

console.log(array(number));


//   task 4

var apr = [
    {name: "Ali", price: 200},
    {name: "Umid", price: 800},
    {name: "Sardor", price: 400},
]
 function addMax() {
   var max = 0
     for (var item in apr) {
       if (apr[item].price > apr[max].price) {
         max = item
         }
       }
   console.log(apr[max].name)
 }
 addMax(apr)