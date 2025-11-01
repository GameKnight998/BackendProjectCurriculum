// Exercise 3: Typed Functions Practice

// ==========================================
// SECTION 1: Basic Function Typing
// ==========================================

// TODO: Add parameter and return type annotations to these functions

function addNumbers(a:number, b:number):number {
  return a + b;
}

function multiplyNumbers(a:number, b:number):number {
  return a * b;
}

function greetStudent(name:string):string {
  return `Hello, ${name}! Welcome to class.`;
}

// Test the functions
console.log("=== Basic Functions ===");
console.log(`5 + 3 = ${addNumbers(5, 3)}`);
console.log(`5 * 3 = ${multiplyNumbers(5, 3)}`);
console.log(greetStudent("Jordan"));

// ==========================================
// SECTION 2: Void Return Type
// ==========================================

// TODO: Add type annotations to these functions that don't return anything
// Use 'void' as the return type

function logMessage(message:string):void{
  console.log(`[LOG] ${message}`);
}

function printStudentInfo(name:string, age:number, grade:number):void {
  console.log(`Student: ${name}`);
  console.log(`  Age: ${age}`);
  console.log(`  Grade: ${grade}`);
}

// Test
console.log("\n=== Void Functions ===");
logMessage("System started");
printStudentInfo("Alex", 14, 8);

// ==========================================
// SECTION 3: Optional Parameters
// ==========================================

// TODO: Add type annotations
// Make 'title' an optional parameter (use ?)
function formatName(firstName:string, lastName:string, title?:string):string {
  if (title) {
    return `${title} ${firstName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}

// TODO: Add type annotations
// Make 'message' an optional parameter
function sendNotification(userId:number, message?:string):void {
  if (message) {
    console.log(`Notification to user ${userId}: ${message}`);
  } else {
    console.log(`Default notification sent to user ${userId}`);
  }
}

console.log("\n=== Optional Parameters ===");
console.log(formatName("John", "Smith", "Dr."));
console.log(formatName("Jane", "Doe"));
sendNotification(101, "Your class starts in 10 minutes");
sendNotification(102);

// ==========================================
// SECTION 4: Default Parameters
// ==========================================

// TODO: Add type annotations
// Give 'taxRate' a default value of 0.08
function calculateTotal(price:number, taxRate:number = 0.08):number {
  return price * (1 + taxRate);
}

// TODO: Add type annotations
// Give 'prefix' a default value of "Student"
function generateId(number:number, prefix?:string):string {
  return `${prefix}-${number}`;
}

console.log("\n=== Default Parameters ===");
console.log(`Total with default tax: $${calculateTotal(100).toFixed(2)}`);
console.log(`Total with custom tax: $${calculateTotal(100, 0.10).toFixed(2)}`);
console.log(generateId(1001));
console.log(generateId(2001, "INSTRUCTOR"));

// ==========================================
// SECTION 5: Functions with Arrays
// ==========================================

// TODO: Add type annotations
// Parameter should be an array of numbers
function calculateAverage(numbers:number[]):number {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// TODO: Add type annotations
// Parameter should be an array of strings
function countNames(names:string[]):number {
  return names.length;
}

// TODO: Add type annotations
// Should take an array of numbers and return a number
// function findMax(numbers:number[]):number {
//   return Math.max(...numbers);
// }

// const testScores = [95, 87, 92, 88, 90];
// const studentNames = ["Alex", "Jordan", "Casey", "Riley"];

// console.log("\n=== Array Functions ===");
// console.log(`Average score: ${calculateAverage(testScores)}`);
// console.log(`Number of students: ${countNames(studentNames)}`);
// console.log(`Highest score: ${findMax(testScores)}`);


// ==========================================
// SECTION 6: Arrow Functions
// ==========================================

// TODO: Add type annotations to these arrow functions

const square = (n:number) => n * n;

const isEven = (n) => n % 2 === 0;

const getFullName = (first, last) => `${first} ${last}`;

const repeatString = (str, times) => str.repeat(times);

console.log("\n=== Arrow Functions ===");
console.log(`Square of 5: ${square(5)}`);
console.log(`Is 10 even? ${isEven(10)}`);
console.log(`Full name: ${getFullName("Alex", "Chen")}`);
console.log(`Repeat: ${repeatString("Ha", 3)}`);

// ==========================================
// SECTION 7: Functions with Interfaces
// ==========================================

// TODO: Define these interfaces first

// Student interface with:
// - id: number
// - name: string
// - grade: number
// - gpa: number

// Class interface with:
// - id: number
// - name: string
// - maxStudents: number
// - enrolled: number

// TODO: Add type annotations using the interfaces you defined

function getStudentInfo(student) {
  return `${student.name} (Grade ${student.grade}) - GPA: ${student.gpa}`;
}

function isClassFull(classInfo) {
  return classInfo.enrolled >= classInfo.maxStudents;
}

function canEnroll(student, classInfo) {
  // Students must have GPA >= 2.0 and class must have space
  return student.gpa >= 2.0 && !isClassFull(classInfo);
}

// Test with sample data
const sampleStudent = {
  id: 1001,
  name: "Jordan Smith",
  grade: 8,
  gpa: 3.5
};

const sampleClass = {
  id: 201,
  name: "Advanced Basketball",
  maxStudents: 12,
  enrolled: 10
};

console.log("\n=== Interface Functions ===");
console.log(getStudentInfo(sampleStudent));
console.log(`Class full? ${isClassFull(sampleClass)}`);
console.log(`Can enroll? ${canEnroll(sampleStudent, sampleClass)}`);

// ==========================================
// SECTION 8: Functions Returning null
// ==========================================

// TODO: Add type annotations
// Return type should be Student | null (might return null if not found)
function findStudentById(students, id) {
  const found = students.find(s => s.id === id);
  return found || null;
}

// TODO: Add type annotations
// Return type should be number | undefined
function getFirstScore(scores) {
  return scores[0];
}

const allStudents = [
  { id: 1001, name: "Alex", grade: 8, gpa: 3.2 },
  { id: 1002, name: "Jordan", grade: 9, gpa: 3.8 }
];

console.log("\n=== Nullable Returns ===");
const found = findStudentById(allStudents, 1001);
if (found) {
  console.log(`Found: ${found.name}`);
}

const notFound = findStudentById(allStudents, 9999);
console.log(`Not found: ${notFound}`);

// ==========================================
// SECTION 9: Write Your Own Functions
// ==========================================

// TODO: Write a function called 'calculateDiscount'
// - Takes price (number) and discount percentage (number, optional, default 10)
// - Returns the discounted price (number)
// - Example: calculateDiscount(100, 20) should return 80

// Your function here:

// TODO: Write a function called 'enrollStudent'
// - Takes student (Student interface) and classId (number)
// - Logs a message (returns void)
// - Message: "Enrolled {student.name} in class {classId}"

// Your function here:

// TODO: Write a function called 'filterPassingStudents'
// - Takes an array of Students
// - Returns an array of Students with GPA >= 2.0

// Your function here:

// Test your functions
console.log("\n=== Your Functions ===");
// Uncomment these when you've written the functions:
// console.log(`Discounted price: $${calculateDiscount(100, 25)}`);
// enrollStudent(sampleStudent, 201);
// const passing = filterPassingStudents(allStudents);
// console.log(`Passing students: ${passing.length}`);

// ==========================================
// SECTION 10: Function Type Aliases (Bonus)
// ==========================================

// TODO: Define a type alias for a math operation function
// Should take two numbers and return a number
// type MathOperation = ???

// TODO: Create three functions that match the MathOperation type
// const add: MathOperation = ???
// const subtract: MathOperation = ???
// const divide: MathOperation = ???

// TODO: Write a function that takes a MathOperation and two numbers
// function calculate(operation: ???, a: ???, b: ???): ??? {
//   return operation(a, b);
// }

// Test (uncomment when ready):
// console.log("\n=== Function Type Aliases ===");
// console.log(`Add: ${calculate(add, 10, 5)}`);
// console.log(`Subtract: ${calculate(subtract, 10, 5)}`);
// console.log(`Divide: ${calculate(divide, 10, 5)}`);

console.log("\n=== Exercise Complete ===");
console.log("Great job adding types to functions!");
console.log("Make sure all sections compile without errors.");
