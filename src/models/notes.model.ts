import { model, Schema } from "mongoose";

const noteSchema = new Schema(
	{
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
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

export const Note = model("Note", noteSchema);
