/*
1. Find Occurance of a target value in given array;
arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
target = 19;
*/
/*
1. Find Occurance of a target value in given array;
arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
target = 19;
 */

arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
var occurances = arr.filter(e=>e==19).length;
console.log(occurances);
/*
OUTPUT:
3
 */

