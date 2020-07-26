// 38	Izračunati sumu prirodnih brojeva u intervalu od k do n koji su djeljivi sa a.
let k = 1
let n = 56
let suma = 0
let a = 5
for(let i = k; i <= n; i++){
    if(i % a === 0){
        suma += i    
    }
}
console.log(suma)