// Napisati funkciju koja ispisuje da li je broj deljiv sa 3

function printIsDivisible3(num){
    if(num % 3 == 0){
        console.log(`Broj ${num} je deljiv sa 3`)
    }
    else{
        console.log(`Broj ${num} nije deljiv sa 3`)
    }
}
let num = 15
printIsDivisible3(num)

printIsDivisible3(20)

// Dakle broj koji je u zagradama posle imena funkcije je i u samom uslovu funkcije, a moze biti i promenljiva


// Napisati funkciju koja proverava da li je broj deljiv sa 3
function IsDivisible3(num){
    return num % 3 == 0 //vraca BULOVU vrednost TRUE/FALSE
}

console.log(IsDivisible3(num))

function sumRange(n,m){
    let sum = n + m
    return sum
}
console.log(sumRange(3,5))

function productRange(n,m){
    let pro = n * m
    return pro
}
console.log(productRange(3,5))

// Bilo koje dvestranice trougla moraju biti vece od bilo koje trece stranice

function isValid(a,b,c){
    if(a, b, c > 0 && a + b > c && a + c > b && b + c > a){
        console.log(`Trougao sa stranicama ${a}cm,${b}cm,${c}cm je dobar.`)
    }
    else{
        console.log(`Trougao sa stranicama ${a}cm,${b}cm,${c}cm nije dobar.`)
    }
    return `VALIDAN/TRUE`
}
console.log(isValid(3,5.9,3))
// Uneti funkciju koja proverava da li je string palindrom odnosno da li se cita i sa jedne i sa druge strane isto
// kao na primer ANA VOLI MILOVANA - ANAVOLIMILOVANA
// pa je to palindrom jer se cita i od napred i od pozadi kao i MADAM ili 77977



// function isPalindrome(str){
//     if((Math.floor(str / 10) === Math.floor(str / 100 % 10)) || ((Math.floor(str / 10) === Math.floor(str / 100 % 10)) && (Math.floor(str / 100) === Math.floor(str / 100 % 10 % 10)))
//     {    
//         console.log(`Ovaj ${str} je Palindrom`)
//     }
//     else{
//         console.log(`Ovaj ${str} nije Palindrom`)}
// }

// isPalindrome(212)

