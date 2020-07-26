// 23	Saberi parne prirodne brojeve do 100.
let x = 0
let n = 100
let suma = 0
for(let i = x; i < n; i++){
    if(i % 2 === 0){
        suma += i
    }
}
console.log(suma)