//5. WAP to find out if 1st January will be a
// Sunday between 2000 and 2030

var d = new Date();
var count = 0;
for(var i=2000; i<=2030; i++){
    // var str = "01-01-"+i;
    // console.log(str);
    var d = new Date("01-01-"+i);
    var day = d.getDay();
    // console.log(day);
    if(day==0){
        count += 1;
    }
}
console.log("The number of years having sunday on 1st jan is : "+count);
