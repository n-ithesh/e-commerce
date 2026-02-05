const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = new User({ email, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for hardcoded admin first (optional, but requested logic implies specific check)
        // Actually, user said "when i enter admin@gmail.com and 1234 that direct to admin dashboard"
        // We can handle the redirection on frontend, but we should verify credentials here.
        // If it's a real user in DB, check DB. If it's meant to be a "superuser" not in DB, we can hardcode.
        // Let's assume admin is also a user or just a specific credential check.
        // Simplest: Check DB for user. 

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
