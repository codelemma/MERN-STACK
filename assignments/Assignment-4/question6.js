/* 
6.Write a function to remove a specific element from an array.
	arr = [1,2,3,4,5];
	remove = 3
	output :- [1,2,4,5]
 */
function remove(arr,x){
    let ind = arr.indexOf(x);
    arr.splice(ind,1);
    return arr;
}

 var arr = [1,2,3,4,5];
 console.log(remove(arr,3));
