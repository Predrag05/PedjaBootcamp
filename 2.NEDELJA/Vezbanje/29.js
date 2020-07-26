// 29	Izračunati i ispisati sumu reciprocnih vrijednosti prirodnih brojeva od k do n.
let k = 3
let n = 25
let suma = 0
for(let i = k; i <= n; i++){
    console.log(i)
    let j = i / i / i
    console.log(j)
    suma += j
    console.log(suma)
}
console.log(suma)