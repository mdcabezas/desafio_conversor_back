import app from "./app.js";

async function main() {
	app.listen(process.env.PORT || 3001);
	console.log(" Server On port", process.env.PORT);
}

main();