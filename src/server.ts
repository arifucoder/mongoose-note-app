import type { Server } from "http";
import app from "./app.js";
import mongoose from "mongoose";

let server: Server;

const PORT = Number(process.env.PORT) || 5000;

async function main() {
	try {
		await mongoose.connect(process.env.MONGODB_URL as string);
		console.log("connected to database mongodb using mongoose");
		server = app.listen(PORT, () => {
			console.log(`App is listening on port ${PORT}`);
		});
	} catch (error) {
		console.error("Failed to connect to database:", error);
		process.exit(1); // এটা যোগ করা ভালো
	}
}

main();
