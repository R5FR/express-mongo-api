import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";

const app = express();

mongoose.connect("mongodb://root:example@localhost:27017/")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(bodyParser.json());

// Routes
app.use(projectRoutes);
app.use(taskRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
