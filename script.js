buttonString = 'QWERTYUIOP ASDFGHJKL ZXCVBNM'

const buttonPress = event => {
    console.log(`You have pressed the letter: ${event.target.value}`)
    event.target.disabled = true
}

for (i = 0; i < buttonString.length; i++) {
    button = document.createElement('button')
    letter = buttonString[i]
    button.value = letter
    button.textContent = letter
    button.classList.add('button')
    button.addEventListener('click', buttonPress)
    document.getElementById('buttons-box').appendChild(button)
}