const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

  fs.appendFile('D:/coastline/coastline/src/pages/ContactsPage/info.txt', data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
