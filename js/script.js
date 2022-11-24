// const dadoUtente =

const pulsanteDado = document.getElementById('button');
const resultsElement = document.getElementById('results');

 pulsanteDado.addEventListener('click', function() {
    
        const randomNumberPlayer = Math.floor(Math.random() * 6 + 1 )
        console.log(randomNumberPlayer);      

        const randomNumberComputer = Math.floor(Math.random() * 6 + 1 )
        console.log(randomNumberComputer);

        if(randomNumberComputer > randomNumberPlayer){
            console.log('ha vinto il computer');
            resultsElement.innerHTML = "Ha vinto il computer";
            resultsElement.classList.add('customClass', 'computerWin');
            resultsElement.classList.remove('playerWin');

        }
        else if (randomNumberComputer < randomNumberPlayer){
            console.log('hai vinto');
            resultsElement.innerHTML = "Hai vinto";
            resultsElement.classList.add('customClass', 'playerWin');
            resultsElement.classList.remove('computerWin');
        }
        else{
            console.log('il numero dei dadi è uguale! Ritenta!')
            resultsElement.innerHTML = "Il numero dei dadi è uguale! Ritenta!";
            resultsElement.classList.add('customClass');
            resultsElement.classList.remove('computerWin', 'playerWin');
        }
});


