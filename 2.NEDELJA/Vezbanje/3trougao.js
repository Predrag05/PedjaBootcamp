let red = ''
let H = 5
let j = H - 1
for(let k = 0; k <= 4; k++){
    
for(let i = 0; i < H; i++){
    if(i < j){
        red += ' '   
    }
    else{red += '*'}
}
        j--      
        red += '\n'
}

console.log(red)


// for(let i = 0; i < H; i++){
    
//     console.log(red)
// }