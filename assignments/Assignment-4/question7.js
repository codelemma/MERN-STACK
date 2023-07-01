/*
 7. Write a function to find the second largest number in an array.

ex:- var arr = [12,4,6,9,2,15,3,9];
		
		output second largest : 12
 */
var arr = [12,4,6,9,2,15,3,13];
function SecLargest(arr){
    var max1 = arr[0],max2 = arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i]<max1){
            if(arr[i]>max2){
                max2 = arr[i];
            }
        }
    }
    return max2;
}
console.log(SecLargest(arr));
