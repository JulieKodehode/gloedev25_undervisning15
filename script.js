const userAge = 18;

/* BAR */
/* Sjekker om userAge er mindre enn 18 */
if (userAge > 18) { 
    console.log("Du kan ikke komme inn..");
} else if (userAge === 18) {
    /* Sjekker om userAge er akkurat 18 */
    console.log("Gratulerer! Du har blitt 18 - gratis bursdagsdrink");
} else if (userAge > 60 && userAge < 65) {
    /* Sjekker om userAge er større enn 60 OG mindre enn 65 */
    console.log("Senior rabatt på drinker");
} else if (userAge >= 18) {
    /* Sjekker om userAge er større enn eller samme som 18 */
    console.log("Velkommen inn!");
} else {
    /* Error */
    console.log("Noe er galt med koden..");
};

/* FØRERKORT */
/* Sjekker om userAge er større enn eller samme som 18, og gir respons ut i fra tallet */
if (userAge >= 18) {
    console.log ("Du kan ta førerkortet");
} else {
    console.log("Du kan ikke ta førerkort");
};

//
//

const userName = "Julie";
const userPassword = "Julie123";
let userOnline = false;
let page = "Log-in";

if (userName == "" && userPassword == "") {
    console.log("Du har ikke lagt til brukernavn og passord");
} else if (userName != "Julie") {
    console.log("Brukernavnet er feil. Prøv på nytt.")
} else if (userPassword != "Julie123") {
    console.log("Passord er feil. Prøv på nytt.")
} else if (userName != "Julie" || userPassword != "Julie123") {
    console.log("Brukernavnet eller passordet er feil. Prøv på nytt");
} else if (userName != "Julie" && userPassword != "Julie123") {
    console.log("Brukernavnet og passordet er feil. Prøv på nytt");
} else if (userName == "Julie" && userPassword == "Julie123") {
    console.log("Du har suksesfullt logget inn " + userName + "!")
    userOnline = true;
    page = "Home";
    const loginMessage = document.getElementById("loginMessage");
    console.log(loginMessage);
    loginMessage.textContent = "Du har suksesfullt logget inn " + userName + "!"
} else {
    console.log("Noe er galt med koden..");
};