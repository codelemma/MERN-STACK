/*
15. Write a function to find the maximum and minimum elements in an array.
arr = [10,3,15,-1,9,6]

output = maxno. : 15
 */
function MinMaxval(arr){
    var length = arr.length;
    var max = arr[0];
    var min = arr[0];
    for(var i=0;i<length;i++){
        if(arr[i] > max){
            max = arr[i]; 
        }
        else if(arr[i]< min){
            min = arr[i];
        }
    }
    console.log("Maximum Number is : "+ max);
    console.log("Minimum Number is : "+ min);
}
array = [19,24,46,1,-17,98];
MinMaxval(array);
/*
 Output:
Maximum Number is : 98
Minimum Number is : -17
 */