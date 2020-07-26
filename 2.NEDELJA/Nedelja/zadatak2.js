// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)

let pocetak = 1
let kraj = 100

for(let i = pocetak; i <= kraj; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
        continue
        }
    
        
    if(i % 3 == 0){
        console.log('Fizz')
        continue
        }
        
        
    if(i % 5 == 0){
        console.log('Buzz')
        continue
        }
    if((i % 3 != 0 || i % 5 != 0) && (i % 1 == 0 || i % 2 == 0)){
        console.log(i)
        continue}
        
    }

    
