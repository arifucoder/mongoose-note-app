import { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
	firstName: String,
	lastName: String,
});
