

function maksiBroj(a,b,c){
    
    if((a > b && a > c) && (a => b && a > c)) {
        console.log(`Maksi broj je ${a}`)
    }
    if((b > a && b > c) && (b => a && b > c)) {
        console.log`Maksi broj je ${b}`
    }
    if((c > b && c > a) && (c => b && c > a)) {
        console.log(`Maksi broj je ${c}`)
    }
    
    return
}
console.log(maksiBroj(5,4,3))

// Probao sam da iskoristim Math.min ali uvek mi je izbaivalo najmanji broj koji nikako nissam znao kako da iskoristim i ostavio sam return undefined