/*
10.Write a function to remove duplicate elements from an array while preserving
the original order.
	ex:- arr = [1,2,5,2,5,1,6,7,7]

		output:- [1,2,5,6,7]
 */
 var arr = [1,2,5,2,5,1,1,1,1,3,3,3,4,4,4,7,7,7,0,0,9,9,6,7,7];
 function duplicate(arr){
    var n = arr.length;
    var newArr = [];
    for(var i = 0;i<n;i++){
        if(!(newArr.includes(arr[i]))){
            newArr.push(arr[i]);
        }
    }
    return newArr;
 }
 console.log(duplicate(arr));
