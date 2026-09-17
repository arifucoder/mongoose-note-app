import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import { noteRoutes } from "./controllers/notes.controller";
import { userRoutes } from "./controllers/user.controller";

const app: Application = express();
app.use(express.json());

app.use("/notes", noteRoutes);
app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
	res.json({
		success: true,
		message: "Welcome to mongoose note app",
	});
});

export default app;
