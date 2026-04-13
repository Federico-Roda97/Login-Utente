# 📘 Progetto Login Utente - Appunti JavaScript

---

# 🧠 1. Obiettivo del progetto

Questo progetto simula un sistema di login frontend.

Lo scopo è:
- raccogliere dati utente (email e password)
- validare i dati inseriti
- mostrare messaggi di errore o successo
- gestire tutto senza ricaricare la pagina

---

# 🏗️ 2. Architettura del progetto

Il progetto è diviso in 3 livelli logici:

## 🎯 Input (DOM)
- form di login
- input email
- input password
- bottoni

## ⚙️ Logica (JavaScript)
- gestione eventi
- validazione dati
- gestione errori

## 🎨 Output (UI)
- messaggi di errore
- messaggi di successo
- modifiche CSS tramite classList

---

# 🧩 3. Event-driven programming

Il codice non gira in automatico, ma reagisce agli eventi:

- submit del form
- click del bottone

👉 Questo si chiama programmazione guidata da eventi.

---

# 🔁 4. Flusso logico del programma

## 1. Input utente
L’utente inserisce email e password.

## 2. Evento
Si attiva uno di questi eventi:
- submit del form
- click del bottone

## 3. Lettura dati

Due modalità:

### ✔ FormData (submit form)
- legge automaticamente tutti i campi
- usa l’attributo `name`

### ✔ Accesso diretto (click bottone)
- usa `getElementById`
- legge `.value`

---

## 4. Reset UI

Prima della validazione:
- si rimuovono eventuali errori precedenti

👉 questo evita conflitti visivi

---

## 5. Validazione dati

Controlli effettuati:
- email vuota
- password vuota

Regola:
- se un campo è vuoto → mostra errore e interrompe la funzione

---

## 6. Output

### Se errore:
- aggiunge classe CSS `error` all’input
- mostra messaggio nel `resultDiv`

### Se successo:
- mostra messaggio “Login valido ✔”

---

# 🧠 5. Concetti fondamentali

## Validazione difensiva
Il codice controlla sempre i dati prima di procedere.

## Separazione logica/UI
- logica → validateData(), clearErrors()
- UI → classList, resultDiv

## Riutilizzo del codice
La funzione `showError` è generica e funziona per qualsiasi campo.

---

# 🔗 6. Gestione dati: FormData vs DOM

## 📦 FormData
- usa `name`
- utile per form e backend
- automatizza la raccolta dati

## 🎯 DOM diretto
- usa `id`
- più controllato
- utile per interazioni UI

---

# 🚨 7. Gestione errori

Sistema attuale:
- evidenzia il campo con errore
- mostra messaggio globale

Limite:
- un solo messaggio visibile alla volta

---

# 🧠 8. Concetto di state (UI implicita)

Lo stato dell’interfaccia è gestito indirettamente tramite:
- classList (errori visivi)
- resultDiv (messaggi)

---

# 📌 9. Mental model del programma

INPUT → EVENTO → LETTURA DATI → VALIDAZIONE → OUTPUT

Utente inserisce dati  
↓  
Click / Submit  
↓  
Lettura valori  
↓  
Controllo validazione  
↓  
Errore o Successo  

---

# 🚀 10. Cosa si impara con questo progetto

- DOM manipulation
- Event handling
- Validazione form
- Gestione UI dinamica
- Separazione logica e presentazione
- Struttura base di applicazioni frontend

---

# 🔮 11. Evoluzioni possibili

Il progetto può essere migliorato con:

- validazione live (mentre scrivi)
- errori sotto ogni input
- integrazione con API (fetch login)
- gestione sessione (localStorage / token)
- loading state