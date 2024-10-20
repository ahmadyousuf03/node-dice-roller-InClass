const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Dice Roller API!');
});

app.get('/api/roll', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'API is up and running!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
