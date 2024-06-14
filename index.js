




function countCharacters(str) {
    // Initialize an empty object to store the character counts
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // If the character is not in the object, add it with a count of 1
            charCount[char] = 1;
        }
    }

    // Return the object with character counts
    return charCount;
}

// Example usage:
const inputString = "hello world";
const result = countCharacters(inputString);
console.log(result);