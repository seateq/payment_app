const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send('Payment service')
});

module.exports = router;