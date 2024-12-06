import mongoose, { Schema, Document } from "mongoose";

// Interface TypeScript pour une tâche
export interface ITask extends Document {
  name: string;
  description?: string;
  completed: boolean;
  projectId: string; // Déclaré comme une chaîne de caractères
}

// Schéma Mongoose pour une tâche
const TaskSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    projectId: { type: String, required: true }, // projectId comme chaîne de caractères
  },
  { timestamps: true }
);

// Exportation du modèle Task
export default mongoose.model<ITask>("Task", TaskSchema);
