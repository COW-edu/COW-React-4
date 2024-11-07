import express from "express";
import { todoController } from "../controllers/todoController";

const router = express.Router();

router.get("/todos", todoController.getTodos);
router.post("/todos", todoController.createTodo);
router.put("/todos/:id", todoController.updateTodo);
router.put("/todos/:id/contents", todoController.updateContentTodo);
router.delete("/todos/:id", todoController.deleteTodo);

export default router;
