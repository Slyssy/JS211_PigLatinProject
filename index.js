const pigLatin = (sentence) => {
  //? Create an array of words.
  sentence = document.getElementById('user-input').value;
  const words = sentence.match(/\w+/g);
  const arrayOfPigLatin = [];
  // ?Looping through the words array to trim excess characters and convert to lowercase.
  words.map((word) => {
    word = word.trim().toLowerCase();
    const firstVowelIndex = word.search(/[a,e,i,o,u]/g);
    let trimmedLetters = word.slice(0, firstVowelIndex);
    let trimmedWord = word.slice(firstVowelIndex);
    // ?Conditional to verify if word starts with a vowel to add correct suffix.
    if (firstVowelIndex === 0) {
      return arrayOfPigLatin.push(`${trimmedWord}${trimmedLetters}yay`);
    } else {
      return arrayOfPigLatin.push(`${trimmedWord}${trimmedLetters}ay`);
    }
  });
  // ?Joining the updated arrayOfPigLatin to create a sentence.
  const translated = `${arrayOfPigLatin.join(' ')}`;

  const displayArea = document.querySelector('#display-element');
  // ?Clearing display before we insert new translation.
  displayArea.innerHTML = '';
  // ?Using insertAdjacentHTML to write new data to defined area.
  displayArea.insertAdjacentHTML(
    'afterbegin',
    `
  <p>${translated}</p>
  `
  );
};
