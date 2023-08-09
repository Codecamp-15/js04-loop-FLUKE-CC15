
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
for (let a = 1; a <= 100; a++) {
    b += a; 
    if (a % 2 === 0) 
        { 
            c += a;
            e += a**2;
        }
    if(a % 2 !== 0)
        {
            d += a;
            
        }
    if(a % 3 === 0)
        {
            f += a**2;
        }
       // console.log(a);
}

console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(e-f);