/*
 Write a JS Function to validate Email Address
Must contains @
Must ends with .com/.org/.edu
 */
function validateMail(x){
    if(typeof(x) ==='string'){
        if(x.match("([a-z0-9]+)\@gmail([.]{1}\\w{3})")){
            console.log("Valid Mail");
        }
        else{
            console.log("Please enter the correct Mail");
        }
    }
    else{
        console.log("Please enter the correct Format");
    }
}
validateMail("oiuyt76r@gmail.oip");
/* OUTPUT 
Valid Mail
 */
