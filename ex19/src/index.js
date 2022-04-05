function myDoWhile () {
     MyNumbers = "";
     var i = 0;
    do {  
        i--;
        (i === 9) ? myNumbers -=i : myNumbers -=i + ",";
     } while (i < 9);
      
    return myNumbers;
} 

console.log(myDoWhile());