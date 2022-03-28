import Letter from "../types/Letter";

const defaultState = {
    nbLetters: 5,
    word: "REACT",
    guesses: blankGuesses(5),
    currentGuess: 0,
    currentGuessLetter: -1,
    isOver: false,
    letterStatus: {}
};

const BLANK = " "


export function initGame(gameState: any, word: any): any {
    if (!word) return;
    gameState.nbLetters = word.length;
    gameState.word = word;
    gameState.guesses = blankGuesses(word.length);
    return {...gameState}
}


function blankGuesses(nbLetters: number) {

    let guesses = [];
    for (let i = 0; i < nbLetters; i++) {
        const guess = {
            letters: [] as Letter[],
            id: i,
            validated: false
        };
        for (let j = 0; j < nbLetters; j++) {
            let letter = new Letter(j.toString(), BLANK, -1);
            guess.letters.push(letter);
        }
        guesses.push(guess);
    }
    return guesses;
};




export function canWrite(gameState: { letterStatus: any, word: string, isOver: any; currentGuessLetter: any; nbLetters: any; guesses?: any; currentGuess?: any; }) {
    return (
        !gameState.isOver &&
        gameState.currentGuessLetter <= gameState.nbLetters - 1 &&
        !canValidate(gameState)
    );
}

export function canValidate(gameState: { letterStatus: any, word: string, isOver: any; currentGuessLetter: any; nbLetters: any; guesses?: any; currentGuess?: any; }) {
    return (
        !gameState.isOver &&
        gameState.currentGuessLetter == gameState.nbLetters - 1 &&
        gameState.guesses[gameState.currentGuess].letters[
            gameState.currentGuessLetter
        ].letter != BLANK
    );
}

export function canErase(gameState: { letterStatus: any, word: string, isOver: any; currentGuessLetter: any; nbLetters: any; guesses?: any; currentGuess?: any; }) {
    return !gameState.isOver && gameState.currentGuessLetter >= 0;
}

export function setLetter(letter: any, gameState: any) {
   // alert(letter)
    if (!canWrite(gameState)) return;


    gameState.currentGuessLetter++;
    if (gameState.currentGuessLetter >= gameState.nbLetters) {
        gameState.currentGuessLetter = -1;
        gameState.currentGuess++;
    }

    gameState.guesses[gameState.currentGuess].letters[
        gameState.currentGuessLetter
    ].letter = letter;

    //if (savedCurrentGuess < game.nbLetters)
    //setGameState({ ...gameState }); //besoin d<un nouvel objet
    return { ...gameState }
}

export function erase(gameState: any) {
    // alert(canErase(gameState))
    if (canErase(gameState)) {
        gameState.guesses[gameState.currentGuess].letters[
            gameState.currentGuessLetter
        ].status = -1;
        gameState.guesses[gameState.currentGuess].letters[
            gameState.currentGuessLetter
        ].letter = BLANK;

        gameState.currentGuessLetter--;
        //if (savedCurrentGuess < game.nbLetters)
        //setGameState({ ...gameState }); //besoin d<un nouvel objet
        return { ...gameState }
    }
}

export function validate(gameState: { letterStatus: any, word: string, isOver: any; currentGuessLetter: any; nbLetters: any; guesses?: any; currentGuess?: any; }) {
    // alert( canValidate(gameState) + "\n" + JSON.stringify(gameState.guesses[gameState.currentGuess]))
    if (canValidate(gameState) && !gameState.guesses[gameState.currentGuess].validated) {
        gameState.guesses[gameState.currentGuess].validated = true;
        let guessedWord = '';

        for (
            let i = 0;
            i < gameState.guesses[gameState.currentGuess].letters.length;
            i++
        ) {
            let letter =
                gameState.guesses[gameState.currentGuess].letters[i].letter;
            guessedWord += letter;
            let status = -1;
            let _letter = letter.toLowerCase();
            let _word = gameState.word.toLowerCase();
            //if (validated) {
            if (_word.indexOf(_letter) != -1) {
                if (_word[i] == _letter) status = 2;
                else status = 1;
            } else status = 0;

            if (!(letter in gameState.letterStatus))
                gameState.letterStatus[letter] = status;
            else if (status == 2) gameState.letterStatus[letter] = 2;
            gameState.guesses[gameState.currentGuess].letters[i].status = status;
        }
        alert(JSON.stringify(gameState.guesses[gameState.currentGuess]))

        gameState.currentGuess++;
        gameState.currentGuessLetter = -1;

        if (guessedWord.toLowerCase() == gameState.word.toLowerCase()) {
            gameState.isOver = true;
            alert('CONGRATS!');
        }
        //if (savedCurrentGuess < game.nbLetters)
        //setGameState({ ...gameState }); //besoin d<un nouvel objet
        return { ...gameState }
    }
}



export default function rootReducer(state: any = defaultState, action: any): any {
    switch (action.type) {
        case 'initGame':
            return initGame(state, action.value);
        case 'setLetter':
            return setLetter(action.value, state)
        case 'validate':
            return validate(state)
        case 'erase':
            return erase(state)
        default:
            return state;
    }
}

