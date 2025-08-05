// 03-task-manager/starter/arrayMethodsPractice.js
// Array Methods Practice - Week 5 Optional Assignment

// Sample data for all challenges
const names = [
    'Dimitry SantiAgo',
    'Carlos d. Perez',
    'tam  person',
    'Mariana Gomez',
    'Amy You'
];

console.log('Original names:', names);

// CHALLENGE 1: Get everyone's last name
// Create a new array with only each person's last name
// Expected output: ['SantiAgo', 'Perez', 'person', 'Gomez', 'You']
const everyonesLastName = names.map((name) => {
    // Split the name by spaces
    const words = name.split(' ');
    // Get the last element (last name)
    return words[words.length - 1];
});
console.log('Challenge 1 - Last names:', everyonesLastName);


// CHALLENGE 2: Filter names with correct format
// Filter to keep only names that match the format "<first> <last>" (single space)
// Should remove 'tam  person' (double space)
// Expected output: ['Dimitry SantiAgo', 'Carlos d. Perez', 'Mariana Gomez', 'Amy You']
const correctFormatNames = names.filter((name) => {
    // Use regex to match: word characters, single space, word characters
    const correctFormat = /^\w+ \w+$/;
    return correctFormat.test(name);
});
console.log('Challenge 2 - Correct format:', correctFormatNames);


// CHALLENGE 3: Convert to Title Case
// Convert all names to Title Case (First Letter Of Each Word Uppercase)
// Expected output: ['Dimitry Santiago', 'Carlos D. Perez', 'Tam  Person', 'Mariana Gomez', 'Amy You']
const titleCaseNames = names.map((name) => {
    // Split name into words
    const words = name.split(' ');

    // Capitalize first letter of each word, lowercase the rest
    const titleCaseWords = words.map(word => {
        if (word.length === 0) return word; // Handle empty strings
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join words back together
    return titleCaseWords.join(' ');
});
console.log('Challenge 3 - Title case:', titleCaseNames);


// CHALLENGE 4: Combined challenge
// 1. Remove names with wrong format (not "firstname lastname" with single space)
// 2. Convert remaining names to Title Case
// 3. Remove people whose last name ends with 'z'
// 4. Create a message for each remaining person
// Expected: Messages for 'Dimitry Santiago' and 'Amy You' only
const finalChallenge = names
    .filter((name) => {
        // Filter correct format (single space between two words)
        const correctFormat = /^\w+ \w+$/;
        return correctFormat.test(name);
    })
    .map((name) => {
        // Convert to title case
        const words = name.split(' ');
        const titleCaseWords = words.map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
        return titleCaseWords.join(' ');
    })
    .filter((name) => {
        // Remove last names ending with 'z'
        const lastName = name.split(' ').pop();
        return !lastName.toLowerCase().endsWith('z');
    })
    .map((name) => {
        // Create signup message
        return `Dear ${name}, please sign up for our newsletter!`;
    });
console.log('Challenge 4 - Final result:', finalChallenge);


// BONUS: Using reduce
// Count total characters in all last names
const totalLastNameChars = names.reduce((total, name) => {
    // Get last name
    const words = name.split(' ');
    const lastName = words[words.length - 1];
    // Add its length to the running total
    return total + lastName.length;
}, 0);
console.log('Bonus - Total characters in last names:', totalLastNameChars);
