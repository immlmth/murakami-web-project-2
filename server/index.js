const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, "data",'data.json');
const usersPath = path.join(__dirname, "data",'users.json');

function readJSON(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

app.post('/api/login', (req, res) => {
    const {name, password} = req.body;
    if (!name || !password ) {
        return res.status(400).json({message: "Please enter something"});
    }

    const users = readJSON(usersPath);

    const user = users.find((u) => u.name === name && u.password === password);

    if (!user) {
        return res.status(401).json({message: "User not found"});
    }

    res.json({message:"Login successful", user: {name}});
});






app.get("/api/data", (req, res) => {
    const data = readJSON(dataPath);
    res.json(data);
})
app.get("/api/books", (req, res) => {
    const data = readJSON(dataPath);
    res.json(data.books);
})
app.get("/api/items", (req, res) => {
    const data = readJSON(dataPath);
    res.json(data.items);
})
app.get("/api/murakami", (req, res) => {
    const data = readJSON(dataPath);
    res.json(data.murakami);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})