const faker = require('faker');
const { Notification } = require('../../../src/models');

describe('Notification model', () => {
  describe('Notification validation', () => {
    let newNotification;

    beforeEach(() => {
      newNotification = {
        payment_id: faker.datatype.uuid(),
        payment_code: faker.datatype.uuid(),
        amount: '100000',
        paid_at: faker.datatype.datetime(),
        external_id: faker.datatype.uuid(),
        customer_id: 'ABC',
        is_delivered: false,
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new Notification(newNotification).validate()).resolves.toBeUndefined();
    });
  });
});
