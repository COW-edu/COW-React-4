import { Request, Response } from "express";
import { TodoModel } from "../models/todoModel";

export const todoController = {
  getTodos: (req: Request, res: Response): void => {
    const todos = TodoModel.getAll();
    res.json(todos);
  },
  createTodo: (req: Request, res: Response): void => {
    const { content, isComplete } = req.body;
    const newTodo = TodoModel.add(content, isComplete);
    res.status(201).json(newTodo);
  },
  updateTodo: (req: Request, res: Response): void => {
    const { id } = req.params;
    const updateTodo = TodoModel.update(parseInt(id));
    if (updateTodo) {
      res.json(updateTodo);
    } else {
      res.status(404).json({ message: "Todo를 찾지 못했습니다." });
    }
  },
  deleteTodo: (req: Request, res: Response): void => {
    const { id } = req.params;
    const deleteTodo = TodoModel.delete(parseInt(id));
    if (deleteTodo) {
      res.json(deleteTodo);
    } else {
      res.status(404).json({ message: "Todo를 찾지 못했습니다." });
    }
  },
};
