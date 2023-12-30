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

// Endpoint to edit info
app.put('/info', (req, res) => {
    const updatedInfo = req.body;

// To check if there are any info to update
if (infoArray.length === 0) {
    return res.status(404).json({ message: 'no info found'});
}

// update all info
infoArray.forEach((info) => {
    Object.assign(info, updatedInfo);
});

res.json({ message: ' All info updated successfully', info: infoArray});
});

// Endpoint to delete info
app.delete('/info', (req, res) => {

    // check if there are infos to be deleted
    if (infoArray.length === 0) {
        return res.stauts(404).json({ message: 'nothing to delete'});
    }

// removing all details
infoArray = [];

    res.json({ message: 'All info deleted successfully'});
});

// starting the server
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});