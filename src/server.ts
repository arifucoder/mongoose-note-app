import type { Server } from "http";
import app from "./app.js";

let server: Server;

const PORT = process.env.PORT || 5000;

async function main() {
	try {
		server = app.listen(PORT, () => {
			console.log(`App is listening on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

main();
