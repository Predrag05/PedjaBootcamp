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



function pobednik(pokemoni) {
pokemoni.sort((a,b) => b.karakteristike.napad - a.karakteristike.napad)
return pokemoni[0]
}
console.log(pobednik(nizPokemona))


const body = document.querySelector('body')

const button1 = document.querySelector('#prikaz')
const button2 = document.querySelector('#pobednik')
const divPokemona = document.createElement('div')

const pok = document.getElementsByClassName('svi')



nizPokemona.sort((a,b) => {a.karakteristike.napad - b.karakteristike.napad})



nizPokemona.forEach(pokemon => {

const divPokemon = document.createElement('div')
divPokemon.className = 'svi hide'

const p = document.createElement('p')
p.textContent = pokemon.ime + ': ' + pokemon.vrsta + ', ' + pokemon.sposobnosti + ', karakteristike: napad: ' + pokemon.karakteristike.napad + ', odbrana: ' + pokemon.karakteristike.odbrana + ', brzina: ' + pokemon.karakteristike.brzina

const slika = document.createElement('img')
slika.src = 'dragonite.png'
slika.width = 140

divPokemon.appendChild(slika)
divPokemon.appendChild(p)
divPokemona.appendChild(divPokemon)

})


body.appendChild(divPokemona)

button1.addEventListener('click', () => {
    
    if(pok[0].classList == 'svi hide'){
    for(let i = 0; i < pok.length; i++){
        pok[i].classList.remove('hide')
        pok[i].classList.add('show')     
    }         
    }
    else{       
        for(let j = 1; j < pok.length; j++){
            pok[j].classList.remove('hide')
            pok[j].classList.add('show')
             
        }
    }
})
    

button2.addEventListener('click', () => {  
     
    if(pok[1].classList == 'svi hide'){
    pok[0].classList.remove('hide')
    pok[0].classList.add('show')
}   
    else{
        for(let j = 1; j < pok.length; j++){
            pok[j].classList.remove('show')
            pok[j].classList.add('hide')
             
        }

    }

})