/* 
5.Write a function to reverse the order of elements in an array.
don't Use reverse() Method 
ex:- var arr = ['a','b','c','d','e','f']
			
		output = ['f','e','d','c','b','a']
 */
    var arr = ['a','b','c','d','e','f'];
    function reverse(arr) {
        var n = arr.length;
        for(var i=0;i<(n/2);i++){
            var temp = arr[n-i-1];
            arr[n-i-1] = arr[i];
            arr[i] = temp;
            // console.log(temp);
        }
        return arr;
    }
    console.log(reverse(arr));
