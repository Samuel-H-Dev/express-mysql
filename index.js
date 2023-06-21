import express from "express";
import cors from "cors";
import { getMovies } from "./src/movies.js";

const PORT = 3005

const app = express();
app.use(cors())
app.use(express.json())

app.get("/movies", getMovies)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`)
})
