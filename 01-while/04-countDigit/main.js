let a = +prompt("input")
// if (a === null || a.trim() === '' || isNaN(a)) { alert('Invalid number') }
// else {
//     alert(a.length);
// }
let count = 0;
while(a >=1 ){
    console.log(a)
    count++;
    a = a /10 ;
}
console.log(count);