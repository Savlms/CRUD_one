// importing the required 

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// parsering a JSONdata
app.use(bodyParser.json());

// creating an in-memory array to store info

let infoArray = [];

// Endpoint to create  new details
app.post('/info', (req, res) => {
    const newInfo = req.body;
    infoArray.push(newInfo);
    res.status(201).json({message: 'Information created successfully', info: newInfo});
});

// Endpoint to get all infos
app.get('/info', (req, res) => {
    res.json({info: infoArray});
});

// Endpoint to edit info by ID
app.put('/info/:id', (req, res) => {
    const infosId = req.params.id;
    const updatedInfo = req.body;

    // Find info by ID and update
    const infoToUpdate = infoArrayArray.find(info => info.id === infoId);

    if (!infoToUpdate) {
        return res.status(404).json({ message: ' Information not found' });
    }

    Object.assign(infoToUpdate, updatedInfo);

    res.json({ message: 'Information updated successfully', info: infoToUpdate });
});

// Endpoint to delete details by ID
app.delete('/info/:id', (req, res) => {
    const infosId = req.params.id;

    // Remove details by ID
    detailsArray = detailsArray.filter(info => infos.id !== infosId);

    res.json({ message: ' information deleted successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});