/*
2.Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */
var d = new Date();
var month = d.getMonth();
var year = d.getFullYear();
var date = d.getDate();
month = parseInt(month) + 1;
if(month < 10){
    month= "0" + month;
}
if(date < 10){
    date = "0"+date;
}
console.log("mm-dd-yyyy :"+month +"-"+ date +"-"+ year);
console.log("mm/dd/yyyy :"+month +"/"+ date +"/"+ year);
console.log("dd-mm-yyyy :"+date +"-"+ month +"-"+ year);
console.log("dd/mm/yyyy :"+date +"/"+ month +"/"+ year);