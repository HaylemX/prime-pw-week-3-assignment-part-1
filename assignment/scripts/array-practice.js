console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods

let favoriteFoods = ['pizza', 'soup', 'pasta', 'hamburger'];

console.log('Favorite foods are: ', favoriteFoods);

console.log('Number of foods:', favoriteFoods.length);

console.log('First food is', favoriteFoods[0]);

favoriteFoods.push('Bacon');
console.log('Added bacon to the end, ', favoriteFoods);

let removedFoods = favoriteFoods.pop();
console.log('Removed the last food', removedFoods);
console.log('Favorite foods are now, ', favoriteFoods);

favoriteFoods.unshift('Grapes');
console.log(`Added a favorite foods to beginning: ${favoriteFoods}`);

removedFoods = favoriteFoods.shift();
console.log('Removed the first food', removedFoods);
console.log('The favorite foods are now', favoriteFoods);







// 1.b. TODO: Log your array of foods to the console with a message, similar
//      to the example above



// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array





// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array


// 3.b. TODO: Log the last animal in the array using it's array index


// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item



// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array



// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array


// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array
