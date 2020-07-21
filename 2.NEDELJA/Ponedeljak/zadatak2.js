console.log("Prodavnica")
let cena = 50
let kupac = 140
if(kupac >= cena){
    console.log("Uspesno ste kupili proizvod, ostalo Vam je:",(kupac - cena),"din.")
}
else if(kupac <=cena){
    console.log("Nemate dovoljno novca, ostalo Vam je:", kupac,"din.")
}