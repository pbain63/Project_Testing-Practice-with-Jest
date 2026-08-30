function caesarCipher(string, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return string
    .split("")
    .map((character) => {
      const index = alphabet.indexOf(character);

      if (index === -1) {
        return character;
      }

      const shiftIndex = (index + shiftFactor) % alphabet.length;

      return alphabet[shiftIndex];
    })
    .join("");
}

module.exports = caesarCipher;

// function caesarCipher(str, shift) {
//     // Normalize shift to handle negative numbers and values > 26
//     const normalizedShift = (shift % 26 + 26) % 26;

//     return str.split('').map(char => {
//       const code = char.charCodeAt(0);

//       // Uppercase letters (A-Z: 65-90)
//       if (code >= 65 && code <= 90) {
//         return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
//       }

//       // Lowercase letters (a-z: 97-122)
//       if (code >= 97 && code <= 122) {
//         return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
//       }

//       // Leave numbers, punctuation, and spaces unchanged
//       return char;
//     }).join('');
//   }

// //   // Example Usage:
// //   const original = "Hello, World!";
// //   const shifted = shiftCipher(original, 3);
// //   console.log(shifted); // "Khoor, Zruog!"

// //   const decoded = shiftCipher(shifted, -3);
// //   console.log(decoded); // "Hello, World!"

// // console.log();
