// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    //Make sure that the letters that are going in are all lowercased
    let lowercasedMessage = input.toLowerCase();
    let message = "";
    //set error parameters to return false
    if (!shift || shift < -25 || shift > 25) return false;
    //set decoder by flipping the direction of the shift value
    if (encode === false) {
      shift *= -1;
    }

    for (let i = 0; i < lowercasedMessage.length; i++) {
      //obtain the charCode for every character
      const codedMessage = lowercasedMessage.charCodeAt([i]);
      //shift the char code based on the shift param
      const shifted = codedMessage + shift;
      //check to see if the character is a letter
      if (/[a-zA-Z]/.test(input[i])) {
        //readjust for values that go over scope and add to the message
        if (shifted > 122) {
          message += String.fromCharCode(shifted - 26);
          //readjust for values that go under scope and add to the message
        } else if (shifted < 97) {
          message += String.fromCharCode(shifted + 26);
          //add to the message
        } else {
          message += String.fromCharCode(shifted);
        }
      }
      //catches all the nonalphabet characters and adds them
      else {
        message += String.fromCharCode(codedMessage);
      }
    }
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
