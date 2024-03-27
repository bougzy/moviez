
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// MongoDB connection
mongoose.connect('mongodb+srv://hallmarkmanagement54:hallmarkmanagement54@hallmark.9xddgka.mongodb.net/hallmarkmanagement54')
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });





// Allow requests from multiple routes on the frontend domain, including login and register routes
const allowedOrigins = [
  "https://hallmarkmoviesnmystries.vercel.app" // Remove the space before http
  // Add other origins as needed
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Allow cookies and credentials
}));

// Define routes for user and admin operations
app.use('/api/users', require('./routes/usersRoutes')); // This includes the existing routes
// app.use('/api/deposits', require('./routes/depositRoutes')); // Include the new route for deposits

// Route for greeting message
app.get('/', (req, res) => {
  res.send('Welcome to our server!'); // Send a greeting message
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // MongoDB connection
// mongoose.connect('mongodb+srv://hallmarkmanagement54:hallmarkmanagement54@hallmark.9xddgka.mongodb.net/hallmarkmanagement54')
//   .then(() => {
//     console.log('MongoDB connected successfully');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.post('/api/users/login', (req, res) => {
//   // Handle login logic here
//   const { email, password } = req.body;

//   // Example logic: Check if email and password match in the database
//   if (email === 'example@email.com' && password === 'password') {
//     // Return success message or token
//     res.json({ message: 'Login successful' });
//   } else {
//     // Return error message for unsuccessful login
//     res.status(401).json({ message: 'Invalid email or password' });
//   }
// });

// // Greeting route
// app.get('/', (req, res) => {
//   res.send('Welcome to our server!');
// });

// // Start server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

