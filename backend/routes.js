const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dbPath = path.join(__dirname, 'database.json');

// Helper to read DB
const readDB = () => {
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data);
};

// Helper to write DB
const writeDB = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// 1. Get Products
router.get('/products', (req, res) => {
    const db = readDB();
    res.json(db.products);
});

// 2. Add Product
router.post('/products', (req, res) => {
    const db = readDB();
    const newProduct = { id: Date.now(), ...req.body };
    db.products.push(newProduct);
    writeDB(db);
    res.json({ success: true, product: newProduct });
});

// 3. Get Repair Jobs
router.get('/jobs', (req, res) => {
    const db = readDB();
    res.json(db.jobs);
});

// 4. Add Repair Job Card
router.post('/jobs', (req, res) => {
    const db = readDB();
    const newJob = { id: Date.now(), status: 'Pending', ...req.body };
    db.jobs.push(newJob);
    writeDB(db);
    res.json({ success: true, job: newJob });
});

module.exports = router;
