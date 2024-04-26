let letters = "abcdefghijklmnopqrstuvwxyz",
    lettersArray = Array.from(letters),
    leetersContainer = document.querySelector('.letters'),
    lettersGuess = document.querySelector('.letters-guess'),
    categoryName = document.querySelector('.category span'),
    theDraw      = document.querySelector('.hangman-draw');


lettersArray.forEach(letter => {

    leetersContainer.innerHTML += `<span class="letter-box">${letter}</span>`

});

let words = {

    programing : ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    football   : ['Lionel Messi', 'Cristiano Ronaldo', 'Sergio Ramos', 'Manuel Neuer', 'Andres Iniesta', 'Lewandowski'],
    movies     : ['The Lord of the Rings', 'The Hobbit', 'Thor', 'Interstellar', 'Prestige'],
    people     : ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries  : ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words),
    // get random number from the object length
    randomNumber = Math.floor(Math.random() * allKeys.length),
    // get random key from the object keys
    randomKey = allKeys[randomNumber],
    // get random value from the object
    randomValue = words[randomKey],
    // get the ctegory length 
    ctegoryLength = Math.floor(Math.random() * randomValue.length),
    // get random word
    randomWord = randomValue[ctegoryLength].toLowerCase(),
    // make array from the choosen random word
    choosenWordArray = Array.from(randomWord);

    categoryName.innerHTML = randomKey;
    
    // create the empty spans in guess container
    choosenWordArray.forEach(letter => {
        // check if this letter is spcae
        if(letter === ' '){

            lettersGuess.innerHTML += `<span class="with-space"></span>`;
        }

            lettersGuess.innerHTML += `<span></span>`;   
    });

    let guessSpans = document.querySelectorAll(".letters-guess span"),
        wrongAttempts = 0;


    console.log(guessSpans);

document.addEventListener('click' ,(e) =>{

    let theStatus = 'flase';

    if(e.target.className === 'letter-box'){

        let clickedLetter = e.target.innerHTML.toLowerCase();

        e.target.classList.add('clicked');

        choosenWordArray.forEach((wordLetter,wordIndex) =>{

            if(clickedLetter === wordLetter){

                theStatus = 'true';

                console.log(`you clicked the letter ${clickedLetter} and it’s has index ${wordIndex}`);

                guessSpans.forEach((span, spanIndex) => {

                    if (wordIndex === spanIndex) {

                        span.innerHTML = clickedLetter; 
                    }

                });

            }

        })

        if(theStatus !== 'true'){

                wrongAttempts++;

                theDraw.classList.add(`wrong-${wrongAttempts}`);
        }

        if(wrongAttempts == 8){

            gameOver();

        }
    }

})

function gameOver() {

    document.body.innerHTML += `<div class="popup"> <span>The word is ${randomWord}</span></div>`

}