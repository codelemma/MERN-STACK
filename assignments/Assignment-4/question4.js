/*
4.Write a function to find the sum of all elements in an array.
ex:- arr = [1,2,3,4,5];
 */
arr = [1,2,3,4,5];
function sum(arr){
    return (arr.reduce((acc,e)=>acc+e,0));
}
console.log(sum(arr));
// console.log(arr.reduce((acc,e)=>acc+e));
