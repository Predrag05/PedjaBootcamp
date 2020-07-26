// 39	Izračunati sumu prirodnih brojeva u intervalu od 1 do n čija je cifra jedinica 8.
let x = 1
let n = 18
let suma = 0

for(let i = x; i <= n; i++){
    
    if(i % 10 === 8){
        suma += i
    }
}
console.log(suma)