// Napraviti hijerarhiju klasa koje opisuje ljude na fakultetu.
    // Osnovne klase koje treba implementirati (sa njihovim poljima):
        // Čovek: ime, prezime, godina rođenja
        // Student: trenutna godina studija, trenutni prosek
            // Student osnovnih studija: smer osnovnih studija
            // Student master studija: smer master studija
        // Zaposleni: godina zaposlenja, plata
            // Nastavnik: omiljeni predmet, listu predmeta na kojima drži nastavu
                // Profesor: titula (docent, vanredni, redovni)
                // Asistent: smer doktorskih studija
    // Službenik: odsek


    class Covek {
        constructor(ime, prezime, godinaRodjenja) {
            this.ime = ime
            this.prezime = prezime
            this.godinaRodjenja = godinaRodjenja
    }
}

let cov = new Covek('Predrag', 'Simonovic', '1986')
    console.log(cov)

    class Student extends Covek {
        constructor(ime,prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek) {
            super(ime, prezime, godinaRodjenja)
            this.trenutnaGodinaStudija = trenutnaGodinaStudija
            this.trenutniProsek = trenutniProsek
    }
}

let stu = new Student('Predrag', 'Simonovic', '1986', 'Peta', '8.60')
    console.log(stu)

    class StudentOsnovnihStudija extends Student {
        constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija){
            super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek)
            this.smerOsnovnihStudija = smerOsnovnihStudija
    }
}

let stuOS = new StudentOsnovnihStudija('Predrag', 'Simonovic', '1986', 'Peta', '8.60','klavir')
    console.log(stuOS)

    class StudentMasterStudija extends StudentOsnovnihStudija{
        constructor(smerMasterStudija, ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija){
            super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija)
            this.smerMasterStudija = smerMasterStudija
    }
}

let stuMS = new StudentMasterStudija('Pijanizam','Predrag', 'Simonovic', '1986', 'Peta', '8.60','klavir')
    console.log(stuMS)

    class Zaposleni extends Covek{
        constructor(godinaZaposlenja, plata, ime, prezime, godinaRodjenja){
            super(ime, prezime, godinaRodjenja)
            this.godinaZaposlenja = godinaZaposlenja
            this.plata = plata
    }
}

let zap = new Zaposleni('14','500','Predrag', 'Simonovic', '1986')
    console.log(zap)


    // class ListaPredmeta{
    //     constructor(klavir, slofedjo, pevanje){
    //         this.klavir = klavir
    //         this.slofedjo = slofedjo
    //         this.pevanje = pevanje
    //     }
    // }
    class Nastavnik extends Covek{
        constructor(ime, prezime, godinaRodjenja, klavir, slofedjo, pevanje, omiljeniPredmet){
            super(ime, prezime, godinaRodjenja)
            this.omiljeniPredmet = omiljeniPredmet
            this.klavir = klavir
            this.slofedjo = slofedjo
            this.pevanje = pevanje
        }
    }


    let teacher = new Nastavnik('Predrag', 'Simonovic', '1986', 'dirigovanje','klavir', 'slofedjo', 'pevanje')
    console.log(teacher)


    class Profesor extends Nastavnik{
        constructor(ime, prezime, godinaRodjenja, klavir, slofedjo, pevanje, omiljeniPredmet, docent, vanredni, redovni){
            super(ime, prezime, godinaRodjenja, klavir, slofedjo, pevanje, omiljeniPredmet)
            this.docent = docent
            this.vanredni = vanredni
            this.redovni = redovni
        }
    }

    let pro = new Profesor('Predrag', 'Simonovic', '1986', 'klavir', 'slofedjo', 'pevanje','dirigovanje','Dve Godine','Tri Godine','Pet Godina')
    console.log(pro)

    class Asistent extends Profesor{
        constructor(ime, prezime, godinaRodjenja, klavir, slofedjo, pevanje, omiljeniPredmet, smerDoktorskihStudija){
            super(ime, prezime, godinaRodjenja, klavir, slofedjo, pevanje, omiljeniPredmet)
            this.smerDoktorskihStudija = smerDoktorskihStudija
    }
}

let as = new Asistent('Predrag', 'Simonovic', '1986', 'klavir', 'slofedjo', 'pevanje','dirigovanje', 'Kompozitor')
    console.log(as)

    // ne znam da li sme za ova tri navedena da bude undefined ali meni se dopalo jer kao asistent to jedog dana ce biti definisano


    class Sluzbenik extends Covek{
        constructor(ime, prezime, godinaRodjenja, odsek){
            super(ime, prezime, godinaRodjenja)
            this.odsek = odsek
        }
    }

    let slu = new Sluzbenik('Predrag', 'Simonovic', '1986', 'V.I.P. :))')
    console.log(slu)