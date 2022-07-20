const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("Polybius Function tests written by Team 4 ", () => { 

    describe("Encoding Handling", () => { 
        it("Output should be a string", () => { 
            const input = "thinkful"
            const actual = polybius(input)
            expect(actual).to.be.a("string")
        })
        it("Spaces should be maintained throughout", () => { 
            const input = "hello world"
            const expected = "3251131343 2543241341"
            const actual = polybius(input)
            expect(actual).to.equal(expected)
        })
        it("Capital letters are ignored ", () => { 
            const input = "Hello"
            const expected = "3251131343"
            const actual = polybius(input)
            expect(actual).to.equal(expected)
        })
        it("The letters I and J share a space. When encoding, both letters can be converted to 42", () => { 
            const input = "thinkful"
            const expected = "4432423352125413"
            const actual = polybius(input)
            expect(actual).to.equal(expected)
        })
    })
    describe("Decoding Handling", () => { 
        it("should decode a message by translating each pair of numbers into a letter", () => {
            const message = "23513434112251";
            const actual = polybius(message, false);
            const expected = "message";
      
            expect(actual).to.equal(expected);
        })
        it("The letters I and J share a space. When decoding, both letters should somehow be shown.", () => { 
            const input = "4432423352125413"
            const actual = polybius(input, false)
            expect(actual).to.include("i")
            expect(actual).to.include("j")
        })
        it("If the number of characters in the string is not an even number, return false", () => { 
            const input = "22334455 112"
            const actual = polybius(input, false)
            expect(actual).to.be.false
        })
        it("Spaces should be maintained throughout", () => { 
            const expected = "hello world"
            const input = "3251131343 2543241341"
            const actual = polybius(input, false)
            expect(actual).to.equal(expected)
        })

    })
})
