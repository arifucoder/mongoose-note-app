import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import { model, Schema } from "mongoose";
const app: Application = express();

const noteSchema = new Schema({
	title: String,
	content: String,
});

const Note = model("Note", noteSchema);

app.get("/", (req: Request, res: Response) => {
	res.json({
		success: true,
		message: "Welcome to mongoose note app",
	});
});

export default app;
