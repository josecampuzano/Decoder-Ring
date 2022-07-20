// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //set up error handling
    if (!alphabet || alphabet.length !== 26) return false;
    //set up arrays and strings and lowercase to be used in function
    let message = [];
    const normalAlphabetString = "abcdefghijklmnopqrstuvwxyz";
    const normalAlphabetArray = [...normalAlphabetString];
    const lowercasedInput = input.toLowerCase();
    const inputArray = [...lowercasedInput];
    const codedAlphabet = [...alphabet];

    //check to see if the alphabet passed in has no repeating characters
    const checkUnique = codedAlphabet.filter(
      (letter, iterator, array) => array.indexOf(letter) == iterator
    ).length;
    if (checkUnique !== 26) return false;

    //check encoding status
    if (encode) {
      //check if it is a space, if so, push to the message
      inputArray.forEach((letter) => {
        if (letter === " ") message.push(" ");
        //obtain the index of the letter within the normal alphabet array
        const characterIndex = normalAlphabetString.indexOf(letter);
        //assign codedchar the letter at that index within the coded alphabet
        const codedChar = codedAlphabet[characterIndex];
        //push the codedchar to the message
        message.push(codedChar);
      });
      //join and return the message
      return message.join("");

      //decoder
    } else {
      inputArray.forEach((letter) => {
        //check if it is a space, if so, push to the message
        if (letter === " ") message.push(" ");
        //obtain the index of the letter within the coded alphabet array
        const codedCharacterIndex = codedAlphabet.indexOf(letter);
        //assign decodedchar the letter at that index within the normal alphabet
        const decodedChar = normalAlphabetArray[codedCharacterIndex];
        //push the decodedchar to the message
        message.push(decodedChar);
      });
      //join and return the message
      return message.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
