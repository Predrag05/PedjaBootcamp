import { LaunchList } from './components/LounchList.js'
import { getAllLaunches, getInfo, getLaunchesByYear } from './service'


const app = document.querySelector('#app')
const p = document.createElement('p')
p.textContent = 'Odaberi godinu lansiranja'
app.append(p)
const select = document.createElement('select')


for(let i = 2002; i <= 2020; i++){
    const option = document.createElement('option')
    option.textContent = i
    select.append(option)
}



select.addEventListener('click', () => {
    select.nextElementSibling.nextElementSibling.remove()
    let year = select.value
    getLaunchesByYear(year).then(res => {
        
        app.appendChild(LaunchList(res.data))
        
    })
})
app.append(select)



getInfo().then(res => {
    console.log(res.data.name)
    const he = document.createElement('h1')
    he.textContent = `Ime kompanije - ${res.data.name}`
    
    app.append(he)
})
// getAllLaunches().then(res => {
//     app.appendChild(LaunchList(res.data.filter(launch => launch.launch_year == 2019)))
// })

// if(confirm('Да ли сте сигурни?')){
    getAllLaunches().then(res => {
        
        app.appendChild(LaunchList(res.data))
    })
// }
// else{
//     console.log('Није потврђено')
// }