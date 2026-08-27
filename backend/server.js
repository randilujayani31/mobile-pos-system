const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'database.json');

app.use(cors());
app.use(express.json());

// Serve Frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Helper to read DB
const readDB = () => {
    if (!fs.existsSync(DB_FILE)) {
        const initialData = {
            products: [
                { id: 1, name: "Tempered Glass (iPhone)", category: "Accessories", buyPrice: 400, price: 850, stock: 25 },
                { id: 2, name: "Fast USB-C Charger", category: "Accessories", buyPrice: 1500, price: 2500, stock: 12 },
                { id: 3, name: "Handsfree (Original)", category: "Accessories", buyPrice: 600, price: 1200, stock: 18 }
            ],
            sales: [],
            repairs: [],
            expenses: []
        };
        fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
    }
    return JSON.parse(fs.readFileSync(DB_FILE));
};

const writeDB = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// --- API ROUTES ---

// Get all system data
app.get('/api/data', (req, res) => {
    res.json(readDB());
});

// Add Product / Inventory Item
app.post('/api/products', (req, res) => {
    const db = readDB();
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        category: req.body.category,
        buyPrice: parseFloat(req.body.buyPrice || 0),
        price: parseFloat(req.body.price),
        stock: parseInt(req.body.stock)
    };
    db.products.push(newProduct);
    writeDB(db);
    res.json({ success: true, product: newProduct });
});

// Process POS Sale & Reduce Stock
app.post('/api/sales', (req, res) => {
    const db = readDB();
    const { items, total, paymentMethod } = req.body;
    
    // Check and reduce stock & calculate cost for profit
    let totalCost = 0;
    for (let cartItem of items) {
        const product = db.products.find(p => p.id === cartItem.id);
        if (product) {
            product.stock -= cartItem.qty;
            totalCost += (product.buyPrice || 0) * cartItem.qty;
        }
    }

    const newSale = {
        id: Date.now(),
        date: new Date().toISOString(),
        items,
        total: parseFloat(total),
        totalCost,
        profit: parseFloat(total) - totalCost,
        paymentMethod
    };
    db.sales.push(newSale);
    writeDB(db);
    res.json({ success: true, sale: newSale });
});

// Add Repair Job Card (Mobile or TV)
app.post('/api/repairs', (req, res) => {
    const db = readDB();
    const newRepair = {
        id: Date.now(),
        date: new Date().toISOString(),
        custName: req.body.custName,
        phoneNo: req.body.phoneNo,
        deviceType: req.body.deviceType, // Mobile Phone or TV
        model: req.body.model,
        issue: req.body.issue,
        advance: parseFloat(req.body.advance || 0),
        estimatedCost: parseFloat(req.body.estimatedCost),
        repairCost: parseFloat(req.body.repairCost || 0), // Cost incurred by shop to fix
        status: 'Pending' // Pending, Repairing, Ready, Completed
    };
    db.repairs.push(newRepair);
    writeDB(db);
    res.json({ success: true, repair: newRepair });
});

// Update Repair Status
app.put('/api/repairs/:id', (req, res) => {
    const db = readDB();
    const repair = db.repairs.find(r => r.id == req.params.id);
    if (repair) {
        repair.status = req.body.status;
        if (req.body.repairCost !== undefined) {
            repair.repairCost = parseFloat(req.body.repairCost);
        }
        writeDB(db);
        res.json({ success: true, repair });
    } else {
        res.status(404).json({ success: false, message: "Job not found" });
    }
});

// Add Shop Expense
app.post('/api/expenses', (req, res) => {
    const db = readDB();
    const newExpense = {
        id: Date.now(),
        date: new Date().toISOString(),
        title: req.body.title,
        amount: parseFloat(req.body.amount)
    };
    db.expenses.push(newExpense);
    writeDB(db);
    res.json({ success: true, expense: newExpense });
});

app.listen(PORT, () => {
    console.log(`Professional POS Server running on port ${PORT}`);
});
