// Exercise 1: Basic Types Practice
// Add type annotations where indicated by TODO comments

// ==========================================
// SECTION 1: Basic Type Annotations
// ==========================================

// TODO: Add type annotation for studentName
const studentName = "Jordan Smith";

// TODO: Add type annotation for studentAge
const studentAge = 14;

// TODO: Add type annotation for isEnrolled
const isEnrolled = true;

console.log(`Student: ${studentName}, Age: ${studentAge}, Enrolled: ${isEnrolled}`);

// ==========================================
// SECTION 2: Number Types
// ==========================================

// TODO: Add type annotations to these variables
const classPrice: number = 49.99;
const maxStudents: number = 12;
const currentEnrollment: number = 8;

// Calculate available spots
const availableSpots: number = maxStudents - currentEnrollment;
console.log(`Available spots: ${availableSpots} out of ${maxStudents}`);

// ==========================================
// SECTION 3: Arrays
// ==========================================

// TODO: Add type annotation for array of student names
const studentNames:string[] = ["Alex", "Jordan", "Casey", "Riley"];

// TODO: Add type annotation for array of test scores
const testScores:number[] = [95, 87, 92, 88, 90];

// TODO: Add type annotation for array of flags
const attendanceRecord:boolean[] = [true, true, false, true, true];

console.log(`Number of students: ${studentNames.length}`);
console.log(`First student: ${studentNames[0]}`);
console.log(`Highest score: ${Math.max(...testScores)}`);

// ==========================================
// SECTION 4: Type Inference vs Explicit Types
// ==========================================

// These variables use type inference - TypeScript figures out the type
const inferredString = "Hello"; // TypeScript knows this is a string
const inferredNumber = 42; // TypeScript knows this is a number
const inferredBoolean = false; // TypeScript knows this is a boolean

// TODO: Declare these variables with EXPLICIT types (don't assign value yet)
// Then assign the value on the next line
let schoolName:string;
schoolName = "Springfield Middle School";

let numberOfClasses:number;
numberOfClasses = 5;

let hasGym:boolean;
hasGym = true;

console.log(`${schoolName} offers ${numberOfClasses} classes`);

// ==========================================
// SECTION 5: Null and Undefined
// ==========================================

// TODO: Add type annotation that allows this to be a string OR null
let parentEmail: string | null = null;
parentEmail = "parent@example.com";

// TODO: Add type annotation that allows this to be a number OR undefined
let phoneNumber: number | undefined;
phoneNumber = 5551234;

console.log(`Parent email: ${parentEmail}`);
console.log(`Phone: ${phoneNumber}`);

// ==========================================
// SECTION 6: Fix Type Errors
// ==========================================

// TODO: Fix the type errors below by changing the VALUES (not the types)
// Each variable has a type annotation, but the value doesn't match

const studentId: number = 12345; // Fix: should be a number
const className: string = "101"; // Fix: should be a string
const isPaid: boolean = true; // Fix: should be a boolean
const grades: number[] = [90, 85, 92, 88]; // Fix: all elements should be numbers

// ==========================================
// SECTION 7: Practical Example
// ==========================================

// Sports coaching platform student data
// TODO: Add appropriate type annotations to all variables below

const coachName:string = "Coach Taylor";
const sport:string = "Basketball";
const yearsExperience:number = 15;
const isHeadCoach:boolean = true;
const specializations:string[] = ["Defense", "Shooting", "Conditioning"];
const rating:number = 4.8;

// TODO: Add type annotation for this array of student IDs
const enrolledStudents:number[] = [1001, 1002, 1003, 1004, 1005];

console.log("\n=== Coach Profile ===");
console.log(`Name: ${coachName}`);
console.log(`Sport: ${sport}`);
console.log(`Experience: ${yearsExperience} years`);
console.log(`Head Coach: ${isHeadCoach}`);
console.log(`Rating: ${rating}/5.0`);
console.log(`Specializations: ${specializations.join(", ")}`);
console.log(`Number of students: ${enrolledStudents.length}`);

// ==========================================
// SECTION 8: Challenge - Union Types
// ==========================================

// BONUS: Can you figure out how to make a variable that accepts EITHER a string OR a number?
// Hint: Use the | (pipe) symbol between types

// TODO: Add a type annotation that allows EITHER string OR number
const userId = 12345; // Could be a number
// const userId = "USER_12345"; // Or could be a string

console.log(`User ID: ${userId}`);

// ==========================================
// Final Check
// ==========================================

console.log("\nIf you see this message with no errors, you've completed the exercise!");
