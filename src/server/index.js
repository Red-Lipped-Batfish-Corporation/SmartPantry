const express = require('express');
const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config();

const itemController = require('./ItemController');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Server client files from React app
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/api/items', itemController.getItems, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.post('/api/items', itemController.createItem, (req, res) => {
  console.log('res.locals')
  return res.status(200).send(res.locals.doc);
});

app.delete('/api/items', itemController.deleteItem, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.get('*', (req, res) => {
  res.status(404).send('URL is wrong');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
