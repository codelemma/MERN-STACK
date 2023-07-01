/*

1.Write a function calculate that takes three arugments from the user, say num1 , num2,
 and operation(1==add, 2==subtract, 3==multiply, 4==divide ).
 Don`t use switch statement or if else statements
1.add,
2.subtract,
3.multiply,
4.divide 
write the calc function for all the operations
 */
function calc(x,y,op) {
    function add(x,y){
        return (parseInt(x)+parseInt(y));
    }
    function sub(x,y){
        return (parseInt(x)-parseInt(y));
    }
    function mul(x,y){
        return (parseInt(x)*parseInt(y));
    }
    function div(x,y){
        return (parseInt(x)/parseInt(y));
    }
    opearation = {1:add,2:sub,3:mul,4:div};
    console.log(opearation[op](x,y))
}
calc(10,20,1);







