// 1.Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
// "FizzBuzz".


// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the current number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Print "FizzBuzz" if true
    } 
    // Check if the current number is a multiple of 3 (and not 5)
    else if (i % 3 === 0) {
        console.log("Fizz"); // Print "Fizz" if true
    } 
    // Check if the current number is a multiple of 5 (and not 3)
    else if (i % 5 === 0) {
        console.log("Buzz"); // Print "Buzz" if true
    } 
    // If the current number is not a multiple of 3 or 5
    else {
        console.log(i); // Print the current number
    }
}


//2. Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

// Initialize the first two numbers of the Fibonacci sequence
let a = 0;
let b = 1;

// Continue generating Fibonacci numbers while 'a' is less than or equal to 100
while (a <= 100) {
    console.log(a); // Print the current Fibonacci number

    // Update 'a' and 'b' to generate the next Fibonacci number in the sequence
    let temp = a;
    a = b;
    b = temp + b;
}


// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples: 
// 8=> returns true
// 6=> returns false


// Function to check if a number is a power of two
function isPowerTwo(n) {
    // Check if the number is less than 1, in which case it cannot be a power of two
    if (n < 1) {
        return false;
    }

    // Continue looping while 'n' is greater than 1
    while (n > 1) {
        // Check if 'n' is not divisible by 2 (odd number), indicating it's not a power of two
        if (n % 2 !== 0) {
            return false;
        }

        // Divide 'n' by 2 to move towards the base case of 1
        n = n / 2;
    }

    // If the loop completes, 'n' has reached 1, and the original number is a power of two
    return true;
}

// Test cases
console.log(isPowerTwo(2)); // Output: true
console.log(isPowerTwo(8)); // Output: true
console.log(isPowerTwo(9)); // Output: false

// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.
// Examples: 
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"


// Function to capitalize the first letter of each word in a string
function capitalizeWords(inputString) {
    // Split the input string into an array of words using space as a delimiter
    let words = inputString.split(' ');

    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of the current word and concatenate it with the rest of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the modified words back into a string using space as a separator
    return words.join(' ');
}

// Test cases
console.log(capitalizeWords("hi")); // Output: "Hi"
console.log(capitalizeWords("i love programming")); // Output: "I Love Programming"

// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit 
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19.


function reverseInteger(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    return num < 0 ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(500)); // Output: 5
console.log(reverseInteger(-56)); // Output: -65
console.log(reverseInteger(-90)); // Output: -9
console.log(reverseInteger(91));  // Output: 19


//6. Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2


function countVowels(sentence) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Test case
console.log(countVowels("Hello World")); // Output: 3
