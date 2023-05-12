// wordList is a usable variable
// there is supposed to be an import here, but I didn't have time so I linked via HTML instead

const buttonsBox = document.getElementById('buttons-box')
const wordField = document.getElementById('word-field')

const buttonString = 'QWERTYUIOPASDFGHJKLZXCVBNM'

let word = ''
let hiddenWord = ''
let wrongGuesses = 0

const generateWord = () => {
    randomIndex = Math.round(Math.random() * wordList.length)
    word = wordList[randomIndex].toUppercase()
    hiddenWord = '_'.repeat(word.length)
}

const updateWord = (letter) => {
    if (letter) {
        // As long as there is a match, loop and update i to search after match
        for (i = 0; word.indexOf(letter, i) > -1; i = word.indexOf(letter, i) + 1) {
            hiddenWord[i] = letter
        }
    }
    wordField.textContent = hiddenWord
}

const testLetter = (letter) => {
    if (word.includes(letter)) {
        updateWord(letter)
    } else {
        wrongGuesses++
    }
}

const buttonPress = (event) => {
    console.log(`You have pressed the letter: ${event.target.value}`)
    event.target.disabled = true
}

const createButtons = () => {
    for (i = 0; i < buttonString.length; i++) {
        button = document.createElement('button')
        letter = buttonString[i]
        button.value = letter
        button.textContent = letter
        button.classList.add('button')
        button.addEventListener('click', buttonPress)
        buttonsBox.appendChild(button)
    }
}

const startGame = () => {
    // generateWord()
    // updateWord
    createButtons()
}

startGame()