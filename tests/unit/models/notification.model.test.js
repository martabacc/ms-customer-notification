const faker = require('faker');
const { Notification } = require('../../../src/models');

describe('Notification model', () => {
  describe('Notification validation', () => {
    let newNotification;
    beforeEach(() => {
      newNotification = {
        notificationId: faker.random.uuid(),
        payload: '{}',
        isDelivered: true,
        customerRecipientID: '123',
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new Notification(newNotification).validate()).resolves.toBeUndefined();
    });
  });
});
