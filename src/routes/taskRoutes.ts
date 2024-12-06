import { Router } from "express";
import { createTask, updateTask } from "../controllers/taskController";

const router = Router();

router.post("/tasks", createTask);
router.put("/tasks", updateTask);

export default router;
