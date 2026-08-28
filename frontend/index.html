<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SmartPOS Pro - Mobile & TV Repair Management</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    <!-- Chart.js for Graphs -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-slate-100 font-sans antialiased flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between shadow-xl">
        <div>
            <div class="p-6 flex items-center space-x-3 border-b border-slate-800">
                <i class="fa-solid fa-mobile-screen-button text-2xl text-indigo-400"></i>
                <span class="text-white font-bold text-lg tracking-wide">SmartPOS Pro</span>
            </div>
            <nav class="p-4 space-y-2">
                <button onclick="switchPage('dashboard')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-semibold transition nav-btn bg-indigo-600 text-white" id="nav-dashboard">
                    <i class="fa-solid fa-chart-pie w-5"></i><span>Dashboard</span>
                </button>
                <button onclick="switchPage('pos')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-semibold transition nav-btn hover:bg-slate-800 hover:text-white" id="nav-pos">
                    <i class="fa-solid fa-cash-register w-5"></i><span>POS Billing</span>
                </button>
                <button onclick="switchPage('repairs')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-semibold transition nav-btn hover:bg-slate-800 hover:text-white" id="nav-repairs">
                    <i class="fa-solid fa-screwdriver-wrench w-5"></i><span>Repair Jobs</span>
                </button>
                <button onclick="switchPage('inventory')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-semibold transition nav-btn hover:bg-slate-800 hover:text-white" id="nav-inventory">
                    <i class="fa-solid fa-boxes-stacked w-5"></i><span>Inventory & Stock</span>
                </button>
                <button onclick="switchPage('reports')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-semibold transition nav-btn hover:bg-slate-800 hover:text-white" id="nav-reports">
                    <i class="fa-solid fa-file-invoice-dollar w-5"></i><span>Reports & Expenses</span>
                </button>
            </nav>
        </div>
        <div class="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
            Pro Version v2.8
        </div>
    </aside>

    <!-- Main Section -->
    <div class="flex-1 flex flex-col h-full overflow-hidden">
        <header class="bg-white shadow-sm border-b px-8 py-4 flex justify-between items-center z-10">
            <h2 id="page-title" class="text-xl font-bold text-slate-800">Dashboard Overview</h2>
            <div class="flex items-center space-x-4">
                <div id="low-stock-alert-badge" class="hidden px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-xs font-bold animate-pulse cursor-pointer" onclick="switchPage('inventory')">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> Low Stock Alert!
                </div>
                <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold"><i class="fa-solid fa-circle text-[8px] mr-1"></i> Online</span>
            </div>
        </header>

        <main class="flex-1 overflow-y-auto p-8">

            <!-- PAGE 1: DASHBOARD -->
            <div id="page-dashboard" class="page-content space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <p class="text-slate-500 text-sm font-medium">Total Sales Revenue</p>
                        <h3 class="text-2xl font-bold text-slate-800 mt-2" id="dash-sales">Rs. 0.00</h3>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <p class="text-slate-500 text-sm font-medium">Repair Earnings</p>
                        <h3 class="text-2xl font-bold text-slate-800 mt-2" id="dash-repairs">Rs. 0.00</h3>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <p class="text-slate-500 text-sm font-medium">Shop Expenses</p>
                        <h3 class="text-2xl font-bold text-rose-600 mt-2" id="dash-expenses">Rs. 0.00</h3>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <p class="text-slate-500 text-sm font-medium">Net Profit (Accurate)</p>
                        <h3 class="text-2xl font-bold text-indigo-600 mt-2" id="dash-profit">Rs. 0.00</h3>
                    </div>
                </div>

                <!-- Graphs Section (Fixed Responsive wrapper) -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 class="text-lg font-bold text-slate-800 mb-4">Financial Overview Chart</h3>
                        <div class="relative h-64">
                            <canvas id="financeChart"></canvas>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 class="text-lg font-bold text-slate-800 mb-4">Stock Status Summary</h3>
                        <div class="relative h-64">
                            <canvas id="stockChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- PAGE 2: POS BILLING (Dedicated View with Discount & Payment Method) -->
            <div id="page-pos" class="page-content hidden grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-130px)]">
                <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
                    <div class="mb-4">
                        <input type="text" id="search-product" placeholder="Scan Barcode or Type Item Name..." onkeyup="filterProducts()" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                    </div>
                    <div id="pos-product-grid" class="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-2 flex-1"></div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
                    <div>
                        <h3 class="text-lg font-bold text-slate-800 mb-4">Current Cart & Checkout</h3>
                        <div id="cart-items" class="divide-y divide-slate-100 overflow-y-auto max-h-[calc(100vh-420px)] mb-4">
                            <p class="text-slate-400 text-sm text-center py-8">Cart is empty</p>
                        </div>
                    </div>
                    <div class="border-t pt-4 space-y-3">
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600">Discount (Rs.):</span>
                            <input type="number" id="cart-discount" value="0" min="0" onchange="renderCart()" class="w-24 px-2 py-1 border rounded text-right">
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600">Payment Method:</span>
                            <select id="payment-method" class="w-36 px-2 py-1 border rounded">
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                                <option value="Credit">Credit</option>
                            </select>
                        </div>
                        <div class="flex justify-between text-lg font-bold border-t pt-2">
                            <span>Final Total:</span>
                            <span id="cart-total" class="text-indigo-600">Rs. 0.00</span>
                        </div>
                        <button onclick="completeSale()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition shadow">Complete Checkout & Print</button>
                    </div>
                </div>
            </div>

            <!-- PAGE 3: REPAIR JOBS -->
            <div id="page-repairs" class="page-content hidden grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="text-lg font-bold text-slate-800 mb-4">New Repair Job Card</h3>
                    <form id="repair-form" onsubmit="addRepairJob(event)" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Customer Name</label>
                            <input type="text" id="rep-name" required class="w-full px-3 py-2 border rounded-lg">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input type="text" id="rep-phone" required class="w-full px-3 py-2 border rounded-lg">
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Device</label>
                                <select id="rep-type" class="w-full px-3 py-2 border rounded-lg">
                                    <option value="Mobile Phone">Mobile Phone</option>
                                    <option value="Smart TV">Smart TV</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Model</label>
                                <input type="text" id="rep-model" required class="w-full px-3 py-2 border rounded-lg">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Issue</label>
                            <textarea id="rep-issue" rows="2" required class="w-full px-3 py-2 border rounded-lg"></textarea>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Est. Charge</label>
                                <input type="number" id="rep-cost" required class="w-full px-3 py-2 border rounded-lg">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Advance</label>
                                <input type="number" id="rep-advance" value="0" class="w-full px-3 py-2 border rounded-lg">
                            </div>
                        </div>
                        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition">Save Job Card</button>
                    </form>
                </div>
                <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="text-lg font-bold text-slate-800 mb-4">Repair Queue</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 border-b text-slate-600 text-sm">
                                    <th class="p-3">Customer</th>
                                    <th class="p-3">Device / Issue</th>
                                    <th class="p-3">Charges</th>
                                    <th class="p-3">Status</th>
                                    <th class="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody id="repair-table-body" class="divide-y text-sm"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- PAGE 4: INVENTORY -->
            <div id="page-inventory" class="page-content hidden grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="text-lg font-bold text-slate-800 mb-4">Add Stock Item</h3>
                    <form id="product-form" onsubmit="addProduct(event)" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Item Name</label>
                            <input type="text" id="prod-name" required class="w-full px-3 py-2 border rounded-lg">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Barcode Number</label>
                            <input type="text" id="prod-barcode" placeholder="e.g. 1004" class="w-full px-3 py-2 border rounded-lg">
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Buy Price</label>
                                <input type="number" id="prod-buy" required class="w-full px-3 py-2 border rounded-lg">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Sell Price</label>
                                <input type="number" id="prod-price" required class="w-full px-3 py-2 border rounded-lg">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Stock Qty</label>
                                <input type="number" id="prod-stock" required class="w-full px-3 py-2 border rounded-lg">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">Min Stock Alert</label>
                                <input type="number" id="prod-min" value="5" required class="w-full px-3 py-2 border rounded-lg">
                            </div>
                        </div>
                        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition">Save Item</button>
                    </form>
                </div>
                <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="text-lg font-bold text-slate-800 mb-4">Inventory & Low Stock List</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 border-b text-slate-600 text-sm">
                                    <th class="p-3">Item / Barcode</th>
                                    <th class="p-3">Prices</th>
                                    <th class="p-3">Stock Available</th>
                                </tr>
                            </thead>
                            <tbody id="inventory-table-body" class="divide-y text-sm"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- PAGE 5: REPORTS -->
            <div id="page-reports" class="page-content hidden space-y-6">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="text-lg font-bold text-slate-800 mb-4">Record Shop Expense</h3>
                    <form id="expense-form" onsubmit="addExpense(event)" class="flex gap-4">
                        <input type="text" id="exp-title" placeholder="Expense Reason (Rent, Electricity)" required class="flex-1 px-3 py-2 border rounded-lg">
                        <input type="number" id="exp-amount" placeholder="Amount (Rs.)" required class="w-48 px-3 py-2 border rounded-lg">
                        <button type="submit" class="bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-2 rounded-lg transition">Add Expense</button>
                    </form>
                </div>
            </div>

        </main>
    </div>

    <!-- Receipt Print Modal View -->
    <div id="receipt-modal" class="fixed inset-0 bg-black/50 hidden flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-xl shadow-xl w-80 max-w-full font-mono text-xs space-y-3">
            <div class="text-center border-b pb-2">
                <h3 class="font-bold text-sm">SmartPOS PRO SHOP</h3>
                <p class="text-slate-500">Mobile & TV Repairs</p>
                <p id="rec-date" class="text-[10px] text-slate-400 mt-1"></p>
            </div>
            <div id="rec-items" class="space-y-1 border-b pb-2"></div>
            <div class="space-y-1 pt-1">
                <div class="flex justify-between"><span>Subtotal:</span><span id="rec-sub">0.00</span></div>
                <div class="flex justify-between"><span>Discount:</span><span id="rec-disc">0.00</span></div>
                <div class="flex justify-between font-bold text-sm border-t pt-1"><span>Total Paid:</span><span id="rec-total">0.00</span></div>
                <div class="flex justify-between text-[11px] text-slate-600"><span>Method:</span><span id="rec-method">Cash</span></div>
            </div>
            <div class="text-center text-[10px] text-slate-400 pt-2 border-t">
                Thank You Come Again!<br>Software by InfoAxon Solutions
            </div>
            <div class="flex space-x-2 pt-2">
                <button onclick="window.print()" class="flex-1 bg-indigo-600 text-white py-1.5 rounded font-sans font-bold">Print</button>
                <button onclick="closeReceipt()" class="flex-1 bg-slate-200 text-slate-700 py-1.5 rounded font-sans">Close</button>
            </div>
        </div>
    </div>

    <!-- Script Logic -->
    <script>
        let appData = { products: [], sales: [], repairs: [], expenses: [] };
        let cart = [];
        let financeChartInstance = null;
        let stockChartInstance = null;

        async function fetchData() {
            try {
                const res = await fetch('/api/data');
                appData = await res.json();
                renderDashboard();
                renderPOSProducts();
                renderInventory();
                renderRepairs();
                checkLowStock();
            } catch (err) {
                console.error("Fetch error:", err);
            }
        }

        function switchPage(pageId) {
            document.querySelectorAll('.page-content').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.nav-btn').forEach(el => {
                el.classList.remove('bg-indigo-600', 'text-white');
                el.classList.add('hover:bg-slate-800', 'hover:text-white');
            });
            document.getElementById('page-' + pageId).classList.remove('hidden');
            const btn = document.getElementById('nav-' + pageId);
            btn.classList.add('bg-indigo-600', 'text-white');
            btn.classList.remove('hover:bg-slate-800');

            const titles = { dashboard: 'Dashboard Overview', pos: 'POS Billing Counter', repairs: 'Mobile & TV Repair Jobs', inventory: 'Inventory Stock Management', reports: 'Reports & Expenses' };
            document.getElementById('page-title').innerText = titles[pageId];
            if (pageId === 'dashboard') renderCharts();
        }

        function checkLowStock() {
            const lowItems = appData.products.filter(p => p.stock <= (p.minStock || 5));
            const badge = document.getElementById('low-stock-alert-badge');
            if (lowItems.length > 0) {
                badge.classList.remove('hidden');
                badge.innerText = `⚠️ Low Stock (${lowItems.length})`;
            } else {
                badge.classList.add('hidden');
            }
        }

        function renderDashboard() {
            const totalSales = appData.sales.reduce((sum, s) => sum + s.finalTotal, 0);
            const totalRepairs = appData.repairs.reduce((sum, r) => sum + (r.status === 'Completed' ? r.estimatedCost : parseFloat(r.advance || 0)), 0);
            const totalExpenses = appData.expenses.reduce((sum, e) => sum + e.amount, 0);
            const salesProfit = appData.sales.reduce((sum, s) => sum + (s.profit || 0), 0);
            
            // Correct Net Profit Formula: Sales Net Profit + Repair Income - Expenses
            const netProfit = salesProfit + totalRepairs - totalExpenses;

            document.getElementById('dash-sales').innerText = 'Rs. ' + totalSales.toLocaleString();
            document.getElementById('dash-repairs').innerText = 'Rs. ' + totalRepairs.toLocaleString();
            document.getElementById('dash-expenses').innerText = 'Rs. ' + totalExpenses.toLocaleString();
            
            const profitEl = document.getElementById('dash-profit');
            profitEl.innerText = 'Rs. ' + netProfit.toLocaleString();
            profitEl.className = `text-2xl font-bold mt-2 ${netProfit >= 0 ? 'text-indigo-600' : 'text-rose-600'}`;
            
            renderCharts();
        }

        function renderCharts() {
            const totalSales = appData.sales.reduce((sum, s) => sum + s.finalTotal, 0);
            const totalRepairs = appData.repairs.reduce((sum, r) => sum + (r.status === 'Completed' ? r.estimatedCost : parseFloat(r.advance || 0)), 0);
            const totalExpenses = appData.expenses.reduce((sum, e) => sum + e.amount, 0);

            // Finance Chart
            const ctx1 = document.getElementById('financeChart').getContext('2d');
            if (financeChartInstance) financeChartInstance.destroy();
            financeChartInstance = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['Sales Revenue', 'Repair Income', 'Expenses'],
                    datasets: [{
                        label: 'Amount (Rs.)',
                        data: [totalSales, totalRepairs, totalExpenses],
                        backgroundColor: ['#4f46e5', '#10b981', '#f43f5e']
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });

            // Stock Chart
            const lowStockCount = appData.products.filter(p => p.stock <= (p.minStock || 5)).length;
            const normalStockCount = appData.products.length - lowStockCount;
            const ctx2 = document.getElementById('stockChart').getContext('2d');
            if (stockChartInstance) stockChartInstance.destroy();
            stockChartInstance = new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: ['Normal Stock', 'Low Stock'],
                    datasets: [{
                        data: [normalStockCount, lowStockCount],
                        backgroundColor: ['#10b981', '#f59e0b']
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }

        function renderPOSProducts() {
            const grid = document.getElementById('pos-product-grid');
            grid.innerHTML = appData.products.map(p => `
                <div onclick="addToCart(${p.id})" class="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer bg-slate-50 transition flex flex-col justify-between">
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm">${p.name}</h4>
                        <p class="text-xs text-slate-400">Barcode: ${p.barcode}</p>
                        <p class="text-xs text-slate-500 mt-1">Stock: ${p.stock}</p>
                    </div>
                    <div class="mt-4 flex justify-between items-center">
                        <span class="text-indigo-600 font-bold text-sm">Rs. ${p.price}</span>
                        <button class="bg-indigo-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts() {
            const query = document.getElementById('search-product').value.toLowerCase();
            const matched = appData.products.find(p => p.barcode === query);
            if (matched) {
                addToCart(matched.id);
                document.getElementById('search-product').value = '';
                return;
            }
            const filtered = appData.products.filter(p => p.name.toLowerCase().includes(query) || p.barcode.includes(query));
            document.getElementById('pos-product-grid').innerHTML = filtered.map(p => `
                <div onclick="addToCart(${p.id})" class="p-4 border rounded-lg hover:border-indigo-500 cursor-pointer bg-slate-50 transition flex flex-col justify-between">
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm">${p.name}</h4>
                        <p class="text-xs text-slate-400">Barcode: ${p.barcode}</p>
                        <p class="text-xs text-slate-500 mt-1">Stock: ${p.stock}</p>
                    </div>
                    <div class="mt-4 flex justify-between items-center">
                        <span class="text-indigo-600 font-bold text-sm">Rs. ${p.price}</span>
                        <button class="bg-indigo-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `).join('');
        }

        function addToCart(productId) {
            const product = appData.products.find(p => p.id === productId);
            if (!product || product.stock <= 0) return alert("Item out of stock!");
            const existing = cart.find(item => item.id === productId);
            if (existing) {
                if (existing.qty < product.stock) existing.qty++;
                else alert("Max stock reached!");
            } else {
                cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
            }
            renderCart();
        }

        function renderCart() {
            const container = document.getElementById('cart-items');
            if (cart.length === 0) {
                container.innerHTML = '<p class="text-slate-400 text-sm text-center py-8">Cart is empty</p>';
                document.getElementById('cart-total').innerText = 'Rs. 0.00';
                return;
            }
            let subtotal = 0;
            container.innerHTML = cart.map(item => {
                subtotal += item.price * item.qty;
                return `
                    <div class="py-2 flex justify-between items-center text-sm">
                        <div>
                            <p class="font-bold text-slate-800">${item.name}</p>
                            <p class="text-xs text-slate-500">Rs. ${item.price} × ${item.qty}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="font-bold">Rs. ${item.price * item.qty}</span>
                            <button onclick="removeFromCart(${item.id})" class="text-rose-500"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                `;
            }).join('');

            const discount = parseFloat(document.getElementById('cart-discount').value || 0);
            let finalTotal = subtotal - discount;
            if (finalTotal < 0) finalTotal = 0;

            document.getElementById('cart-total').innerText = 'Rs. ' + finalTotal.toFixed(2);
        }

        function removeFromCart(id) {
            cart = cart.filter(i => i.id !== id);
            renderCart();
        }

        async function completeSale() {
            if (cart.length === 0) return alert("Cart empty!");
            const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const discount = parseFloat(document.getElementById('cart-discount').value || 0);
            const finalTotal = total - discount;
            const paymentMethod = document.getElementById('payment-method').value;

            const res = await fetch('/api/sales', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items: cart, total, discount, finalTotal, paymentMethod })
            });
            const result = await res.json();
            if (result.success) {
                showReceipt(result.sale);
                cart = [];
                document.getElementById('cart-discount').value = 0;
                renderCart();
                fetchData();
            }
        }

        function showReceipt(sale) {
            document.getElementById('rec-date').innerText = new Date(sale.date).toLocaleString();
            document.getElementById('rec-items').innerHTML = sale.items.map(i => `
                <div class="flex justify-between">
                    <span>${i.name} x${i.qty}</span>
                    <span>Rs. ${i.price * i.qty}</span>
                </div>
            `).join('');
            document.getElementById('rec-sub').innerText = 'Rs. ' + sale.total.toFixed(2);
            document.getElementById('rec-disc').innerText = 'Rs. ' + sale.discount.toFixed(2);
            document.getElementById('rec-total').innerText = 'Rs. ' + sale.finalTotal.toFixed(2);
            document.getElementById('rec-method').innerText = sale.paymentMethod;
            document.getElementById('receipt-modal').classList.remove('hidden');
        }

        function closeReceipt() {
            document.getElementById('receipt-modal').classList.add('hidden');
        }

        async function addProduct(e) {
            e.preventDefault();
            const prod = {
                name: document.getElementById('prod-name').value,
                barcode: document.getElementById('prod-barcode').value,
                category: "Accessories",
                buyPrice: document.getElementById('prod-buy').value,
                price: document.getElementById('prod-price').value,
                stock: document.getElementById('prod-stock').value,
                minStock: document.getElementById('prod-min').value
            };
            await fetch('/api/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(prod) });
            document.getElementById('product-form').reset();
            fetchData();
            alert("Item Added to Inventory!");
        }

        function renderInventory() {
            document.getElementById('inventory-table-body').innerHTML = appData.products.map(p => `
                <tr class="border-b hover:bg-slate-50">
                    <td class="p-3 font-bold text-slate-800">${p.name}<br><span class="text-xs text-slate-400 font-normal">Barcode: ${p.barcode}</span></td>
                    <td class="p-3 text-slate-600">Buy: Rs. ${p.buyPrice}<br>Sell: Rs. ${p.price}</td>
                    <td class="p-3">
                        <span class="px-2 py-1 rounded text-xs font-bold ${p.stock <= (p.minStock || 5) ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'}">
                            ${p.stock} Units ${p.stock <= (p.minStock || 5) ? '(Low Stock)' : ''}
                        </span>
                    </td>
                </tr>
            `).join('');
        }

        async function addRepairJob(e) {
            e.preventDefault();
            const job = {
                custName: document.getElementById('rep-name').value,
                phoneNo: document.getElementById('rep-phone').value,
                deviceType: document.getElementById('rep-type').value,
                model: document.getElementById('rep-model').value,
                issue: document.getElementById('rep-issue').value,
                estimatedCost: document.getElementById('rep-cost').value,
                advance: document.getElementById('rep-advance').value
            };
            await fetch('/api/repairs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(job) });
            document.getElementById('repair-form').reset();
            fetchData();
            alert("Repair Job Card Saved!");
        }

        async function updateStatus(id, status) {
            await fetch('/api/repairs/' + id, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
            fetchData();
        }

        function renderRepairs() {
            document.getElementById('repair-table-body').innerHTML = appData.repairs.map(r => `
                <tr class="border-b hover:bg-slate-50">
                    <td class="p-3"><p class="font-bold text-slate-800">${r.custName}</p><p class="text-xs text-slate-500">${r.phoneNo}</p></td>
                    <td class="p-3"><p class="font-medium text-indigo-900">${r.deviceType} - ${r.model}</p><p class="text-xs text-slate-500">${r.issue}</p></td>
                    <td class="p-3"><p class="font-bold">Rs. ${r.estimatedCost}</p><p class="text-xs text-emerald-600">Adv: Rs. ${r.advance}</p></td>
                    <td class="p-3"><span class="px-2 py-1 rounded text-xs font-bold ${r.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${r.status}</span></td>
                    <td class="p-3">
                        <select onchange="updateStatus(${r.id}, this.value)" class="text-xs border rounded p-1">
                            <option value="Pending" ${r.status==='Pending'?'selected':''}>Pending</option>
                            <option value="Repairing" ${r.status==='Repairing'?'selected':''}>Repairing</option>
                            <option value="Ready" ${r.status==='Ready'?'selected':''}>Ready</option>
                            <option value="Completed" ${r.status==='Completed'?'selected':''}>Completed</option>
                        </select>
                    </td>
                </tr>
            `).join('');
        }

        async function addExpense(e) {
            e.preventDefault();
            const exp = { title: document.getElementById('exp-title').value, amount: document.getElementById('exp-amount').value };
            await fetch('/api/expenses', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(exp) });
            document.getElementById('expense-form').reset();
            fetchData();
            alert("Expense Saved!");
        }

        fetchData();
    </script>
</body>
</html>
