// 52	Izračunati proizvod parnih brojeva od A do B.
let A = 5
let B = 10
let suma = 1
for(let i = A; i <= B; i++){
    if(i % 2 === 0)
    suma *= i
}
console.log(suma)