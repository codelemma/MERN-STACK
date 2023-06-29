/*
 Write a JS Function to find the occurrence of each character in JS
Input : “brain mentors”
O/P : 
b 1
r 2
A 1
I 1
N 2
M 1
E 1
T 1
O 1
S 1
 */
function occurrences(str){
    var counted = [];
    if(typeof(str)=="string"){
        for(var i=0;i<str.length;i++){
            var a = str[i];
            if(a==" "){
                continue;
            }
            var count=0;
            for(var j=0;j<str.length;j++){
                if(a == str[j]){
                    count+=1;
                }
            }
            if(!(counted.includes(str[i]))){
            console.log(str[i]+" "+count);
            }
            counted[i] = str[i];
            // console.log(counted[i]);
        }
    }
    else{
        console.log("Please enter in correct(string) format");
    }
}
occurrences("brain mentors");

/**
 OUTPUT
b 1
r 2
a 1
i 1
n 2
m 1
e 1
t 1
o 1
s 1
 */
