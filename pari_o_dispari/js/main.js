/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
function random_1_to_5() {
    return Math.ceil(Math.random() * 5);
}
//Funzione che dice chi vince a pari o dispari inserendo il numero sceltro dall'utente e la scelta tra pari o dispari
function pari_e_dispari(userNumero, sceltaUser) {
    //creiamo una variabile random tra 0 e 5
    var pcNumero = random_1_to_5();
    var sum = pcNumero + userNumero;

    if (sum % 2 == 0 && sceltaUser.toLowerCase() == "p") {
        alert("hai vinto ottima scelta pari");
    } else if (sum % 2 == 0 && sceltaUser.toLowerCase() == "d") {
        alert("hai perso è uscito pari ma hai scelto dispari");
    } else if (sum % 2 != 0 && sceltaUser.toLowerCase() == "p") {
        alert("hai perso è uscito dispari  ma hai scelto pari");
    } else if (sum % 2 != 0 && sceltaUser.toLowerCase() == "d") {
        alert("hai vinto ottima scelta dispari");
    }
}
//utente sceglie pari o dispari
var scelta = prompt("cosa scegli pari o dispari?");
var numeroUser = prompt("scegli un numero da 1 a 5");

pari_e_dispari(numeroUser, scelta);