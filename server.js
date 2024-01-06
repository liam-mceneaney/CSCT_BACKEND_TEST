
const express = require('express');
const app = express();
const port = 3000;
const patientsRoutes = require('./patientRoutes'); // Import the routes




app.get('/', (req, res) => {
    res.send('ASR SQL DATABASE TESTING!!!');
});

app.use(express.json()); // for parsing application/json
app.use('/patients', patientsRoutes); // Use the routes for '/patients' endpoint

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}.`);
});
