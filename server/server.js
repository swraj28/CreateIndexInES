const express = require('express');
const client = require('./elasticsearch/client');

const createIndexAndStoreDocument = require('./create-index');


const app = express();

const port = 8000;

app.post('/create-index', async (req, res) => {
    try {
      await createIndexAndStoreDocument();
      res.status(200).json({ message: 'Index and document created successfully.' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });
  

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));