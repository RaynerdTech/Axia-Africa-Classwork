// 1. An array is a way of structuring data in Javascript, it allows us to hold multiple values in one variable.
// Values in an array is in order and each value can be accessed by its index, starting from 0


// 2. Common array methods:
//      filter(): It can create a new array containing only the elements that meet the condition defined by the given function.
//      push(): Adds one or more items to the end of an array and returns the updated length of the array.
//      slice(): Creates a new array by taking a part of the original array. It does this without changing or affecting the original array in any way
//      map(): It goes through each item in an array, applies a function to each one, and then creates a new array with the results from those function calls.
//      forEach(): Executes a provided function once for each array element.


// 3. Dummy data and application of array methods:
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1500 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 800 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 50 },
    { id: 4, name: 'Headphones', category: 'Electronics', price: 200 },
    { id: 5, name: 'Shoes', category: 'Clothing', price: 100 },
];

// Applying filter to get all products in the Electronics category
const electronics = products.filter(product => product.category === 'Electronics');
console.log('Filtered Electronics:', electronics);

// Using push to add a new product to the array
products.push({ id: 6, name: 'Watch', category: 'Accessories', price: 250 });
console.log('After push:', products);

// Using slice to get a portion of the array (first three products)
const firstThreeProducts = products.slice(0, 3);
console.log('First three products:', firstThreeProducts);

// Using map to create a new array of product names
const productNames = products.map(product => product.name);
console.log('Product names:', productNames);

// Using forEach to log each product's name and price
products.forEach(product => {
    console.log(`Product: ${product.name}, Price: ${product.price}`);
});
