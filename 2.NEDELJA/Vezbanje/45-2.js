// 45_2	Proizvod parnih od prvih n prirodnih brojeva.
let x = 1
let y = 100
let count = 5
let suma = 1
for(let i = x; i <= y; i++){
    
    if(i % 2 === 0){
        suma *= i
        count--
    if(count <= 0){
            break
        }
    }
}
console.log(suma)