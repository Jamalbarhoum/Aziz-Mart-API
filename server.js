const express = require('express');
require('dotenv').config();
const db = require('./models/db');
const app = express();
const PORT = process.env.PORT ;

// Middleware
app.use(express.json());

// Sample route to fetch data
app.get('/products', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
