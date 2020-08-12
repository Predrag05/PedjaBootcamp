// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

const divPicerija =document.querySelector('.picerija')

const btnBrojPica = document.querySelector('#order')
const btnOrderNow = document.querySelector('#ordernow')
const brojac = document.createElement('p')
brojac.id = 'broj-pica'
brojac.textContent = 0
let d
d = Date()
console.log(d.toString())

const porudzbina = document.createElement('p')
porudzbina.id = 'reset'


const resetovanje = document.querySelector('#reset')



let i = 0

btnBrojPica.addEventListener('click', (e) => {
    
    brojac.textContent = i
    i++
})


btnOrderNow.addEventListener('click', () =>{
    if(i != 0){
        porudzbina.textContent = `Наручили сте ${i - 1} пица, ${d.toString()}`
        i = 0
        brojac.textContent = i}
    else{
        alert('Ne moze se naruciti ovaj broj pica')
    }
        
})



divPicerija.appendChild(brojac)
divPicerija.appendChild(porudzbina)

