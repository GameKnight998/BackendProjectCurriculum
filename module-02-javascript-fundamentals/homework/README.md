# Module 02 Homework: CLI Todo Manager

## Assignment Overview

//skip async, instead of doing this, do first 3 exercises

Build a command-line todo manager that stores todos in a JSON file. This project combines everything you've learned: functions, arrays, objects, JSON, and async file operations.

**Difficulty:** ⭐⭐
**Estimated Time:** 3-4 hours

## What You'll Build

A CLI tool that can:
- List all todos
- Add new todos
- Mark todos as complete
- Delete todos
- Filter todos by status (all, active, completed)
- Save all changes to a JSON file

## Learning Objectives

This homework will test your ability to:
- Work with JavaScript objects and arrays
- Use array methods (`map`, `filter`, `find`)
- Read and write JSON files asynchronously
- Handle errors properly
- Structure a complete program
- Parse command-line arguments

## Requirements

### Core Features (Required)

- [ ] **Load todos from JSON file**
  - Read `todos.json` when the program starts
  - Handle the case when the file doesn't exist (start with empty array)
  - Parse JSON correctly

- [ ] **List all todos**
  - Display each todo with its id, title, and status
  - Show todos in a readable format
  - Handle empty todo list gracefully

- [ ] **Add new todos**
  - Create a new todo with unique id
  - Set initial status to "active"
  - Add timestamp for when it was created
  - Save to file after adding

- [ ] **Mark todos as complete**
  - Find todo by id
  - Update its status to "completed"
  - Save changes to file
  - Handle invalid ids gracefully

- [ ] **Delete todos**
  - Find and remove todo by id
  - Save changes to file
  - Handle invalid ids gracefully

- [ ] **Filter todos by status**
  - Show only active todos
  - Show only completed todos
  - Show all todos (default)

- [ ] **Save todos to JSON file**
  - Write pretty-formatted JSON
  - Handle file write errors
  - Confirm successful save

### Data Structure

Each todo should be an object with this structure:
```javascript
{
  id: 1,                           // Unique number
  title: "Complete homework",       // String
  status: "active",                 // "active" or "completed"
  createdAt: "2025-10-08T10:30:00Z" // ISO timestamp
}
```

### Command Format

Your program should support these commands:

```bash
# List all todos
node index.js list

# List only active todos
node index.js list active

# List only completed todos
node index.js list completed

# Add a new todo
node index.js add "Finish homework"

# Mark todo as complete (by id)
node index.js complete 1

# Delete todo (by id)
node index.js delete 1
```

## Starter Code

The `starter/` folder contains:
- `index.js` - Main program with TODO comments
- `data.json` - Sample todos to start with
- `package.json` - Dependencies (none needed!)

## Testing

Run the test suite to check your work:

```bash
# Run all module 2 tests
npm run test:module-02

# Run tests in watch mode (reruns on file change)
npm run test:watch
```

The tests will check:
- Loading todos from file
- Adding new todos with correct structure
- Marking todos as complete
- Deleting todos
- Filtering by status
- Saving changes to file
- Error handling for invalid inputs

## Tips for Success

### Getting Started

1. Read through the entire `index.js` starter code first
2. Complete the helper functions before the command handlers
3. Test each function as you complete it
4. Use `console.log()` to debug as you go

### Working with Files

```javascript
const fs = require('fs').promises;

// Always use try/catch with file operations
try {
  const data = await fs.readFile('todos.json', 'utf8');
  const todos = JSON.parse(data);
} catch (error) {
  // Handle file not found or invalid JSON
  console.error('Error loading todos:', error.message);
}
```

### Generating Unique IDs

```javascript
// Simple approach: find max id and add 1
const maxId = todos.length > 0
  ? Math.max(...todos.map(t => t.id))
  : 0;
const newId = maxId + 1;
```

### Array Methods Cheatsheet

```javascript
// Find todo by id
const todo = todos.find(t => t.id === targetId);

// Filter by status
const active = todos.filter(t => t.status === 'active');

// Remove todo (filter out the one you want to delete)
const updated = todos.filter(t => t.id !== targetId);

// Update todo (map to replace one item)
const updated = todos.map(t =>
  t.id === targetId ? { ...t, status: 'completed' } : t
);
```

### Command Line Arguments

```javascript
// node index.js add "Finish homework"
// process.argv = ['node', 'index.js', 'add', 'Finish homework']

const command = process.argv[2]; // 'add'
const arg = process.argv[3];     // 'Finish homework'
```

## Common Pitfalls

1. **Forgetting await**
   ```javascript
   // WRONG
   const data = fs.readFile('todos.json');

   // RIGHT
   const data = await fs.readFile('todos.json', 'utf8');
   ```

2. **Not handling errors**
   ```javascript
   // WRONG - program crashes if file doesn't exist
   const data = await fs.readFile('todos.json', 'utf8');

   // RIGHT - handle the error
   try {
     const data = await fs.readFile('todos.json', 'utf8');
   } catch (error) {
     console.error('File not found, starting fresh');
     return [];
   }
   ```

3. **Not saving after changes**
   ```javascript
   // After adding, completing, or deleting, always save!
   await saveTodos(todos);
   ```

4. **Modifying the original array**
   ```javascript
   // WRONG - mutates array
   const todo = todos.find(t => t.id === id);
   todo.status = 'completed'; // Changes original!

   // RIGHT - create new object
   const updated = todos.map(t =>
     t.id === id ? { ...t, status: 'completed' } : t
   );
   ```

## Example Output

```bash
$ node index.js list
📋 Todo List (3 todos)
  [1] ⭕ Complete homework
  [2] ⭕ Read chapter 5
  [3] ✅ Practice JavaScript

$ node index.js add "Study for test"
✅ Added: Study for test (id: 4)

$ node index.js complete 1
✅ Marked complete: Complete homework

$ node index.js list active
📋 Active Todos (2)
  [2] ⭕ Read chapter 5
  [4] ⭕ Study for test

$ node index.js delete 2
✅ Deleted: Read chapter 5
```

## Bonus Challenges

If you finish early and want extra practice:

- [ ] Add a `clear` command to delete all completed todos
- [ ] Add timestamps for when todos are completed
- [ ] Add priority levels (low, medium, high)
- [ ] Sort todos by creation date
- [ ] Add todo categories or tags
- [ ] Add a `search` command to find todos by keyword
- [ ] Add color-coded output using `chalk` package
- [ ] Add the ability to edit todo titles

## Submission

When you're done:
1. Make sure all tests pass: `npm run test:module-02`
2. Test your program manually with various commands
3. Commit your changes with a descriptive message
4. Push to your forked repository

## Assessment Criteria

You're ready to move to Module 03 when you can:
- ✅ Load and save JSON files correctly
- ✅ Use array methods appropriately
- ✅ Handle async operations with async/await
- ✅ Handle errors gracefully
- ✅ Pass at least 80% of the tests

## Need Help?

1. Review the lesson files in the `lessons/` folder
2. Check your work against the test output
3. Read error messages carefully - they often tell you what's wrong
4. Use `console.log()` to inspect values
5. Check the [Common Errors Guide](../../../resources/common-errors.md#module-02)
6. Ask questions during office hours

## Resources

- [JavaScript Array Methods](../../../resources/cheatsheets/javascript-reference.md#array-methods)
- [Async/Await Guide](../../lessons/04-async-promises.md)
- [Working with Files in Node.js](../../lessons/03-objects-json.md#reading-and-writing-json-files)

---

**Good luck!** This project will solidify your JavaScript fundamentals and prepare you for TypeScript in the next module. Take your time and make sure you understand each concept - these skills are the foundation for everything that follows.
