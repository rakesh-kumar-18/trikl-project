const express = require("express");
const mongoose = require("mongoose");
const Item = require("./models/Item");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Get all items
app.get("/items", async (req, res) => {
	try {
		const items = await Item.find();
		res.json(items);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Create a new item
app.post("/items", async (req, res) => {
	try {
		const newItem = new Item(req.body);
		await newItem.save();
		res.status(201).json(newItem);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Update an existing item by ID
app.put("/items/:id", async (req, res) => {
	try {
		const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(item);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Delete an item by ID
app.delete("/items/:id", async (req, res) => {
	try {
		await Item.findByIdAndRemove(req.params.id);
		res.json({ message: "Item successfully deleted" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
