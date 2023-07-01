/*
1.Write a JavaScript program to display the current day and time in the following format.
Today is : wednesday.
Current time is : 10 PM : 30 : 38
 */
var d = new Date(); 
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var curday =day[d.getDay()];
console.log("Today is : "+curday);
var d = new Date();
var currTime = d.getHours();
// console.log("Current Time is : "+currTime+" : "+ d.getMinutes()+ " : "+ d.getSeconds());
if(currTime<=12){
    currTime = currTime + " " + "AM";
    if(currTime<10){
        currTime = "0"+currTime;
    }
}
else{
    currTime = parseInt(currTime) - 12;
    currTime = currTime + " " + "PM";
}
console.log("Current Time is : "+currTime+" : "+ d.getMinutes()+ " : "+ d.getSeconds());
/*
OUTPUT :
Today is : Saturday
Current Time is : 7 AM : 11 : 35
 */
