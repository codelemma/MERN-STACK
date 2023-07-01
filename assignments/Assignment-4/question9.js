/*
9.Write a function to find the intersection of two arrays (common elements between the two arrays).

ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

output = [1,4,7]
fruits.includes("Mango");
</script>
 */
var arr1 = [2,4,1,7,4,2]; 
var arr2 = [5,1,4,7,3,1];
function Intersection(arr1,arr2){
    var intersectVal = [];
    for(var i = 0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            if(!(intersectVal.includes(arr1[i]))){
                intersectVal.push(arr1[i]);
            }
        }
    }
    return intersectVal;
}
console.log(Intersection(arr1,arr2));
