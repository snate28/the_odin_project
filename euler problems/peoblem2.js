var a = 1;
var b = 2;
var c = 0;
var even=0;


while(a<4000000){
    if(a%2===0){
        even+=a;
    }
    
     c=a+b;
     a = b;
     
     b=c;
     
     
    
}
console.log(c);
console.log(even);