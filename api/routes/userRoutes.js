// // router.js

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Add this middleware to parse the request body
// router.use(express.json());

// router.get('/user', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: 'user@example.com' });
//     res.status(200).json({ user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching user data' });
//   }
// });

// router.post('/updateBalance', async (req, res) => {
//   try {
//     const { newBalance } = req.body;
//     const user = await User.findOneAndUpdate(
//       { email: 'user@example.com' },
//       { $set: { balance: newBalance } },
//       { new: true }
//     );
//     res.status(200).json({ message: 'Balance updated successfully', user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error updating balance' });
//   }
// });

// // User registration route
// router.post('/register', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     // Check if the email is already registered
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       password,
//       balance: 0 // Set initial balance to 0
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Registration failed' });
//   }
// });

// // User login route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await User.findOne({ email });

//     if (!user || user.password !== password) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // You can implement JWT token generation here for authentication

//     res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Login failed' });
//   }
// });

// module.exports = router;
