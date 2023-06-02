
// Requiring module
const express = require('express');
 
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('Ici le Début de la fin, on va crever');
    res.end();
});
 
// Port Number
const PORT = process.env.PORT || 5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));