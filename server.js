const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, './dist')))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}!`);
});
