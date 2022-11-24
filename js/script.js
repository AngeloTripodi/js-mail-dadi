const diceButtonElement = document.getElementById('button');
const resultsElement = document.getElementById('results');

 diceButtonElement.addEventListener('click', function() {
    
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


const verificationButtonElement = document.getElementById('mail-button');
const verificationMessage = document.getElementById('mailVerification');
const mailElement = document.getElementById('email');

let mailingList = [
    "info@boolean.com",
    "info@booleancareers.com",
    "teacher@boolean.com",
    "tutor@boolean.com",
    "tutor@booleancareers.com",
    "teacher@booleancareers.com",
    "student@boolean.com",
    "student@booleancareers.com",
    "administration@boolean.com",
    "administration@booleancareers.com"
]

   

    verificationButtonElement.addEventListener('click', function() {
    let mailValidationCount = 0;    

    for (let i= 0; i < mailingList.length; i++) {
    
        if (mailElement.value == mailingList[i])
        {
            mailValidationCount = mailValidationCount + 1;
            console.log(mailingList[i])
            console.log(mailElement.value)
        }
        else
        {
            console.log(mailingList[i])
            console.log(mailElement.value)

        }
    
    }

    if (mailValidationCount === 1){
        verificationMessage.innerHTML = "Ottimo, la tua mail è presente e verificata!";
    }
    else{
        verificationMessage.innerHTML = "Ci dispiace, ma la tua mail non è presente nella nostra lista.";
    }
       
    console.log(mailValidationCount);
    });

 
   
