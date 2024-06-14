
// FUNZIONE PER CREAZIONE DI NUMERO RANDOM
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione per generare caselle al click del bottone+aggiungere classe clicked al bottone cliccato
function generateGrid(LastGrid, containerClass){
    // creo il ciclo per creare le x caselle all'interno dell'elemento containerClass
    for(let i = 1; i <= LastGrid; i++){
        let square= document.createElement('div');
        square.classList.add('square');
        square.textContent=i;
        containerClass.appendChild(square);

        // funzione per creazione di bombe  
        while(BombPositions.length < 16){
            // creo un math random da 1 a 100
            let bombPlacing = generateRandomNumber(1,100);

            if(!BombPositions.includes(bombPlacing)){
                // pusho la bomba nell'array bombPositions
                BombPositions.push(bombPlacing);
            }
            
            console.log(BombPositions);
            
        }


        // aggiungo classe .clicked a ogni square cliccato
        square.addEventListener('click',
            function(){
                square.classList.add('clicked')
                console.log(i);
            }
        )
    }
}

const BombPositions=[]  


// funzione per creare le bombe

// creo l'array in cui verranno inserite le bombe


