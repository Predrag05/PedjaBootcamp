// Написати функцију која исписује све елементе низа који су дељиви са 5
let niz = [1,2,3,4,5,7,9,14,15,16,20,25,30,32,33,34,35]


function printDivisibleBy5(num){
    if(num % 5 === 0){
        console.log(num)
    }
}

for(let i = 0; i < niz.length; i++){
    printDivisibleBy5(niz[i])
}