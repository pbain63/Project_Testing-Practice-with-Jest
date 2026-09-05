# Testing Practice with Jest

A JavaScript testing practice project built with **Jest** as part of
[The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

The purpose of this project is to practice writing unit tests for
JavaScript functions and to become more comfortable with test driven development (TDD), assertions, test cases, and handling edge cases.

---

## About the Project

This project implements and tests five JavaScript exercises:

- **Capitalize** — Capitalizes the first character of a string.
- **Reverse String** — Reverses a given string.
- **Calculator** — Performs basic arithmetic operations.
- **Caesar Cipher** — Shifts alphabetic characters by a specified amount while preserving case and punctuation.
- **Analyze Array** — Analyzes an array of numbers and returns its average, minimum, maximum, and length.

Each implementation has a corresponding Jest test file.

The project follows the assignment requirements from [Project: Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice).

---

## Learning Objectives

Through this project, I practiced:

- Writing unit tests with Jest
- Using Jest's `test()` and `expect()` APIs
- Writing assertions with Jest matchers
- Testing expected behavior
- Testing edge cases
- Testing multiple scenarios for the same function
- Separating implementation code from test code
- Using test failures to identify and fix incorrect behavior
- Understanding the fundamentals of Test Driven Development (TDD)
- Working with npm scripts and development dependencies

---

## Technologies Used

- **JavaScript (ES6+)**
- **Jest**
- **Node.js**
- **npm**
- **Git**
- **GitHub**

---

## Project Structure

```text
Project_Testing-Practice-with-Jest/
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
│
├── capitalize.js
├── capitalize.test.js
│
├── reverseString.js
├── reverseString.test.js
│
├── calculator.js
├── calculator.test.js
│
├── caesarCipher.js
├── caesarCipher.test.js
│
├── analyzeArray.js
└── analyzeArray.test.js
```

Each function has a dedicated implementation file and a corresponding test file:

| Implementation     | Test                    |
| ------------------ | ----------------------- |
| `capitalize.js`    | `capitalize.test.js`    |
| `reverseString.js` | `reverseString.test.js` |
| `calculator.js`    | `calculator.test.js`    |
| `caesarCipher.js`  | `caesarCipher.test.js`  |
| `analyzeArray.js`  | `analyzeArray.test.js`  |

This one to one structure keeps the relationship between production code and its tests easy to understand.

---

## Functions Tested

### 1. `capitalize()`

Takes a string and returns the string with its first character capitalized.

```javascript
capitalize("hello");
// "Hello"
```

The tests verify that the function correctly handles the expected capitalization behavior.

### 2. `reverseString()`

Takes a string and returns the string in reverse order.

```javascript
reverseString("hello");
// "olleh"
```

### 3. `calculator`

Provides four basic arithmetic operations:

- `add`
- `subtract`
- `multiply`
- `divide`

Example:

```javascript
calculator.add(2, 3);
// 5
```

The tests verify that each operation produces the expected result.

### 4. `caesarCipher()`

Encrypts a string by shifting alphabetic characters by a specified amount.

For example:

```javascript
caesarCipher("Hello, World!", 3);
// "Khoor, Zruog!"
```

The tests cover important edge cases including:

- Character shifting
- Wrapping from `z` to `a`
- Uppercase and lowercase characters
- Spaces
- Punctuation
- Non-alphabetic characters

### 5. `analyzeArray()`

Takes an array of numbers and returns an object containing:

- `average`
- `min`
- `max`
- `length`

Example:

```javascript
analyzeArray([1, 8, 3, 4, 2, 6]);

// {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// }
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

You can verify your installation with:

```bash
node --version
npm --version
```

### Installation

1. Clone the repository:

```
git clone https://github.com/pbain63/Project_Testing-Practice-with-Jest.git

```

2. Navigate to the project directory:

```bash
cd Project_Testing-Practice-with-Jest
```

3. Install the project dependencies:

```bash
npm install
```

---

## Running the Tests

Run the complete Jest test suite with:

```bash
npm test
```

Jest will automatically discover the test files and execute the test cases.

You should see a result similar to:

```text
PASS  ./capitalize.test.js
PASS  ./reverseString.test.js
PASS  ./calculator.test.js
PASS  ./caesarCipher.test.js
PASS  ./analyzeArray.test.js
```

The exact output may vary depending on the Jest version and the number of test cases.

---

## Testing Approach

The project uses unit testing to verify individual functions independently.

For each function, the tests focus on:

1. **Expected behavior** — Does the function return the correct result for normal input?
2. **Edge cases** — Does the function behave correctly with unusual or boundary input?
3. **Different input scenarios** — Does the function work correctly with multiple valid inputs?
4. **Requirements from the assignment** — Does the implementation satisfy the specified behavior?

The goal is not simply to make the tests pass, but to understand how tests can define and verify the expected behavior of individual pieces of code.

---

## What I Learned

This project helped me develop a better understanding of:

- The purpose of automated testing
- Unit testing in JavaScript
- Jest's test runner
- Assertions and matchers
- Test organization
- Edge case testing
- Writing tests before or alongside implementation
- Using failing tests to guide implementation
- Separating application logic from verification logic

Most importantly, I learned that testing is not only about checking whether code works. Good tests also document **how a function is expected to behave**.

---

## Assignment

This project was completed as part of:

**The Odin Project: JavaScript Testing Practice**

Assignment:
[https://www.theodinproject.com/lessons/node-path-javascript-testing-practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)

---

## Links

- **Repository:** [https://github.com/pbain63/Project_Testing-Practice-with-Jest](https://github.com/pbain63/Project_Testing-Practice-with-Jest)
- **The Odin Project:** [https://www.theodinproject.com/](https://www.theodinproject.com/)
- **Jest:** [https://jestjs.io/](https://jestjs.io/)

---

## Author

**Prodip Bain**

- GitHub: [https://github.com/pbain63](https://github.com/pbain63)
- LinkedIn: [https://www.linkedin.com/in/prodipbain](https://www.linkedin.com/in/prodipbain)

---

## License

This project was created for educational purposes as part of The Odin Project curriculum.

---
