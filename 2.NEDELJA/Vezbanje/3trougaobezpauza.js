let red = ''
let H = 6
let W = 6
let k = W - 1
for(let i = 0; i < H; i++){

    for(let j = 0; j < W; j++){
        if(j < k){
            red += ' '
        }
        else{
            red += '*'
        }
    }

    k--
    red += '\n'
}
console.log(red)

