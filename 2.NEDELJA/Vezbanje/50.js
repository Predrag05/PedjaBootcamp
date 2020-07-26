// 50	Napisati program za ispis proizvoda brojeva od 1 do n čija je cifra jedinica 3.
let x = 1
let n = 35
let suma = 1

for(let i = x; i <= n; i++){
    if(i % 10 === 3){
        console.log(i)
        suma *= i
    }
}
console.log(suma)