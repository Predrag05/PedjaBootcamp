
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


let nizPokemona = [Dragonite,Kirlia,Pikachu,Torterra]

// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

function pobednik(pokemoni) {
pokemoni.sort((a,b) => b.karakteristike.napad - a.karakteristike.napad)
return pokemoni[0]
}
console.log(pobednik(nizPokemona))