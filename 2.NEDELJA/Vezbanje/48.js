// 48	Napisati program za ispis proizvoda brojeva od 1 do n koji su djeljivi sa a.
let x = 1
let n = 35
let suma = 1
let a = 5
for(let i = x; i <= n; i++){
    if(i % a === 0){
        suma *= i
    }
}
console.log(suma)