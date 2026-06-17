const textBox = document.querySelector('.textBox')
const counterDisplay = document.querySelector('.counterDisplay')
const pageError = document.querySelector('body')

function countCharacters() {
    const currentLength = textBox.value.length;

    counterDisplay.textContent = currentLength + " / 50 characters"

    if (currentLength > 50) {
        counterDisplay.classList.add('limitReached');
        pageError.classList.add('limitReached');
    } else {
        counterDisplay.classList.remove('limitReached');
        pageError.classList.remove('limitReached');
    }
}

textBox.addEventListener('input', countCharacters);