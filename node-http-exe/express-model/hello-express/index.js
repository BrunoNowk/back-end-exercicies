const express = require('express');
const api = express();

api.get('/hello', handleHelloWorldRequest);

api.listen(3001, () => {
  console.log('Aplicação ouvindo porta 3001');
});

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('Hello World!');
}
