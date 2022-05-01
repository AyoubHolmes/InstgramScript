const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const port = process.env.PORT || 4000;
const port = 3000;
const ig_bot = require('./ig_bot');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())

app.get('/ig_bot/:userid', (req, res) => res.send('Yoo'));

app.listen(port, (req, res) => {
    ig_bot.ig_login();
    console.log(`server is running on port ${port}`);
});