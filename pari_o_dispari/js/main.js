/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

Dichiariamo chi ha vinto.*/
function random_1_to_5() {
    return parseInt(Math.ceil(Math.random() * 5));
}
//Funzione che dice chi vince a pari o dispari inserendo il numero sceltro dall'utente e la scelta tra pari o dispari
function pari(userNumero) {
    //creiamo una variabile random tra 0 e 5
    var pcNumero = random_1_to_5();
    alert("il pc ha scelto " + pcNumero);
    var sum = pcNumero + userNumero;
    alert(sum)

    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//utente sceglie pari o dispari
var numeroUser = NaN;
while (isNaN(numeroUser) || 0 >= numeroUser || numeroUser > 5) {
    var numeroUser = parseInt(prompt("scegli un numero da 1 a 5"));
    if (isNaN(numeroUser) || 0 >= numeroUser || numeroUser > 5) {
        alert("scrivi un numero tra 1 e 5!!");
    }
}

var scelta = "nochoice";

while (scelta != "p" && scelta != "d") {
    scelta = prompt("cosa scegli pari o dispari? p/d");
}


risultato = pari(numeroUser);
console.log(risultato);

if (risultato && scelta == "p") {
    alert("complimenti hai vinto, ottima scelta pari");
} else if (risultato && scelta == "d") {
    alert("peccato è uscito pari, ma tu hai scelto dispari")
} else if (!risultato && scelta == "d") {
    alert("complimenti hai vinto, ottima scelta dispari");
} else if (!risultato && scelta == "p") {
    alert("peccato è uscito dispari, ma tu hai scelto pari")
}