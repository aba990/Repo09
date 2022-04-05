function isLess(a, b,){
    if( a < b){
    return true;
} else {
    return false;
}
}
isLess(10, 15);
isLess(15, 10);
console.log(true);
console.log(false);
module.exports = isLess;