import Launch from './Lounch.js'


export const LaunchList = (arr) => {
    const launchList = document.createElement('div')
    launchList.className = 'launch-list'

    // getAllLaunches().then(res => {
    //     res.data.forEach(launch => {
    //         launchList.appendChild(Launch(launch))
    //     })
    // })
    // setTimeout(() => {}, 1000)

    arr.forEach(launch => {
        launchList.appendChild(Launch(launch))
    })
    return launchList
}

// 1. Узети податке са сервера
// 2. Прођемо кроз низ, правимо компоненте за сваки елемент *и убацимо их у launch-list
// 3. Враћамо launch-list