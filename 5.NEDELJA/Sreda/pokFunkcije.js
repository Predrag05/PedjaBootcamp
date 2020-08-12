function sveSposobnosti(el){
    for(let i = 0; i < el.length; i++){
        
        if(el[i].sposobnosti != 's'){
            for(let j = 0; j < el[i].sposobnosti.length; j++)
        nizSvihSposobnosti.push(el[i].sposobnosti[j])
    }
    }
    return nizSvihSposobnosti
    }
    console.log(sveSposobnosti(nizPokemona))

