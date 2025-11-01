// index.ts - Task Manager Application
// Add TypeScript type annotations throughout this file

// : Import the Task and TaskManager interfaces from types.ts
import { Task, TaskManager } from './types';

// : Add type annotation to the manager object
const manager: TaskManager = {
  tasks: [],
  nextId: 1,
};

// ==========================================
// Core Functions - Add Type Annotations
// ==========================================

// : Add type annotations to parameters and return type
// Should return a Task object
function createTask(title: string):Task {
  const task = {
    id: manager.nextId++,
    title: title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  manager.tasks.push(task);
  return task;
}

// : Add return type annotation
// Should return an array of Task objects
function getTasks():Task[] {
  return manager.tasks;
}

// : Add type annotations
// Should return Task | null (null if not found)
function getTaskById(id:number):Task | null {
  const task = manager.tasks.find((t) => t.id === id);
  return task || null;
}

// : Add type annotations
// Should return boolean (true if task was found and updated)
function updateTask(id:number, updates:Task):boolean {
  const task = getTaskById(id);
  if (!task) {
    return false;
  }

  // Update only the properties that are provided
  if (updates.title !== undefined) {
    task.title = updates.title;
  }
  if (updates.completed !== undefined) {
    task.completed = updates.completed;
    if (updates.completed) {
      task.completedAt = new Date().toISOString();
    }
  }

  return true;
}

// : Add type annotations
// Should return boolean (true if task was found and deleted)
function deleteTask(id:number):boolean {
  const index = manager.tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return false;
  }
  manager.tasks.splice(index, 1);
  return true;
}

// : Add type annotations
// Should return boolean (true if task was found and toggled)
function toggleComplete(id:number):boolean{
  const task = getTaskById(id);
  if (!task) {
    return false;
  }

  task.completed = !task.completed;

  if (task.completed) {
    task.completedAt = new Date().toISOString();
  } else {
    // Remove completedAt when uncompleting a task
    delete task.completedAt;
  }

  return true;
}

// ==========================================
// Utility Functions - Add Type Annotations
// ==========================================

// : Add type annotations
// Should take an array of Task objects and return an array of Task objects
function getCompletedTasks(tasks: Task[]):Task[] {
  return tasks.filter((task) => task.completed);
}


// Should take an array of Task objects and return an array of Task objects
function getPendingTasks(tasks: Task[]):Task[] {
  return tasks.filter((task) => !task.completed);
}


// Should take an array of Task objects and return a number
function countCompleted(tasks:Task[]):number {
  return tasks.filter((task) => task.completed).length;
}


// Should take an array of Task objects and return a number
function countPending(tasks:Task[]):number {
  return tasks.filter((task) => !task.completed).length;
}

// Should take a Task object and return a string
function formatTask(task:Task):string {
  const status = task.completed ? "✓" : " ";
  return `[${status}] ${task.id}. ${task.title}`;
}


// Should take an array of Task objects and return void (prints to console)
function printTasks(tasks:Task[]):void {
  if (tasks.length === 0) {
    console.log("  No tasks");
    return;
  }

  tasks.forEach((task) => {
    console.log(`  ${formatTask(task)}`);
  });
}

// ==========================================
// Demo / Testing Code
// ==========================================

function runDemo() {
  console.log("=== Task Manager Demo ===\n");

  // Create some tasks
  console.log("Creating tasks...");
  createTask("Complete Module 3 homework");
  createTask("Review TypeScript lessons");
  createTask("Practice with interfaces");
  createTask("Build a typed project");

  console.log("\nAll tasks:");
  printTasks(getTasks());

  // Complete some tasks
  console.log("\nCompleting tasks 1 and 3...");
  toggleComplete(1);
  toggleComplete(3);

  console.log("\nPending tasks:");
  printTasks(getPendingTasks(getTasks()));

  console.log("\nCompleted tasks:");
  printTasks(getCompletedTasks(getTasks()));

  // Update a task
  console.log("\nUpdating task 2...");
  updateTask(2, { title: "Review ALL TypeScript lessons" });

  console.log("\nAll tasks after update:");
  printTasks(getTasks());

  // Get task by ID
  console.log("\nGetting task by ID (id: 2):");
  const task = getTaskById(2);
  if (task) {
    console.log(`  Found: ${formatTask(task)}`);
    console.log(`  Created: ${task.createdAt}`);
  }

  // Try to get non-existent task
  console.log("\nGetting non-existent task (id: 999):");
  const notFound = getTaskById(999);
  console.log(`  Result: ${notFound}`);

  // Delete a task
  console.log("\nDeleting task 4...");
  const deleted = deleteTask(4);
  console.log(`  Deleted: ${deleted}`);

  console.log("\nFinal task list:");
  printTasks(getTasks());

  // Statistics
  console.log("\n=== Statistics ===");
  const allTasks = getTasks();
  console.log(`Total tasks: ${allTasks.length}`);
  console.log(`Completed: ${countCompleted(allTasks)}`);
  console.log(`Pending: ${countPending(allTasks)}`);
}

// Run the demo
runDemo();

// : Make sure all the code above compiles with no TypeScript errors!
// Run: npm run build
// Then: npm start

// Export functions for testing
// : Make sure these exports have proper types inferred
export {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleComplete,
  getCompletedTasks,
  getPendingTasks,
  countCompleted,
  countPending,
  formatTask,
};
