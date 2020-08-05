let Dragonite = {
    ime: 'Dragonite',
    vrsta: 'Zmaj',
    sposobnosti: ['Unutarnje žarište'],
    karakteristike: {napad: 134, odbrana: 95, brzina: 80}
}

let Kirlia = {
    ime: 'Kirlia',
    vrsta: 'Psihicki',
    sposobnosti: ['Sinkronizacija', 'Praćenje'],
    karakteristike: {napad: 110, odbrana: 60, brzina: 70}
}

let Pikachu = {
    ime: 'Pikachu',
    vrsta: 'Elektricni',
    sposobnosti: ['Statički elektricitet'],
    karakteristike: {napad: 55, odbrana: 30, brzina: 90}
}

let Torterra = {
    ime: 'Torterra',
    vrsta: 'Travnati',
    sposobnosti: ['Bujanje'],
    karakteristike: {napad: 122, odbrana: 90, brzina: 70}
}



// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона


let nizPokemona = [Dragonite,Kirlia,Pikachu,Torterra]


console.log(nizPokemona)

let nizSvihSposobnosti = []

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

// Сортирати покемоне по брзини, растуће.


nizPokemona.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina)

console.log(nizPokemona)