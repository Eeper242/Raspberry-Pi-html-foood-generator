const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8080;

// Middleware to parse JSON and form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// POST endpoint to receive and save data
app.post('/save', (req, res) => {
  const { text, saveTo } = req.body;

  console.log("Received saveTo:", saveTo);
  console.log("Received text:", text);

  let filePath = '';

  if (saveTo == '1') {
    filePath = path.join(__dirname, 'public', 'Meals', 'MMeals.txt');
  } else if (saveTo == '2') {
    filePath = path.join(__dirname, 'public', 'Meals', 'Soups.txt');
  } else {
    return res.status(400).send('Invalid saveTo value.');
  }

  fs.writeFile(filePath, text, (err) => {
    if (err) {
      console.error('Write error:', err);
      return res.status(500).send('Error saving file.');
    }
    res.send('File saved successfully!');
  });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(` Server running at http://localhost:${port}`);
});