const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Environment Variables Demo!');
});

// Config route (for demo only)
app.get('/config', (req, res) => {
    res.json({
        dbHost: process.env.DB_HOST,
        dbUser: process.env.DB_USER,
        apiKey: process.env.API_KEY
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
