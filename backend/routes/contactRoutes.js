import express from "express";
import Contact from "../models/ContactModel.js";

const router = express.Router();

// API Route to Handle Contact Form Submission
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
});

export default router;
