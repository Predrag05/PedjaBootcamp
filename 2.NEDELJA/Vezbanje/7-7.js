// 7_7	Ispisati prirodne brojeve od 1 do 17 koji nisu djeljivi sa a.
let x = 1
let y = 17
let a = 5
for(let i = x; i <= y; i++){
    if(i % a !== 0){
        console.log(i)
    }
    
}