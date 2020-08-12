export function pobednik(niz) {
    niz.sort((a,b) => b.karakteristike.napad - a.karakteristike.napad)
    return niz[0]
}

export function najjaciniz(niz){
    niz.sort((a,b) => {a.karakteristike.napad - b.karakteristike.napad})
    return niz
}
export function sortBrzina(niz){
        niz.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina)
        return niz
}