let niz = [5,8,6,45,89,54,5156,-4545,-455,6444,6832]

function deljiv(broj){
    if(broj % 3 === 0)
    return broj
}

niz.reduce(deljiv)