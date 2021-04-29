//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//creiamo la funzione
function palindrome(word) {
    //array che conterrà la parola parola da controllare
    var reverseWord = [];
    //variabile di controllo per vedere se le parole sono uguali
    var controllo = true;

    for (var i = 0; i < word.length; i++) {
        console.log(i);
        reverseWord.unshift(word[i])

    }
    var arrayWord = word.split("");
    for (var i = 0; i < arrayWord.length && controllo; i++) {
        if (arrayWord[i] != reverseWord[i]) {
            controllo = false;
            return false;
        }
    }
    //se controllo è ancora true allor ale parole sono palindrome
    if (controllo) {
        return true;
    }
}
//chiediamo all'utente una parola
var word1 = prompt("inserire parola")
if (palindrome(word1)) {
    document.getElementById("msg").innerHTML = "le parole sono palindrome";
} else {
    document.getElementById("msg").innerHTML = "le parole non sono palindrome";

}