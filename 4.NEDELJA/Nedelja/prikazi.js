const users = [
    {
        username: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        username: 'John',
        password: '123456',
        isAdmin: false,
        coins: 7
    },
    {
        username: 'Kelly',
        password: 'asdf1234',
        isAdmin: false,
        coins: 12
    },
    {
        username: 'Pera',
        password: '1234asdf',
        isAdmin: false,
        coins: 42
    },
    {
        username: 'Ana',
        password: 'fghfhf',
        isAdmin: false,
        coins: 31
    }
]

const divUsers = document.querySelector('#users')
const forma = document.querySelector('#login')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const logoutButton = document.querySelector('#logout')

users.forEach(user => {
    if(user.isAdmin) return

    const p = document.createElement('p')
    p.textContent = user.username + ' ' + user.coins

    divUsers.append(p)
})






function ulogujSe(){
    forma.classList.add('hide')
    divUsers.classList.remove('hide')
    logoutButton.classList.remove('hide')
}

forma.addEventListener('submit', e =>{
    e.preventDefault()
    //ni jedan input nesme biti prazan ni beline
    if(usernameInput.value.trim().lenth === 0 || passwordInput.value.trim() === ''){
        alert('ne sme prazan unos')
    return
}
     // da li korisnik ve postoji
    let korisnik = users.find(user => user.username === usernameInput.value)
    // let postoji = false
    // for(let i = 0; i < user.users.length; i++){
    //     if(users[i].username === usernameInput.value){
    //         postoji = true
    //         break
    //     }
    // }
    // console.log(postoji)
    //ako postoji da li je sifra dobra
    if(korisnik){
        if(korisnik.password === passwordInput.value){
            ulogujSe()
        }
        else console.log('Pogresna sifra')
    }
    // ako ne postoji napraviti ovog - i ulogovati ga sa tim podacima
    else{
        users.push({
            username: usernameInput.value,
            password: passwordInput.value,
            isAdmin: false,
            coins: 0
        })
        const p = document.createElement('p')
        p.textContent = usernameInput.value + ' ' + 0
        divUsers.append(p)

        ulogujSe()
    }

    
})

logoutButton.addEventListener('click', () => {
    forma.classList.remove('hide')
    divUsers.classList.add('hide')
    logoutButton.classList.add('hide')
})

// console.log('Budi dobar')
