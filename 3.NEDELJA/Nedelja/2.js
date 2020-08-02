// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)


function lifeSupply(numPerMonth,age){
    let godisnjePica = 12 * numPerMonth
    let ukupnoDo100 = 0
    for(let i = age; i < 100; i++){
        ukupnoDo100 += godisnjePica
    }
    return ukupnoDo100
}




lifeSupply(10,26) // Враћа 8880
console.log(lifeSupply(10,26)) // Исписује 8880