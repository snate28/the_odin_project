
var result = 0;
var limit = 1000;
for(var i = 0; i<limit; i+=1){
    if(i%3===0 || i%5===0){
        mult+=i;
    }
}
console.log(result);
