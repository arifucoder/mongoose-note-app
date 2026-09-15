import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import { model, Schema } from "mongoose";
const app: Application = express();
app.use(express.json());
const noteSchema = new Schema({
	title: String,
	content: String,
});

const Note = model("Note", noteSchema);

app.post("/create-note", (req: Request, res: Response) => {
	try {
		const { title, content } = req.body;
		const myNote = new Note({
			title,
			content,
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
