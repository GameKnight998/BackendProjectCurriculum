// Exercise 2: Interfaces for Sports Coaching Platform

// ==========================================
// SECTION 1: Define User Interface
// ==========================================

// TODO: Define a User interface with the following properties:
// - id: number
// - firstName: string
// - lastName: string
// - email: string
// - role: string (can be "student", "parent", "instructor", or "admin")
// - phoneNumber: string (OPTIONAL - use ? to make it optional)

// Your interface here:
interface User {
  id: number,
  firstName: string,
  lastname: string,
  email: string,
  role: "student" | "parent" | "instructor" | "admin",
  phoneNumber?: string,
}
// ==========================================
// SECTION 2: Create User Objects
// ==========================================

// TODO: Create a student user object that matches the User interface
const student: User = {
  // Fill in the properties
  id: 2,
  firstName: "Joe",
  lastname: "Smith",
  email: "joe.smith@gmail.com",
  role: "student",
  phoneNumber:
};

// TODO: Create an instructor user object that matches the User interface
// Include the optional phoneNumber for this one
const instructor = {
  // Fill in the properties
};

console.log("=== Users ===");
console.log(`Student: ${student.firstName} ${student.lastName}`);
console.log(`Instructor: ${instructor.firstName} ${instructor.lastName}`);

// ==========================================
// SECTION 3: Define Class Interface
// ==========================================

// TODO: Define a Class interface with the following properties:
// - id: number (readonly - can't be changed after creation)
// - name: string
// - sport: string
// - instructorId: number
// - maxStudents: number
// - currentEnrollment: number
// - schedule: string
// - price: number

// Your interface here:

// ==========================================
// SECTION 4: Create Class Objects
// ==========================================

// TODO: Create a basketball class object that matches the Class interface
const basketballClass = {
  // Fill in the properties
  // Example: "Youth Basketball - Beginner"
};

// TODO: Create a soccer class object that matches the Class interface
const soccerClass = {
  // Fill in the properties
};

console.log("\n=== Classes ===");
console.log(`${basketballClass.name} - $${basketballClass.price}`);
console.log(`  Instructor ID: ${basketballClass.instructorId}`);
console.log(`  Enrollment: ${basketballClass.currentEnrollment}/${basketballClass.maxStudents}`);
console.log(`  Schedule: ${basketballClass.schedule}`);

// ==========================================
// SECTION 5: Define Enrollment Interface
// ==========================================

// TODO: Define an Enrollment interface with the following properties:
// - id: number
// - studentId: number
// - classId: number
// - enrollmentDate: string (we'll use strings for dates for now)
// - isPaid: boolean
// - paymentDate: string (OPTIONAL)

// Your interface here:

// ==========================================
// SECTION 6: Create Enrollment Objects
// ==========================================

// TODO: Create two enrollment objects
const enrollment1 = {
  // A paid enrollment with a payment date
};

const enrollment2 = {
  // An unpaid enrollment (no payment date)
};

console.log("\n=== Enrollments ===");
console.log(`Enrollment ${enrollment1.id}: Student ${enrollment1.studentId} → Class ${enrollment1.classId}`);
console.log(`  Paid: ${enrollment1.isPaid}`);

// ==========================================
// SECTION 7: Functions with Interfaces
// ==========================================

// TODO: Add type annotations to this function
// It should take a User parameter and return a string
function getUserFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

// TODO: Add type annotations to this function
// It should take a Class parameter and return a boolean
function hasAvailableSpots(classObj) {
  return classObj.currentEnrollment < classObj.maxStudents;
}

// TODO: Add type annotations to this function
// It should take an Enrollment parameter and return a string
function getEnrollmentStatus(enrollment) {
  if (enrollment.isPaid) {
    return `Paid on ${enrollment.paymentDate}`;
  }
  return "Payment pending";
}

// Test the functions
console.log("\n=== Function Tests ===");
console.log(`Full name: ${getUserFullName(student)}`);
console.log(`Basketball class has spots: ${hasAvailableSpots(basketballClass)}`);
console.log(`Enrollment 1 status: ${getEnrollmentStatus(enrollment1)}`);

// ==========================================
// SECTION 8: Arrays of Interfaces
// ==========================================

// TODO: Add type annotation for array of User objects
const allUsers = [student, instructor];

// TODO: Add type annotation for array of Class objects
const allClasses = [basketballClass, soccerClass];

// TODO: Add type annotation for array of Enrollment objects
const allEnrollments = [enrollment1, enrollment2];

// TODO: Write a function that takes an array of Class objects
// and returns the total number of enrolled students
function getTotalEnrollment(classes) {
  let total = 0;
  for (const classObj of classes) {
    total += classObj.currentEnrollment;
  }
  return total;
}

console.log(`\nTotal enrollment across all classes: ${getTotalEnrollment(allClasses)}`);

// ==========================================
// SECTION 9: Nested Interfaces (Challenge)
// ==========================================

// TODO: Define an Address interface with:
// - street: string
// - city: string
// - state: string
// - zipCode: string

// Your interface here:

// TODO: Define a UserWithAddress interface that includes:
// - All properties from User (you can use "extends User")
// - address: Address (the interface you just created)

// Your interface here:

// TODO: Create a user object with an address
const userWithAddress = {
  // Fill in all User properties plus address
};

console.log("\n=== User with Address ===");
console.log(`${userWithAddress.firstName} ${userWithAddress.lastName}`);
console.log(`${userWithAddress.address.city}, ${userWithAddress.address.state}`);

// ==========================================
// SECTION 10: Interface Type Checking
// ==========================================

// Uncomment these one at a time to see TypeScript catch errors

// Missing required property
// const invalidUser: User = {
//   id: 999,
//   firstName: "Test",
//   // Missing other required properties!
// };

// Wrong type
// const invalidClass: Class = {
//   id: 999,
//   name: "Test Class",
//   sport: "Tennis",
//   instructorId: "not a number", // Should be number!
//   maxStudents: 10,
//   currentEnrollment: 0,
//   schedule: "TBD",
//   price: 50
// };

// Extra property not in interface
// const invalidEnrollment: Enrollment = {
//   id: 999,
//   studentId: 1,
//   classId: 1,
//   enrollmentDate: "2025-01-01",
//   isPaid: true,
//   extraProperty: "This shouldn't be here" // Not in interface!
// };

console.log("\nIf you see this message with no errors, great job!");
console.log("Now try uncommenting the invalid examples above to see TypeScript catch errors.");
