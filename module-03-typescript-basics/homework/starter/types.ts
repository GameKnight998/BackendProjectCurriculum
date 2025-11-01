// types.ts - Type Definitions for Task Manager
// Complete the interface definitions below

// TODO: Define the Task interface
// A Task should have:
// - id: number (unique identifier)
// - title: string (task description)
// - completed: boolean (whether the task is done)
// - createdAt: string (ISO date string when created)
// - completedAt?: string (optional - ISO date string when completed)

export interface Task {
  // Your properties here
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
}

// TODO: Define the TaskManager interface
// A TaskManager should have:
// - tasks: array of Task objects
// - nextId: number (for generating new task IDs)

export interface TaskManager {
  // Your properties here
  tasks: Task[];
  nextId: number;
}

// BONUS: If you want to add more types, you can define them here
// For example: type TaskStatus = "pending" | "completed";
