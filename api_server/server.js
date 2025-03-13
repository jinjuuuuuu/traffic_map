require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // CORS ���� (��� ��û ���)

app.get('/traffic', async (req, res) => {
    try {
        const response = await axios.get(process.api.env, {
            headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API ��û ����' });
    }
});

app.listen(PORT, () => {
    console.log(`������ http://localhost:${PORT} ���� ���� ��...`);
});
