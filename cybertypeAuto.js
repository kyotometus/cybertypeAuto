const wordList = document.querySelectorAll('[class^="Words_word_"]');
const wordsArray = Array.from(wordList);

let letters = [];

wordsArray.forEach(wordDiv => {
    const spans = wordDiv.querySelectorAll('[class^="Words_character_"]');
    letters = letters.concat(Array.from(spans));
});


for (let i = 0; i < letters.length; i++) {

    if (letters[i].textContent === '') {
      letters[i].textContent = " ";
    }

    const event = new KeyboardEvent('keydown', {
        key: letters[i].textContent,
        bubbles: true,
        cancelable: true
    });

    document.dispatchEvent(event);

    console.log(`Dispatched key: ${letters[i].textContent}`);
}
