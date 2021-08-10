const cors = require('cors');
const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;

require("./helpers/db/mongodb.js")();

app.use(cors());

app.use(express.static('public'));
app.use(express.json());

app.use('/api', require('./routes/api'));

app.get('/api', (req, res) => res.send('Yaaaay'));

app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(port, () => 
    console.log(`Listening On http://localhost:${port}/api`
));

module.exports = app;