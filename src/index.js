// Seleziono gli elementi HTML principali che userò nel codice

const form = document.getElementById("loginForm"); 
// prende il form di login

const resultDiv = document.getElementById("result"); 
// div dove mostro messaggi (errore o successo)

const directAccessBtn = document.getElementById("directAccess"); 
// bottone per login alternativo (accesso diretto)


// =========================
// EVENTO SUBMIT DEL FORM
// =========================

form.addEventListener("submit", function (event) {
    
    // blocca il comportamento di default del form (refresh pagina)
    event.preventDefault();

    // creo un oggetto che contiene tutti i dati del form
    let formData = new FormData(form);

    // recupero i valori dei campi usando il "name" degli input
    let email = formData.get("email");
    let password = formData.get("password");

    // debug: stampo i valori in console
    console.log("Email:", email);
    console.log("Password:", password);

    // pulisco eventuali errori precedenti
    clearErrors();

    // valido i dati inseriti
    validateData(email, password);
});


// =========================
// EVENTO CLICK BOTTONE (ACCESSO DIRETTO)
// =========================

directAccessBtn.addEventListener("click", function (event) {

    // prendo i valori direttamente dagli input tramite ID
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // debug in console
    console.log("Email:", email);
    console.log("Password:", password);

    // pulisco eventuali errori precedenti
    clearErrors();

    // valido i dati
    validateData(email, password);
});


// =========================
// FUNZIONE DI VALIDAZIONE
// =========================

function validateData(email, password) {

    // controllo se email è vuota
    if (!email) {
        showError("email", "Email richiesta");
        return { valid: false }; // interrompe la funzione
    }

    // controllo se password è vuota
    if (!password) {
        showError("password", "Password richiesta");
        return { valid: false }; // interrompe la funzione
    }

    // se tutto è valido
    resultDiv.textContent = "Login valido ✔";

    return { valid: true };
}


// =========================
// FUNZIONE PER MOSTRARE ERRORI
// =========================

function showError(field, message) {

    // prendo l'input relativo al campo (email o password)
    let formField = document.getElementById(field);

    // se esiste l'elemento
    if (formField) {
        // aggiungo classe CSS "error" (es. bordo rosso)
        formField.classList.add("error");
    }

    // mostro il messaggio di errore nella UI
    resultDiv.textContent = message;
}


// =========================
// FUNZIONE PER RIMUOVERE ERRORI
// =========================

function clearErrors() {

    // rimuovo la classe error da email
    document.getElementById("email").classList.remove("error");

    // rimuovo la classe error da password
    document.getElementById("password").classList.remove("error");
}