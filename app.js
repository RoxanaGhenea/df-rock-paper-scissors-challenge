import express from "express";
import RPSGameSet from "./src/gameSet.js";
const app = express();
const port = 8000;
const indexRouter = express.Router();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.locals.Match = new RPSGameSet();

import firstPlayerRouter from "./routes/1stPlayer.js";
import secondPlayerRouter from "./routes/2ndPlayer.js";
import playerChoicesRouter from "./routes/playerChoices.js";
import cleanupRouter from "./routes/cleanup.js";

indexRouter.get("/", (req, res) => {
    res.render("index");
})

app.use("/", indexRouter);
app.use("/cleanup", cleanupRouter);
app.use("/1stPlayer", firstPlayerRouter);
app.use("/2ndPlayer", secondPlayerRouter);
app.use("/playerChoices", playerChoicesRouter);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});

export default app;