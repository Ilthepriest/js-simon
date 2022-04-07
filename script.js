// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numbersElement = document.querySelector(".numbers");

const randomNumbers = [];

while(randomNumbers.length !== 5){
    const number = Math.floor(Math.random() * 100)
    if(!randomNumbers.includes(number)){
        randomNumbers.push(number)
    }
}

console.log(randomNumbers);

numbersElement.innerHTML = `Memorizza questi numeri : ${randomNumbers}`;

setTimeout(() => {
    numbersElement.innerHTML = "";
    const user_attempts = []
    for (let i = 0; i < 5; i++) {
        const user_number = Number(prompt("Inserisci uno dei numeri che hai visto prima"))
        console.log(user_number);
        if(randomNumbers.includes(user_number) && !user_attempts.includes(user_number)){
            user_attempts.push(user_number)
        }
        
    }

    console.log(user_attempts);
    alert(`Hai indovinato ${user_attempts.length}/${randomNumbers.length} - I numeri indovinati sono ${user_attempts}`)

}, 3000)

