// 45_6	Izračunati proizvod prirodnih brojeva u intervalu od 1 do n koji su djeljivi sa 3.
let x = 1
let y = 50
let count = 5
let suma = 1

for(let i = x; i <= y; i++){
    
    if(i % 3 === 0){
        suma *= i
        
    
    }
}
console.log(suma)