import { Request, Response } from "express";
import Project from "../models/project";
import mongoose from "mongoose";

export const createProject = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, description } = req.body;

    const newProject = new Project({ name, description });
    const savedProject = await newProject.save();

    return res.status(201).json({ message: "Project created successfully", project: savedProject });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: "An unknown error occurred" });
  }
};

export const getProjects = async (_req: Request, res: Response): Promise<any> => {
  try {
    const projects = await Project.find();
    return res.status(200).json({ projects });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: "An unknown error occurred" });
  }
};

export const deleteProject = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid project ID format" });
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.status(200).json({ message: "Project deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: "An unknown error occurred" });
  }
};
