// ! 1 Prendo l'elemento dal DOM (la p)
const paragraph = document.getElementById('result');
console.log(paragraph);

// ! 2 Costruiamo il messaggio
let message = 'La tua password è: ';
console.log(message);

// ! 3 Chiediamo il nome all'utente
const userName = prompt('Qual è il tuo nome?');
console.log(userName);

// ! 4 Chiediamo il cognome all'utente
const userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);

// ! 5 Chiediamo il colore preferito all'utente
const userColor = prompt('Qual è il tuo colore preferito?');
console.log(userColor);

// ! 6 A-B Generiamo una password con i dati dell'utente
const userPassword = userName + userSurname + userColor + '21';
console.log(userPassword);

// ! 7 Inseriamo il risultato nell'elemento HTML
// Aggiorniamo il messaggio
message += `<strong>${userPassword}</strong>`;
console.log(message);

paragraph.innerHTML = message;
console.log(paragraph);


