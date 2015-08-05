function kek(input){
    var a = input;
    var prime = 0;
    var div = 2;
    while(a>1){
    while(a%div===0){
        prime = a;
        a = a/div;
    }
    div++;
}
    return prime
}
var input = 600851475143;
console.log(kek(input));