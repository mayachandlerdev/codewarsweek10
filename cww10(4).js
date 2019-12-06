/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(number) {
let type = number;
let a, b, temp = 0;
b = type;
while(type > 0){
    a = type % 10;
    type = parseInt(type/10)
    temp = temp * 10 + a
}
    if(temp === b){
        return true
    }else{
        return false
    }
};
