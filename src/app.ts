import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import { model, now, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

const noteSchema = new Schema({
	title: { type: String, required: true, trim: true },
	content: { type: String, default: "" },
	category: {
		type: String,
		enum: ["Personal", "Work", "Other"],
		default: "Personal",
	},
	pinned: {
		type: Boolean,
		default: false,
	},
	date: { type: Date, default: Date.now },
	tags: {
		label: { type: String, required: true },
		color: { type: String, default: "green" },
	},
});

const Note = model("Note", noteSchema);

app.post("/notes/create-note", async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const note = await Note.create(body);

		res.status(201).json({
			success: true,
			note,
		});
	} catch (error: any) {
		console.log(error.message);
	}
});

app.get("/notes", async (req, res) => {
	const notes = await Note.find();

	res.status(200).json({
		success: true,
		notes,
	});
});

app.get("/", (req: Request, res: Response) => {
	res.json({
		success: true,
		message: "Welcome to mongoose note app",
	});
});

export default app;
