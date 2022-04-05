function switchCase(letter){
    var animal ="";
    switch(letter) {
        case "a":
           console.log("antelope");
        break;
        case "b":
            console.log("bird");
        break;
        case "c":
            console.log("cat");
        break;
        default:
            console.log("stuff");
        break; 
    }
    return animal;
}

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));
module.exports =switchCase;