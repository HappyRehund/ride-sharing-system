const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/ride-request', createProxyMiddleware({ target: process.env.RIDE_REQUEST_SERVICE_URL, changeOrigin: true }));

app.get('/', (req, res) => {
    res.send('API Gateway is running!');
})

app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});