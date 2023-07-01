/*
3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
Count of vowels in string;
ex:- str = "brainmentors"   [+]?[0-9]{10,12}
	output: count = 4
 */
function isVowel(aplbt){
    if(aplbt.match("^[aeyiuo]+$")){
        return true;
    }
}
var str ="brainmentors";
var arr = str.split("");
let count = 0;
for(var i=0;i<arr.length;i++){
    if(isVowel(arr[i])){
        count++;
    }
}
console.log(count);
