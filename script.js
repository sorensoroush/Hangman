// wordList is a usable variable
// there is supposed to be an import here, but I didn't have time so I linked via HTML instead

const buttonsBox = document.getElementById('buttons-box')
const wordField = document.getElementById('word-field')

const buttonString = 'QWERTYUIOPASDFGHJKLZXCVBNM'

let word = ''
let hiddenLetters = []
let wrongGuesses = 0

const generateWord = () => {
    randomIndex = Math.round(Math.random() * wordList.length)
    word = wordList[randomIndex].toUpperCase()
    console.log(word.toUpperCase())
    hiddenLetters[word.length - 1] = '_'
    console.log(hiddenLetters)
    hiddenLetters.fill('_')
    console.log(hiddenLetters)
}

const updateWord = (letter) => {
    if (letter) {
        // As long as there is a match, loop and update i to search after match
        for (i = 0; word.indexOf(letter, i) > -1; i = word.indexOf(letter, i) + 1) {
            console.log(`Value of i: ${i}`)
            console.log(`Value of word.indexOf(letter, i): ${word.indexOf(letter, i)}`)
            console.log(`Hidden word before update: ${hiddenLetters}`)
            console.log(`Letter: ${letter}`)
            console.log(`Hidden letter before update: ${hiddenLetters[word.indexOf(letter, i)]}`)
            hiddenLetters[word.indexOf(letter, i)] = letter
            console.log(`Hidden word after update: ${hiddenLetters}`)
            console.log(`Hidden letter after update: ${hiddenLetters[word.indexOf(letter, i)]}`)
            console.log(``)
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
        console.log(`Wrong guesses: ${wrongGuesses}`)
    }
}

const buttonPress = (event) => {
    letter = event.target.value
    console.log(`You have pressed the letter: ${letter}`)
    testLetter(letter)
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
    buttonsBox.innerHTML = ''
    generateWord()
    updateWord('')
    createButtons()
}

startGame()