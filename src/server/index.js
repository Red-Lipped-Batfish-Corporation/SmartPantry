const express = require('express');
const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config();

const itemController = require('./ItemController');
const recipeController = require('./RecipeController');

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


app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/api/recipes', recipeController.getRecipes, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

//when we have a question mark it means req.query and the colon means we have a value and the ingredients will be replaced by the value on req.body.ingredients
app.get('/api/items?:ingredients', itemController.getItems, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.get('/api/items/expiring-soon', itemController.getItemsExpiringSoon, (req, res) => {
  return res.status(200).json(res.locals.doc);
});

//when we have a question mark it means req.query and the colon means we have a value and the ingredients will be replaced by the value on req.body.ingredients
app.get('/api/recipes?:ingredients', recipeController.getRecipes, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.post('/api/items', itemController.createItem, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.delete('/api/items', itemController.deleteItem, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

//gives default errors unless middleware has own error that gets replaced. So if error comes from middleware, it gets replaced with default error with middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

