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
    res.send({
      success: true,
      result : mockPayment
    });
    return;
  }

  const isNotEnoughFunds = geRandomBoolean();

  if (isNotEnoughFunds) {
    res.send({
      success: false,
      error  : 'Not enough funds'
    });

    return;
  }

  const isPaymentGatewayDown = geRandomBoolean();

  if (isPaymentGatewayDown) {
    res.send({
      success: false,
      error  : 'Payment gateway is down'
    });

    return;
  }

  res.status(500).send({
    success: false,
    error  : 'Mock error reason'
  });
});

module.exports = router;
