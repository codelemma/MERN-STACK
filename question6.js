/** 
 * Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

E.g num = 2914
O/p Even Place (9+4)
Odd Place 2+1
 */

function printSum(x=0){
    var evenSum = 0;
    var oddSum = 0;
    if(x){
        a = x.toString();
        for(var i=0;i<a.length;i++) {
            if(i%2==0){
                oddSum = oddSum + parseInt(a[i]);
            }
            else{
                 evenSum = evenSum + parseInt(a[i]);
            }
        }
        console.log("Even sum is : "+ evenSum +"\n"+"Odd sum is : "+ oddSum);
    }
    else{
        console.log("0");
    }
}
printSum(1234568);
/* OUTPUT
Even sum is : 12
Odd sum is : 17
 */
