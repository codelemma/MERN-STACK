/* Write a JS Function to validate Phone Number 
Only number and must be 10 digit long
1. number should be of 10 digits
2. number cannot have any special chars
3. number should be differernt 
 */
function validateNum(x=0){
    if(typeof(x) ==='number'){
        var a = x+"";
        if(a.match("[+]?[0-9]{10,12}")){
            console.log("Valid number");
        }
        else{
            console.log("Please enter the correct number");
        }
    }
    else{
        console.log("Please enter in correct format");
    }
}
validateNum(+919265238945);
/*
OUTPUT
Valid number
 */
