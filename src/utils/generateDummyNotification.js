const generateDummyNotification = (customer_id) => {
  return {
    payment_id: '123123123',
    payment_code: 'XYZ123',
    amount: 50000,
    paid_at: '2020-10-17 07:41:33.866Z',
    external_id: 'order-123',
    customer_id,
  };
};

module.exports = generateDummyNotification;
