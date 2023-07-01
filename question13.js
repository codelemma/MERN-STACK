/*
 3.Given two strings, return true if they are anagrams of one another

For example: Mary is an anagram of Army
 */
function Compare(str1,str2){
    var length1 = str1.length;
    var length2 = str2.length;
    if(length1 != length2){
        return false;
    }
    else{
        var firstStr = str1.toLowerCase().split("").sort().join();
        var secstr = str2.toLowerCase().split("").sort().join();;
        // console.log(firstStr);
        // console.log(secstr);
            if(firstStr===secstr){
            return true;
        }
        else{
            return false;
        }
      }
}
console.log(Compare("mart", "army"));