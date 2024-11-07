import fs from "fs";
import path from "path";
import { Todo } from "../types/todo";

const DB_FILE = path.resolve(__dirname, "../db/db.json");

function readTodosFromFile(): Todo[] {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data).todos;
}

function writeTodosToFile(todos: Todo[]): void {
  fs.writeFileSync(DB_FILE, JSON.stringify({ todos }, null, 2), "utf-8");
}

export const TodoModel = {
  getAll: (): Todo[] => readTodosFromFile(),
  add: (content: string, isComplete: boolean = false): Todo => {
    const todos = readTodosFromFile();
    const newTodo: Todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      content,
      isComplete,
    };
    todos.push(newTodo);
    writeTodosToFile(todos);
    return newTodo;
  },
  update: (id: number): Todo | null => {
    const todos = readTodosFromFile();
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.isComplete = !todo.isComplete;
      writeTodosToFile(todos);
      return todo;
    }
  },
  delete: (id: number): Todo | null => {
    const todos = readTodosFromFile();
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const [deleteTodo] = todos.splice(index, 1);
      writeTodosToFile(todos);
      return deleteTodo;
    }
    return null;
  },
};
