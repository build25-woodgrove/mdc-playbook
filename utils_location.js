/**
 * Utility 2 functions for handling user data and database operations
 */


/**
 * Logs the current window location to the document
 */
export function logWindowLocation() {
  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    // eslint-disable-next-line no-undef
    document.write(window.location);
  } else {
    console.error('document or window is not defined');
  }
}

/**
 * Generates a random number between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random number
 */
export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Converts a string to title case
 * @param {string} str - Input string
 * @returns {string} - Title-cased string
 */
export function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Checks if a number is prime
 * @param {number} num - Number to check
 * @returns {boolean} - True if prime, false otherwise
 */
export function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Reverses a string
 * @param {string} str - Input string
 * @returns {string} - Reversed string
 */
export function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Calculates the factorial of a number
 * @param {number} num - Input number
 * @returns {number} - Factorial of the number
 */
export function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

/**
 * Finds the maximum value in an array
 * @param {number[]} arr - Array of numbers
 * @returns {number} - Maximum value
 */
export function findMax(arr) {
  return Math.max(...arr);
}

/**
 * Sorts an array of numbers in ascending order
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} - Sorted array
 */
export function sortArray(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}

/**
 * Checks if a string is a palindrome
 * @param {string} str - Input string
 * @returns {boolean} - True if palindrome, false otherwise
 */
export function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

/**
 * Converts a string to kebab case
 * @param {string} str - Input string
 * @returns {string} - Kebab-cased string
 */
export function toKebabCase(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}
