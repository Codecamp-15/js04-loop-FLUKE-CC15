let a = +prompt('input')
let count = 0;
let sum =0;
if (a <0) n=-n;
 while(a){
    let remain =a % 10;
    
    a = (a-remain)/10;
    sum += remain;
    
    count++;
 }console.log(sum);