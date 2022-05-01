const express = require('express');
const router = express.Router();
const ig_bot = require('../ig_bot');

router.get('/ig_bot/:userid', (req, res) => res.send('Yoo'));