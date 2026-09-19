import express, { type Request, type Response } from "express";
import { User } from "../models/user.model";

export const userRoutes = express.Router();

// Create
userRoutes.post("/create-user", async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const user = await User.create(body);

		res.status(201).json({
			success: true,
			user,
		});
	} catch (error: any) {
		console.log(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
});

// Get all users
userRoutes.get("/", async (req: Request, res: Response) => {
	try {
		// filtering using email
		// const users = await User.find({
		// 	email: "john.smith@example.com",
		// });

		const users = await User.find();

		res.status(200).json({
			success: true,
			users,
		});
	} catch (error: any) {
		console.log(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
});

// Get single user by id
userRoutes.get("/:userId", async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId);

		res.status(200).json({
			success: true,
			user,
		});
	} catch (error: any) {
		console.log(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
});

// Update user
userRoutes.patch("/:userId", async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const updatedBody = req.body;
		const user = await User.findByIdAndUpdate(userId, updatedBody, {
			returnDocument: "after",
		});

		res.status(200).json({
			success: true,
			message: "User updated successfully",
			user,
		});
	} catch (error: any) {
		console.log(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
});

// Delete user
userRoutes.delete("/:userId", async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const deletedUser = await User.findByIdAndDelete(userId);

		res.status(200).json({
			success: true,
			message: "User deleted successfully",
			deletedUser,
		});
	} catch (error: any) {
		console.log(error.message);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
});
