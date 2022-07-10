const pigLatin = (sentence) => {
  //? Create an array of words.
  sentence = document.getElementById('user-input').value;
  const words = sentence.match(/\w+/g);
  const arrayOfPigLatin = [];
  words.map((word) => {
    word = word.trim().toLowerCase();
    const firstVowelIndex = word.search(/[a,e,i,o,u]/g);
    let trimmedLetters = word.slice(0, firstVowelIndex);
    let trimmedWord = word.slice(firstVowelIndex);
    if (firstVowelIndex === 0) {
      return arrayOfPigLatin.push(`${trimmedWord}${trimmedLetters}yay`);
    } else {
      return arrayOfPigLatin.push(`${trimmedWord}${trimmedLetters}ay`);
    }
  });
  const translated = `${arrayOfPigLatin.join(' ')}`;

  const displayArea = document.querySelector('#display-element');
  displayArea.insertAdjacentHTML(
    'afterbegin',
    `
  <p>${translated}</p>
  `
  );
};

// pigLatin(userInput);
