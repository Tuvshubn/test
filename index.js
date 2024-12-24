
const express = require('express');
const app = express();

app.use(express.json());

app.post('/process', (req, res) => {
    const input = req.body.input;

    if (input === 'A') {
        res.json({ output: 'B' });
    } else {
        res.status(400).json({ error: 'Invalid input, expected "A"' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
