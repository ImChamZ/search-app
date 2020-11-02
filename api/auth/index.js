const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.send('<h2>Auth Actions<h2/><p>1. login</p>');
  }, 1000);
});

router.get('/login', (req, res) => {
  setTimeout(() => {
    res.send({ profileObj: { name: 'Admin' } });
  }, 1000);
});

module.exports = router;
