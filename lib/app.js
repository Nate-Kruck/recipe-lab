const express = require('express');
const Recipe = require('./models/recipe');
const app = express();

app.use(express.json());

//test done
app.post('/api/v1/recipes', (req, res) => {
  Recipe
    .insert(req.body)
    .then(recipe => res.send(recipe));
});

//test done
app.get('/api/v1/recipes', (req, res) => {
  Recipe
    .find()
    .then(recipes => res.send(recipes));
});

//test done
app.get('/api/v1/recipes/:id', (req, res) => {
  Recipe
    .findById(req.params.id)
    .then(recipe => res.send(recipe));
});

//test done
app.put('/api/v1/recipes/:id', (req, res) => {
  Recipe
    .update(req.params.id, req.body)
    .then(recipe => res.send(recipe));
});

//test done
app.delete('/api/v1/recipes/:id', (req, res) => {
  Recipe
    .delete(req.params.id)
    .then(recipe => res.send(recipe));
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
