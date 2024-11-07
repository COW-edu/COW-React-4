import express from "express";
import { todoController } from "../controllers/todoController";

const router = express.Router();

router.get("/todos", todoController.getTodos);
router.post("/todos", todoController.createTodo);
router.put("/todos/:id", todoController.updateTodo);
router.delete("/todos/:id", todoController.deleteTodo);

export default router;
