function cenaCm(r,cenapice){
    let Obim = r * r * Math.PI
    return `${cenapice / Obim} din/cm2`
}
console.log(cenaCm(14,680))