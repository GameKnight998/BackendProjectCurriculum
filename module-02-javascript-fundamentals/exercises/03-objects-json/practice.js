// Exercise 3: Objects and JSON Practice
// Complete all TODO sections

const fs = require('fs');

// ========================================
// 1. Object Basics
// ========================================

// TODO: Create a function that creates a student object
// Return an object with properties: name, age, sport, level
// Example: createStudent("Maya", 14, "soccer", "beginner")
// Returns: { name: "Maya", age: 14, sport: "soccer", level: "beginner" }
const createStudent = (name, age, sport, level) => {
  // Your code here
  const person = {name: name, age: age, sport: sport, level: level};
  return person;
};

// TODO: Create a function that gets a student's full info as a string
// Use template literals
// Example: "Maya is 14 years old and plays soccer at beginner level"
const getStudentInfo = (student) => {
  // Your code here
  // const regex = /(\w+) is (\d+) years old and plays at (\w+)level/;
  // const match = student.match(regex);
  // let person;
  // if (match) {
  //   person = {name: match[1], age: parseInt(match[2]), sport: match[3], level: match[4]}
  // }
  // return person;
  return `${student.name} is ${student.age} years old and plays ${student.sport} at ${student.level} level`;
};

// TODO: Create a function that updates a student's level
// Return a NEW object with the updated level (don't modify the original)
// Hint: Use the spread operator (...)
const updateLevel = (student, newLevel) => {
  // Your code here
  const updated = createStudent(student.name, student.age, student.sport, newLevel)
  return updated;
};

// ========================================
// 2. Object Destructuring
// ========================================

// TODO: Use destructuring to extract name and sport from a student object
// Return a string: "Name plays Sport"
// Example: { name: "Alex", sport: "basketball" } -> "Alex plays basketball"
const getNameAndSport = (student) => {
  // Your code here - use destructuring!
  return `${student.name} plays ${student.sport}`;
};

// TODO: Use destructuring with default values
// Extract name and level, but default level to "beginner" if not present
// Return an object with just those two properties
const getNameAndLevel = (student) => {
  // Your code here - use destructuring with defaults!
  const changed = {name: student.name, level: student.level};
  return changed;
};

// TODO: Use nested destructuring to get the instructor's name from a class object
// Example input: { name: "Soccer 101", instructor: { name: "Coach Lee", experience: 5 } }
// Return: "Coach Lee"
const getInstructorName = (classObj) => {
  // Your code here - use nested destructuring!
  return classObj.instructor.name;
};

// ========================================
// 3. Array Destructuring
// ========================================

// TODO: Use array destructuring to get the first and second students
// Return them as an object: { first: student1, second: student2 }
const getFirstTwo = (students) => {
  // Your code here - use array destructuring!
  const [first, second] = students;
  const object = {first, second};
  return object;
};

// TODO: Use rest operator to get the first student and all the rest
// Return: { first: student1, rest: [all other students] }
const getFirstAndRest = (students) => {
  // Your code here - use array destructuring with rest!
  const [first, ...rest] = students;
  const object = {first, rest};
  return object;
};

// ========================================
// 4. Working with JSON
// ========================================

// TODO: Read the data.json file and parse it
// Return the parsed JavaScript object
const loadData = () => {
  // Your code here
  // Hint: Use fs.readFileSync() and JSON.parse()
  const obj = JSON.parse(data.json)
  return obj;

};

// TODO: Convert a student object to a JSON string
// Use 2 spaces for indentation to make it readable
const studentToJSON = (student) => {
  // Your code here - use JSON.stringify()
  const studentjson = JSON.stringify(student, null, 2);
  return studentjson;
};

// TODO: Parse a JSON string and return the object
const parseStudent = (jsonString) => {
  // Your code here - use JSON.parse()
  
  const obj = JSON.parse(jsonstring)
  return obj;
};

// ========================================
// 5. Object Methods and Properties
// ========================================

// TODO: Get all the property names (keys) from a student object
// Return them as an array
const getStudentProperties = (student) => {
  // Your code here - use Object.keys()
  const properties = Object.keys(student);
  return properties;
};

// TODO: Get all the values from a student object
// Return them as an array
const getStudentValues = (student) => {
  // Your code here - use Object.values()
  const studentvalues = Object.values(student);
  return studentvalues;
};

// TODO: Merge two student objects into one
// The second object's properties should overwrite the first if there are conflicts
// Return a new object (don't modify the originals)
const mergeStudents = (student1, student2) => {
  // Your code here - use spread operator or Object.assign()
  const merge = Object.assign({}, student2, student1);
  return merge;
};

// ========================================
// 6. Working with Real Data
// ========================================

// TODO: Load the data.json file and get all student names
// Return an array of just the names
const getAllStudentNames = async () => {

  // Your code here
  // 1. Load and parse the JSON
  // 2. Map over students to get names
  const fs = require('fs');
  try {
     const data = await fs.readFile('data.json', 'utf8');
   } catch (error) {
     console.error('File not found:', error);
   }
  const students = JSON.parse(data.json);
  const names = students.map((s) => s.name);
  return names;
};

// TODO: Find a student by name from the data.json file
// Return the student object, or null if not found
const findStudentByName = async (name) => {
  // Your code here
  // 1. Load and parse the JSON
  // 2. Use find() to locate the student
  const fs = require('fs');
  try {
     const data = await fs.readFile('data.json', 'utf8');
   } catch (error) {
     console.error('File not found:', error);
   }
  const students = JSON.parse(data.json);
  const student = students.find((n) => n === name);
  return student;
};

// TODO: Get all students enrolled in a specific class
// Return an array of student names
const getStudentsInClass = async (className) => {
  // Your code here
  // 1. Load and parse the JSON
  // 2. Filter students by their enrolledClasses array
  // 3. Map to get just the names
  const fs = require('fs');
  try {
     const data = await fs.readFile('data.json', 'utf8');
   } catch (error) {
     console.error('File not found:', error);
   }
  const students = JSON.parse(data.json);
  const classes = students.map((student) => {
    if(student.enrolledClasses.find( (c) => c === className ) !== undefined) {
      student.name
    }
  });
  return classes;
};

// ========================================
// 7. Data Transformation
// ========================================

// TODO: Create a summary object from the data.json file
// Return: { totalStudents: number, totalClasses: number, sports: [unique sports] }
const getDataSummary = () => {
  // Your code here
  // Hint: Load data, count students/classes, get unique sports

};

// TODO: Get the average age of all students
// Return a number rounded to 1 decimal place
const getAverageAge = () => {
  // Your code here
  // 1. Load data
  // 2. Map to ages
  // 3. Calculate average
  // 4. Round to 1 decimal
};

// TODO: Group students by sport
// Return an object like: { soccer: [...students], basketball: [...students] }
const groupBySport = () => {
  // Your code here
  // 1. Load data
  // 2. Use reduce to group by primary sport
};

// ========================================
// 8. Complex Object Manipulation
// ========================================

// TODO: Add a new student to the data and save it back to the file
// Return true if successful
const addStudent = (studentData) => {
  // Your code here
  // 1. Load existing data
  // 2. Add new student to the students array
  // 3. Convert back to JSON
  // 4. Write to file using fs.writeFileSync()
  // Note: Be careful with this in real code - it modifies the file!
};

// TODO: Create a student report card object
// Input: student object with { name, sport, attendanceRate, skillLevel }
// Output: { name, sport, grade, passed, feedback }
// Grade calculation: attendanceRate >= 80 && skillLevel >= 3 ? "A" : "B"
// Passed: grade === "A" or grade === "B"
// Feedback: passed ? "Great job!" : "Keep practicing!"
const createReportCard = (student) => {
  // Your code here - use destructuring and object creation
};

// ========================================
// TEST YOUR FUNCTIONS
// ========================================


console.log('=== Object Basics ===');
const maya = createStudent("Maya", 14, "soccer", "beginner");
console.log('Created student:', maya);
console.log('Student info:', getStudentInfo(maya));
console.log('Updated level:', updateLevel(maya, "intermediate"));

console.log('\n=== Object Destructuring ===');
console.log('Name and sport:', getNameAndSport(maya));
console.log('Name and level:', getNameAndLevel({ name: "Alex", age: 15 }));
const sampleClass = {
  name: "Soccer 101",
  instructor: { name: "Coach Lee", experience: 5 }
};
console.log('Instructor:', getInstructorName(sampleClass));

console.log('\n=== Array Destructuring ===');
const students = [
  { name: "Alex", sport: "soccer" },
  { name: "Jordan", sport: "basketball" },
  { name: "Casey", sport: "tennis" }
];
console.log('First two:', getFirstTwo(students));
console.log('First and rest:', getFirstAndRest(students));

console.log('\n=== JSON Operations ===');
console.log('Loaded data:', loadData());
console.log('Student as JSON:', studentToJSON(maya));
console.log('Parsed student:', parseStudent('{"name":"Test","age":15}'));

console.log('\n=== Object Methods ===');
console.log('Properties:', getStudentProperties(maya));
console.log('Values:', getStudentValues(maya));
console.log('Merged:', mergeStudents(
  { name: "Alex", age: 15 },
  { age: 16, sport: "soccer" }
));

console.log('\n=== Real Data Operations ===');
console.log('All student names:', getAllStudentNames());
console.log('Find Emma:', findStudentByName("Emma"));
console.log('Students in Basketball Basics:', getStudentsInClass("Basketball Basics"));

console.log('\n=== Data Transformation ===');
console.log('Summary:', getDataSummary());
console.log('Average age:', getAverageAge());
console.log('Grouped by sport:', groupBySport());

console.log('\n=== Complex Operations ===');
const reportData = {
  name: "Alex",
  sport: "soccer",
  attendanceRate: 85,
  skillLevel: 4
};
console.log('Report card:', createReportCard(reportData));

