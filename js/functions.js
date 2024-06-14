
// FUNZIONE PER CREAZIONE DI NUMERO RANDOM
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione per creare le bombe
function addBombs(gridSize, bombsNumber){
    while(BombPositions.length< bombsNumber){
        // uso generateRandomNumber per creare la posizione delle bombe
        let bombPlacing= generateRandomNumber(1,gridSize);
        if(!BombPositions.includes(bombPlacing)){
        // pusho la bomba nell'array bombPositions
        BombPositions.push(bombPlacing);
        }
    }
}


// funzione per generare caselle al click del bottone+aggiungere classe clicked al bottone cliccato
function generateGrid(gridSize, containerClass){

    addBombs(gridSize, 16);
    console.log(BombPositions);


    // creo il ciclo per creare le x caselle all'interno dell'elemento containerClass
    for(let i = 1; i <= gridSize; i++){
        let square= document.createElement('div');
        square.classList.add('square');
        // square.textContent=i;
        containerClass.appendChild(square);
        if(BombPositions.includes(i)){
            square.classList.add('spotted');
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




// creo l'array in cui verranno inserite le bombe




