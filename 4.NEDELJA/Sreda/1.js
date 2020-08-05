// Направити објекат покемон који садржи следеће информације: Име, Врста, Способности (низ способности покемона), Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
// (Направите макар 4 различита покемона)
// Даље, направити низ од ових објеката


let Dragonite = {
    ime: 'Dragonite',
    vrsta: 'Zmaj',
    sposobnosti: ['Unutarnje žarište'],
    karakteristike: {napad: 134, odbrana: 95, brzina: 80}
}

let Kirlia = {
    ime: 'Kirlia',
    vrsta: 'Psihicki',
    sposobnosti: ['Sinkronizacija','Pracenje'],
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


console.log(nizPokemona)
