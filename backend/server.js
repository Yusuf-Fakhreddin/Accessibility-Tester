import express from "express";
import pa11y from "pa11y";
import cors from "cors";
import chalk from "chalk";
const PORT = process.env.PORT || 5000;
const app = express();
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(cors());

app.get("/api/test", async (req, res) => {
	if (!req.query.url) {
		res.status(400).json({ error: "url is required" });
	} else {
		const results = await pa11y(req.query.url);
		res.status(200).json(results);
	}
});

app.listen(PORT, () => {
	console.log(
		chalk.yellow(`App listening in ${process.env.NODE_ENV} on port ${PORT}!`)
	);
});
