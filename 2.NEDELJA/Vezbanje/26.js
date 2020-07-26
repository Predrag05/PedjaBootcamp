// 26	Izračunati i ispisati sumu kvadrata prvih n prirodnih brojeva.
let n = 25
let suma = 0
for(let i = 1; i <= 25; i++){
    
    suma += Math.pow(i,2)
    
}
console.log(suma)