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

app.post("/create-note", (req: Request, res: Response) => {
	try {
		const myNote = new Note({
			title: "My note title",
			content: "My note content will go here!",
		});

		res.json({
			success: true,
			note: myNote,
		});
	} catch (error: any) {
		console.log(error.message);
	}
});

app.get("/", (req: Request, res: Response) => {
	res.json({
		success: true,
		message: "Welcome to mongoose note app",
	});
});

export default app;
