// MySQL connection settings
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'csct',
  password: 'bigChungus69!',
  database: 'csct'
});

connection.connect(err => {
  if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
  }
  console.log('Connected as ID ' + connection.threadId);
});

router.post('/', (req, res) => {
});

// Read All (GET)
router.get('/', (req, res) => {
  connection.query('SELECT * FROM patients', (err, results) => {
      if (err) {
          console.error(err);
          res.status(500).send('Server error');
          return;
      }

      if (results.length === 0) {
          res.status(404).send('Patient not found');
      } else {
          res.json(results);
      }
  });
});

// Read One (GET)
router.get('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM patients WHERE id = ?', [id], (err, results) => {
      if (err) {
          console.error(err);
          res.status(500).send('Server error');
          return;
      }

      if (results.length === 0) {
          res.status(404).send('Patient not found');
      } else {
          res.json(results[0]);
      }
  });
});

// Update (PUT)
router.put('/:id', (req, res) => {
  // ... your code for updating a patient ...
});

// Delete (DELETE)
router.delete('/:id', (req, res) => {
  // ... your code for deleting a patient ...
});


module.exports = router;