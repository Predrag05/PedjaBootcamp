// 30_3	Suma parnih prirodnih brojeva od 1 do 5.
let x = 1
let n = 5
let suma = 0
for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        suma += i
    }
}
console.log(suma)