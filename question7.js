/** 
 * Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : ‘learn javascript from brain mentors’
Expected Output : ‘Learn Javascript From Brain Mentors
 */
function properFormat(x){
    if(typeof(x)==="string"){
     var a = "";
     var b = "";
     var properform=0;
        a = x.split(" ");
        for(var i=0;i<a.length;i++)
        {
            b = b + (a[i].slice(0,1)).toUpperCase() + (a[i].slice(1)).toLowerCase()+" ";
            // properform = properform +" "+ b;
            // console.log(b+" ");
        }
        console.log(b);
    }
    else{
        console.log(0);
    }
}
properFormat("hE iS vErY gOOd cOdEr ");
/* 

OUTPUT
He Is Very Good Coder  
 */


