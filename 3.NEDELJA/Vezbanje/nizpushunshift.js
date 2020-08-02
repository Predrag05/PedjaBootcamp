let niz = [5,9,14,23,35,36,70,77,1]
let pushniz = []
let zbir = 0
for(let i = 0; i < niz.length; i++){
    if(niz[i] % 2 === 0){
        pushniz.push(niz[i])
    }
}
console.log(pushniz)