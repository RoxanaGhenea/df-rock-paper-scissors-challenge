import express from "express";
const router = express.Router();
import app from "../app.js";

router.post("/", (req, res) => {
    app.locals.Match.clear();
    res.redirect("/");
})

export default router;