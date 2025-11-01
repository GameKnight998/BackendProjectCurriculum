// Exercise 4: Async/Await Practice
// Complete all TODO sections

const fs = require('fs').promises;
const path = require('path');

// ========================================
// 1. Promise Basics
// ========================================

// TODO: Create a function that returns a Promise
// If the input number is positive, resolve with "Positive: {number}"
// If negative, reject with "Negative numbers not allowed"
const checkPositive = (num) => {
  // Your code here - return a new Promise
  return new Promise((resolve, reject) => {
    if (num >= 0) {
      resolve(`Postive: ${num}`)
    }
    else {
      reject("Negative numbers not allowed")
    }
  })
};

// TODO: Create a delay function that resolves after a given number of milliseconds
// This is useful for simulating async operations
// Example: await delay(1000) waits for 1 second
const delay = (ms) => {
  // Your code here - return a Promise that resolves after ms milliseconds
  // Hint: Use setTimeout inside the Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
};

// TODO: Create a function that simulates fetching user data
// After 500ms, resolve with an object: { id, name, age }
const fetchUser = (id) => {
  // Your code here - use delay and return user data
  //return new promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve({id: 1, name: 'tyler', age: 36});

  }, 500)
})
};

// ========================================
// 2. Using Promises with .then() and .catch()
// ========================================

// TODO: Create a function that uses .then() to handle the checkPositive Promise
// Return "Success: {result}" if positive, "Error: {error}" if negative
const handleCheckPositive = (num) => {
  // Your code here - use .then() and .catch()
  checkPositive(num)
    .then((result) => `Success: ${result}`)
    .catch((error) => `Error: ${error}`)
};

// TODO: Chain multiple Promises together
// 1. Fetch user with id
// 2. After getting user, return a string "User {name} is {age} years old"
// Use .then() chaining (not async/await)
const getUserInfo = (id) => {
  // Your code here - use .then() chaining
  userInfo(id)
    .then((info) => `User ${info.name} is ${info.age} years old`)
    .catch((err) => `Error: ${error}`)
};

// ========================================
// 3. Async/Await Basics
// ========================================

// TODO: Convert handleCheckPositive to use async/await instead of .then()
// Use try/catch for error handling
const handleCheckPositiveAsync = async (num) => {
  // Your code here - use async/await with try/catch
  try {
    let result = await checkPositive(num);
    return `Success: ${result}`

  }
  catch (error) {
    return `Error: ${error}`
  }

};

// TODO: Convert getUserInfo to use async/await instead of .then()
const getUserInfoAsync = async (id) => {
  // Your code here - use async/await
  try {
    let info = await userInfo(id)
    return `User ${info.name} is ${info.age} years old`
  }
  catch (err) {
      return `Error: ${err}`
  }
};

// TODO: Create an async function that waits 1 second then returns a greeting
// Use the delay function you created earlier
const asyncGreeting = async (name) => {
  // Your code here
  await delay(1000);
  return "greetings"

};

// ========================================
// 4. Reading Files Asynchronously
// ========================================

// TODO: Read a file asynchronously and return its contents
// Use async/await and proper error handling
// Hint: Use fs.readFile() from the fs.promises module
const readFileAsync = async (filePath) => {
  // Your code here
  try {
    let file = await fs.readFile(filePath)
    return file
  }
  catch(err) {
    return `Error: ${err}`
  }
};

// TODO: Read the data.json file from the previous exercise
// Parse it and return the JavaScript object
// Path: '../03-objects-json/data.json'
const loadStudentData = async () => {
  // Your code here
  // 1. Build the correct file path
  // 2. Read the file
  // 3. Parse the JSON
  // 4. Return the object
  try {
    let file = fs.readFile("../03-objects-json/data.json")
    let object = await JSON.parse(file)
    return object
  }
  catch(err) {
    return `Error: ${err}`
  }
};

// TODO: Read a file that might not exist
// Return the contents if it exists, or "File not found" if it doesn't
// Don't let the error crash the program
const safeReadFile = async (filePath) => {
  // Your code here - use try/catch to handle the error
  try {
    let file = fs.readFile(filePath)
  }
  catch(err) {
    return `Error: ${err}`
  }
};

// ========================================
// 5. Writing Files Asynchronously
// ========================================

// TODO: Write data to a file asynchronously
// Convert the data to JSON with 2-space indentation
const writeJSONFile = async (filePath, data) => {
  // Your code here
  // 1. Convert data to JSON string
  // 2. Write to file using fs.writeFile()
  // 3. Return true if successful, false if error
  try {
    let jsonString = JSON.stringify(data);
    await fs.writeFile(filePath, jsonString, 2)

  }
};

// TODO: Append a message to a log file
// Create the file if it doesn't exist
const appendToLog = async (message) => {
  // Your code here
  const logPath = path.join(__dirname, 'activity.log');
  // Use fs.appendFile() to add the message with a timestamp
};

// ========================================
// 6. Parallel Async Operations
// ========================================

// TODO: Fetch multiple users in parallel using Promise.all()
// Return an array of user objects
const fetchMultipleUsers = async (ids) => {
  // Your code here
  // Hint: Map the ids to fetchUser calls, then use Promise.all()
};

// TODO: Read multiple files in parallel
// Return an object with filenames as keys and contents as values
const readMultipleFiles = async (filePaths) => {
  // Your code here
  // Use Promise.all() to read all files at once
};

// TODO: Get the average age of all students from the data file
// This combines file reading with data processing
const getAverageStudentAge = async () => {
  // Your code here
  // 1. Load student data
  // 2. Calculate average age
  // 3. Return the average rounded to 1 decimal
};

// ========================================
// 7. Sequential vs Parallel Operations
// ========================================

// TODO: Execute operations sequentially (one after another)
// Log timestamps to show the order
const sequentialOperations = async () => {
  // Your code here
  console.log('Starting sequential operations...');
  // Use await for each operation one at a time
  // This should take about 3 seconds total
};

// TODO: Execute operations in parallel (all at once)
// Compare the execution time with sequential
const parallelOperations = async () => {
  // Your code here
  console.log('Starting parallel operations...');
  // Use Promise.all() to run operations together
  // This should take about 1 second total
};

// ========================================
// 8. Error Handling Patterns
// ========================================

// TODO: Create a function that retries an operation up to 3 times
// If it fails 3 times, throw the error
const retryOperation = async (operation, maxRetries = 3) => {
  // Your code here
  // Use a loop to retry the operation
  // Catch errors and retry until maxRetries is reached
};

// TODO: Create a function with a timeout
// If the operation takes longer than timeoutMs, reject with "Timeout"
const withTimeout = async (promise, timeoutMs) => {
  // Your code here
  // Hint: Use Promise.race() with the promise and a timeout promise
};

// TODO: Handle multiple operations and return results even if some fail
// Return an array of objects: { status: 'success'|'error', value|reason }
const settleAllOperations = async (promises) => {
  // Your code here
  // Hint: Use Promise.allSettled()
};

// ========================================
// 9. Real-World Async Patterns
// ========================================

// TODO: Simulate a data processing pipeline
// 1. Load student data from file
// 2. Filter students by sport
// 3. Transform the data (map to simplified objects)
// 4. Write results to a new file
const processStudentsBySport = async (sport) => {
  // Your code here
};

// TODO: Create a function that processes items in batches
// Process 3 items at a time to avoid overwhelming the system
const processBatch = async (items, batchSize = 3) => {
  // Your code here
  // Process items in chunks, waiting for each batch to complete
  // before starting the next batch
};

// TODO: Implement a simple cache for async operations
// If the same id is requested within 5 seconds, return cached data
// Otherwise, fetch new data
const cachedFetchUser = (() => {
  const cache = new Map();

  return async (id) => {
    // Your code here
    // Check cache for recent data
    // If found and not expired, return cached data
    // Otherwise, fetch new data and cache it
  };
})();

// ========================================
// 10. Combining Everything
// ========================================

// TODO: Create a complete student report system
// 1. Load all student data
// 2. For each student, simulate fetching their attendance (delay 100ms)
// 3. Calculate a grade based on attendance and skill level
// 4. Write the report to 'student-report.json'
// Use parallel operations where possible for performance
const generateStudentReport = async () => {
  // Your code here
  // This combines file reading, parallel operations, data transformation,
  // and file writing
};

// ========================================
// TEST YOUR FUNCTIONS
// ========================================

/*
// Test Promise Basics
console.log('=== Promise Basics ===');
checkPositive(5)
  .then(result => console.log('Positive result:', result))
  .catch(error => console.log('Error:', error));

checkPositive(-5)
  .then(result => console.log('Positive result:', result))
  .catch(error => console.log('Error:', error));

// Test Async/Await
(async () => {
  console.log('\n=== Async/Await ===');
  console.log(await handleCheckPositiveAsync(10));
  console.log(await asyncGreeting('Alex'));

  console.log('\n=== File Operations ===');
  const data = await loadStudentData();
  console.log('Loaded students:', data.students.length);

  console.log('\n=== Parallel Operations ===');
  const users = await fetchMultipleUsers([1, 2, 3]);
  console.log('Fetched users:', users);

  console.log('\n=== Sequential vs Parallel ===');
  const start1 = Date.now();
  await sequentialOperations();
  console.log('Sequential took:', Date.now() - start1, 'ms');

  const start2 = Date.now();
  await parallelOperations();
  console.log('Parallel took:', Date.now() - start2, 'ms');

  console.log('\n=== Real World ===');
  await processStudentsBySport('soccer');
  console.log('Processed students by sport');

  await generateStudentReport();
  console.log('Generated student report');
})();
*/
