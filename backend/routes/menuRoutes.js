const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

router.get("/", async (req, res) => {
    const items = await Menu.find();
    res.json(items);
});

router.post("/", async (req, res) => {
    const item = new Menu(req.body);
    await item.save();
    res.json({ message: "Item added" });
});

router.delete("/reset", async (req, res) => {
    await Menu.deleteMany();
    res.json({ message: "Menu reset" });
});

module.exports = router;
