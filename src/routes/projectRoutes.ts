import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";

const router = Router();

router.post("/projects", createProject);
router.get("/projects", getProjects);

export default router;
