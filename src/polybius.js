// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //make sure all inputs are going in with a lowercase
    let lowerCasedInput = input.toLowerCase();
    //remove the spaces to test for even/odd later
    let inputCount = input.replace(" ", "");
    let message = "";
    //set up object with letters as the key
    let encodeCode = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
    //set up object with number pair as the key

    let decodeCode = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };

    //check if encoding
    if (encode) {
      for (let i = 0; i < lowerCasedInput.length; i++) {
        //check to see if there is a space, if there is, add it to the message and exit the loop
        if (input[i] === " ") {
          message += input[i];
        }
        //match the letter to the key in the obj and add that value to the message
        for (let letterPair in encodeCode) {
          if (lowerCasedInput[i] === letterPair) {
            message += encodeCode[letterPair];
          }
        }
      }

      //decoder
      //check to see if the input is an even number of numbers
    } else if (inputCount.length % 2 === 0) {
      //parse through the input two characters at a time
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          message += input[i];
        }
        //slice the numbers two numbers at a time and match them to the key in the obj and then add to the message
        let slicedNumbers = inputCount.slice(i, i + 2);
        for (let num in decodeCode) {
          if (slicedNumbers === num) {
            message += decodeCode[num];
          }
        }
      }
      //return false if the number of numbers is odd
    } else {
      return false;
    }
    return message;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
