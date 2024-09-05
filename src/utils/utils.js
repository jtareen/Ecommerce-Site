export function capitalizeFirstLetters(str) {
    return str
      .split(' ')                     // Split the string into an array of words
      .map(word =>                    // Map each word
        word.charAt(0).toUpperCase() +  // Capitalize the first letter
        word.slice(1).toLowerCase()    // Keep the rest of the word in lowercase
      )
      .join(' ');                     // Join the words back into a string
}