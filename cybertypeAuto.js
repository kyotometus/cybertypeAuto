const wordList = document.querySelectorAll('[class^="Words_word_"]');
const letters = wordList[0].querySelectorAll('[class^="Words_character_"]');

const filteredLetters = Array.from(letters).filter(
  span => !span.className.endsWith('undefined')
);

const undefinedLetters = Array.from(letters).filter(
  span => span.className.endsWith('undefined')
);

for (let i = 0; i < filteredLetters.length; i++) {
    const event = new KeyboardEvent('keydown', {
        key: filteredLetters[i].textContent,
        bubbles: true,
        cancelable: true
    });

    document.dispatchEvent(event);

    console.log(`Dispatched key: ${filteredLetters[i].textContent}`);
}
