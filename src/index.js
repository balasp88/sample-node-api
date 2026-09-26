const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const products = [
  { id: 1, name: 'Laptop Pro', price: 1299.99, category: 'Electronics' },
  { id: 2, name: 'Wireless Headphones', price: 199.99, category: 'Electronics' },
  { id: 3, name: 'Standing Desk', price: 599.99, category: 'Furniture' },
];

// GET /health
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// GET /api/products
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  const result = category
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products;
  res.json({ products: result, total: result.length });
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// POST /api/products
app.post('/api/products', (req, res) => {
  const { name, price, category } = req.body;
  if (!name || price == null || !category) {
    return res.status(400).json({ error: 'name, price and category are required' });
  }
  const product = { id: products.length + 1, name, price, category };
  products.push(product);
  res.status(201).json(product);
});

app.listen(PORT, () => console.log(`Sample Node API running on :${PORT}`));
