const http = require('http');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send(`Hi everyone from server`)
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => console.log(`Server listening on ${PORT}`));
// Dockerfile