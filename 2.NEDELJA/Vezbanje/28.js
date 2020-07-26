// 28	Napisati program za ispis sume reciprocnih vrijednosti prvih n prirodnih brojeva (harmonijski niz: 1 + 1/2 + 1/3 + ... + 1/n)
let x = 1
let n = 25
let suma = 0
for(let i = x; i <= n; i++){
    console.log(i)
    let j = i / i / i
    console.log(j)
    suma += j
    console.log(suma)
}
console.log(suma)