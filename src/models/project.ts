import { Schema, model, Document } from "mongoose";

interface IProject extends Document {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const projectSchema = new Schema<IProject>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default model<IProject>("Project", projectSchema);
