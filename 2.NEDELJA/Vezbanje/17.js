// 17	Ispis paranih i neparnih prirodnih brojeva od 1 do n (test parnosti i neparnosti).
let x = 1
let n = 8
for(let i = x; i <= n; i++){
    if(i % 2 === 1){
        console.log(i, 'nepar')
    }
    if(i % 2 === 0){
        console.log(i, 'par')
    }
}