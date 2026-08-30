const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function shiftCharacter(character, shiftFactor) {
  let alphabet;

  if (lowercaseAlphabet.includes(character)) {
    alphabet = lowercaseAlphabet;
  } else if (uppercaseAlphabet.includes(character)) {
    alphabet = uppercaseAlphabet;
  } else {
    return character;
  }

  const index = alphabet.indexOf(character);
  const shiftIndex = (index + shiftFactor) % alphabet.length;

  return alphabet[shiftIndex];
}

function caesarCipher(string, shiftFactor) {
  return string
    .split("")
    .map((character) => shiftCharacter(character, shiftFactor))
    .join("");
}

module.exports = caesarCipher;
