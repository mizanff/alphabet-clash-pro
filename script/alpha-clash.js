// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList)
// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the game over if pressed 'Esc'
    if(playerPressed == 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);

        //----------------------------------
        // update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        // // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('dhurrr viya...right key press koro')

        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
            gameOver();
        }

        //-------------------------------------------------------
        // // step 1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step 2: reduce the life count
        // const newLife = currentLife - 1;
        // // step: display the update life count
        // currentLifeElement.innerText = newLife;
    }
}

// capture keyboard key press 
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    // step 1: Generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet',alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet
   
    // set backgroundColor
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    //react score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore)

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    // const currentAlphabet = getElementTextById('current-alphabet');
    // // console.log(currentAlphabet);
    // removeBackgroundColorById(currentAlphabet);
}