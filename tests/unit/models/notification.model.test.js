const faker = require('faker');
const { Notification } = require('../../../src/models');

describe('Notification model', () => {
  describe('Notification validation', () => {
    let newNotification;
    beforeEach(() => {
      newNotification = {
        notification_id: faker.datatype.uuid(),
        payload: '{}',
        is_delivered: true,
        customer_id: '123',
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new Notification(newNotification).validate()).resolves.toBeUndefined();
    });
  });
});
