const {Router} = require('express');
const router   = Router();

const mockPayment = {
  paymentId        : '321',
  transactionAmount: 4.5,
};

const geRandomBoolean = () => Math.random() > 0.5;

router.post('/', async (req, res) => {
  const isSuccess = geRandomBoolean();

  if (isSuccess) {
    res.send(mockPayment);
    return;
  }

  const isNotEnoughFunds = geRandomBoolean();

  if (isNotEnoughFunds) {
    res.status(400).send({
      reason: 'Not enough funds'
    });

    return;
  }

  const isPaymentGatewayDown = geRandomBoolean();

  if (isPaymentGatewayDown) {
    res.status(500).send({
      reason: 'Payment gateway is down'
    });

    return;
  }

  res.status(500).send({
    reason: 'Mock error reason'
  });
});

module.exports = router;
