// Exercise 2: Array Methods Practice
// Complete all TODO sections using array methods (map, filter, reduce, etc.)
// Do NOT use traditional for loops - practice functional programming!

// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const students = [
  { name: 'Alex', grade: 85, age: 15, passed: true },
  { name: 'Jordan', grade: 92, age: 16, passed: true },
  { name: 'Casey', grade: 58, age: 15, passed: false },
  { name: 'Taylor', grade: 78, age: 16, passed: true },
  { name: 'Morgan', grade: 95, age: 15, passed: true },
];

const products = [
  { name: 'Ball', price: 20, category: 'sports', inStock: true },
  { name: 'Racket', price: 50, category: 'sports', inStock: false },
  { name: 'Shoes', price: 80, category: 'apparel', inStock: true },
  { name: 'Net', price: 30, category: 'sports', inStock: true },
  { name: 'Shirt', price: 25, category: 'apparel', inStock: true },
];

// ========================================
// 1. MAP - Transforming Arrays
// ========================================

// TODO: Use map to double all numbers
// Expected: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
const doubleNumbers = (nums) => {
  return nums.map(x => x*2);
};

// TODO: Use map to get just the student names
// Expected: ['Alex', 'Jordan', 'Casey', 'Taylor', 'Morgan']
const getStudentNames = (students) => {
  // Your code here
  return students.map(x => x.name)
};

// TODO: Use map to add 5 bonus points to each grade
// Return an array of objects with updated grades
const addBonusPoints = (students) => {
  // Your code here
  return students.map(x => x.grade + 5)
};

// ========================================
// 2. FILTER - Selecting Elements
// ========================================

// TODO: Use filter to get only even numbers
// Expected: [2, 4, 6, 8, 10]
const getEvenNumbers = (nums) => {
  // Your code here
  return nums.filter(x => x % 2 === 0);
  
};

// TODO: Use filter to get only passing students (passed === true)
const getPassingStudents = (students) => {
  // Your code here
  return students.filter(student => student.passed === true);
};

// TODO: Use filter to get only products in stock
const getInStockProducts = (products) => {
  // Your code here
  return products.filter(item => item.inStock); 
};

// TODO: Use filter to get students with grade >= 80
const getHighGrades = (students) => {
  // Your code here
  return students.filter(x => x.grade > 80);
};

// ========================================
// 3. REDUCE - Combining Values
// ========================================

// TODO: Use reduce to sum all numbers
// Expected: 55 (1+2+3+...+10)
const sumNumbers = (nums) => {
  // Your code here
};

// TODO: Use reduce to find the maximum number
const findMax = (nums) => {
  // Your code here
};

// TODO: Use reduce to count how many students passed
// Expected: 4
const countPassing = (students) => {
  // Your code here
};

// TODO: Use reduce to calculate the total price of all products
const calculateTotalPrice = (products) => {
  // Your code here
};

// ========================================
// 4. FIND - Searching
// ========================================

// TODO: Use find to get the first number greater than 5
const findFirstLarge = (nums) => {
  return nums.find((num) => num > 5);
};

// TODO: Use find to get the student named 'Jordan'
const findJordan = (students) => {
  // Your code here
  return students.find(student => student.names === 'Jordan')
};

// TODO: Use find to get the first product that costs more than $50
const findExpensiveProduct = (products) => {
  // Your code here
  return products.find(item => item.price > 5);
};

// ========================================
// 5. CHAINING - Combining Methods
// ========================================

// TODO: Get the average grade of all passing students
// Hint: filter passing students, map to get grades, reduce to sum, then divide
const averagePassingGrade = (students) => {
  // Your code here
};

// TODO: Get total price of all in-stock sports products
// Hint: filter by category and inStock, then reduce to sum prices
const totalSportsInStock = (products) => {
  // Your code here
};

// TODO: Get names of students under 16 years old who passed
// Hint: filter by age and passed, then map to get names
const youngPassingStudents = (students) => {
  // Your code here
};

// ========================================
// 6. BONUS CHALLENGES
// ========================================

// TODO: Use some() to check if any student failed
// Return true or false
const anyFailed = (students) => {
  // Your code here
};

// TODO: Use every() to check if all products are in stock
// Return true or false
const allInStock = (products) => {
  // Your code here
};

// TODO: Sort products by price (ascending)
// Return a new sorted array (don't modify original)
const sortByPrice = (products) => {
  // Your code here
};

// ========================================
// TEST YOUR FUNCTIONS
// ========================================


console.log('=== MAP ===');
console.log('Double numbers:', doubleNumbers(numbers));
console.log('Student names:', getStudentNames(students));
console.log('Add bonus points:', addBonusPoints(students));

console.log('\n=== FILTER ===');
console.log('Even numbers:', getEvenNumbers(numbers));
console.log('Passing students:', getPassingStudents(students));
console.log('In stock products:', getInStockProducts(products));
console.log('High grades:', getHighGrades(students));

console.log('\n=== REDUCE ===');
console.log('Sum:', sumNumbers(numbers));
console.log('Max:', findMax(numbers));
console.log('Count passing:', countPassing(students));
console.log('Total price:', calculateTotalPrice(products));

console.log('\n=== FIND ===');
console.log('First large:', findFirstLarge(numbers));
console.log('Find Jordan:', findJordan(students));
console.log('Expensive product:', findExpensiveProduct(products));

console.log('\n=== CHAINING ===');
console.log('Average passing grade:', averagePassingGrade(students));
console.log('Total sports in stock:', totalSportsInStock(products));
console.log('Young passing students:', youngPassingStudents(students));

console.log('\n=== BONUS ===');
console.log('Any failed:', anyFailed(students));
console.log('All in stock:', allInStock(products));
console.log('Sorted by price:', sortByPrice(products));

