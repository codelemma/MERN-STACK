/*4.WAP to rotate the string ‘brainmentors in the right direction. 
This is done by periodically removing one letter from the 
string end and attaching it to the front.
input  = brainmentors
output = sbrainmentor
*/

var str = "Abhishek";
// var first = str.slice(0,1);
function rotateString(string,number = 0){
    var first = str.slice(0,number);
    // var n = number % str.length;
    str = str.slice( number) + first;
    return str;
}
rotateString(str,1);
console.log(str);

