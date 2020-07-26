// 36	Izračunati sumu prirodnih brojeva u intervalu od 1 do n koji su djeljivi sa 7 i sa 3.
let x = 1
let n = 500
let suma = 0
for(let i = x; i <= n; i++){
    if(i % 3 === 0 && i % 7 === 0){
        suma += i
    }
}
console.log(suma)