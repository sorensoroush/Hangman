// wordList is a usable variable
// there is supposed to be an import here, but I didn't have time so I linked via HTML instead

const buttonsBox = document.getElementById('buttons-box')
const wordField = document.getElementById('word-field')
const resetButton = document.getElementById('reset-button')
const guessDisplay = document.getElementById('guess-display')

const buttonString = ' QWERTYUIOP ASDFGHJKL ZXCVBNM'

let word = ''
let hiddenLetters = []
let wrongGuesses = 0

const generateWord = () => {
    randomIndex = Math.round(Math.random() * wordList.length)
    word = wordList[randomIndex].toUpperCase()
    hiddenLetters = []
    hiddenLetters[word.length - 1] = '_' // Define the length of the array by adding an element at its last index
    hiddenLetters.fill('_')
    wrongGuesses = 0
    guessDisplay.textContent = `Incorrect guesses: ${wrongGuesses}`
}

const updateWord = (letter) => {
    if (letter) {
        // As long as there is a match, loop and update i to search after match
        for (i = 0; word.indexOf(letter, i) > -1; i = word.indexOf(letter, i) + 1) {
            hiddenLetters[word.indexOf(letter, i)] = letter
        }
    }
    hiddenWord = hiddenLetters.join('')
    wordField.textContent = hiddenWord
}

const testLetter = (letter) => {
    if (word.includes(letter)) {
        updateWord(letter)
    } else {
        wrongGuesses++
        guessDisplay.textContent = `Incorrect guesses: ${wrongGuesses}`
    }
}

const buttonPress = (event) => {
    letter = event.target.value
    testLetter(letter)
    event.target.disabled = true
}

const createButtons = () => {
    buttonsBox.innerHTML = ''
    for (i = 0; i < buttonString.length; i++) {
        letter = buttonString[i]
        if (letter === ' ') {
            buttonDiv = document.createElement('div')
            buttonDiv.classList.add('button-div')
            buttonsBox.appendChild(buttonDiv)
        } else {
            button = document.createElement('button')
            button.value = letter
            button.textContent = letter
            button.classList.add('button')
            button.addEventListener('click', buttonPress)
            console.log(buttonsBox.lastChild)
            buttonsBox.lastChild.appendChild(button)
        }
    }
}

const startGame = () => {
    generateWord()
    updateWord('')
    createButtons()
}

startGame()

resetButton.addEventListener('click', startGame)