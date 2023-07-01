/*
2 . Create a function Named Triangle which takes 3 parameters, say A, B and C denoting 
the 3 sides of a triangle.
Use Callback function,create a method to check if the triangle is Equilateral or not.
Output:
"true" if the triangle is equilateral and "false" if its not.

 */
function disp(something){
    console.log(something);
}
// disp is a called a callback function.
//disp() is passed to CheckEquilateral() as an argument.
function CheckEquilateral(x,y,z,disp){
    if(x==y && y==z){
        var isEquilateral = true;
    }
    disp(isEquilateral);
 }
 CheckEquilateral(5,5,5,disp);