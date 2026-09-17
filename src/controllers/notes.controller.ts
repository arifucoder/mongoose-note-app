import express, { type Request, type Response } from "express";
import { Note } from "../models/notes.model";

export const noteRoutes = express.Router();

noteRoutes.post("/create-note", async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const note = await Note.create(body);

		res.status(201).json({
			success: true,
			note,
		});
	} catch (error: any) {
		console.log(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
});

noteRoutes.get("/", async (req, res) => {
	const notes = await Note.find();

	res.status(200).json({
		success: true,
		notes,
	});
});

noteRoutes.get("/:noteId", async (req, res) => {
	const noteId = req.params.noteId;
	const notes = await Note.findById(noteId);

	res.status(200).json({
		success: true,
		notes,
	});
});

noteRoutes.patch("/:noteId", async (req, res) => {
	const noteId = req.params.noteId;
	const updatedBody = req.body;
	const notes = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });

	res.status(200).json({
		success: true,
		message: "Note updated successfully",
		notes,
	});
});

noteRoutes.delete("/:noteId", async (req, res) => {
	const noteId = req.params.noteId;
	const deletedNotes = await Note.findByIdAndDelete(noteId);

	res.status(200).json({
		success: true,
		message: "Note deleted successfully",
		deletedNotes,
	});
});
