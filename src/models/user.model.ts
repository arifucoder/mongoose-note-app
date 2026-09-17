import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
	firstName: {
		type: String,
		trim: true,
		required: true,
	},
	lastName: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
		trim: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["user", "admin"],
		default: "user",
	},
});

export const User = model("User", userSchema);
