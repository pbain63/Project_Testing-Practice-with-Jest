function reverseString(string) {
    return [...string].reverse().join("");
    // return string.split("").reverse().join("");
}

// console.log(reverseString("abc de ;) 🌿"));

module.exports = reverseString;
