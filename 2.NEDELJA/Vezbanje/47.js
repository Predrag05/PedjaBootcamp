// 47	Napisati program za ispis proizvoda brojeva od 1 do n koji su djeljivi sa 3 i sa 4.
let x = 1
let n = 50
let suma = 1
for(let i = x; i <= n; i++){
    if(i % 3 === 0 && i % 4 === 0){
        suma *= i
    }
}
console.log(suma)