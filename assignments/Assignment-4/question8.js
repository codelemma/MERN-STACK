/*
8.Write a function to rotate an array by a given number of steps to the right.

ex:- arr = [1,2,3,4,5];
		step = 2;

 output = [5,4,1,2,3]

 */

var arr = [1,2,3,4,5];
function StepRotate(arr,steps) {
    var n = arr.length;
    for(var i=0;i<steps;i++){
        var temp = arr[n-i-1];
        arr[n-i-1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log(StepRotate(arr,2));
