function myForLoop1(){
var evenNumbers;
for (evenNumbers = 0; evenNumbers < 10; evenNumbers += 2) {
  console.log(evenNumbers);
}
}
function myForLoop2(){
    var evenInverseNumbers;
    for(evenInverseNumbers > 10; evenInverseNumbers = 0; evenInverseNumbers += 2) {
        console.log(evenInverseNumbers);
    }
}
//console.log(myForLoop1());
console.log(myForLoop2());
module.exports = myForLoop2;