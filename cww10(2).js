//Given an integral number, determine if it's a square number

var isSquare = function(num1){
    return num1 >= 0 && Math.sqrt(num1) % 1 === 0; 
   }