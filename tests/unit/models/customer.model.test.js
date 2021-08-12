const faker = require('faker');
const { Customer } = require('../../../src/models');

describe('Customer model', () => {
  describe('Customer validation', () => {
    let newCustomer;
    beforeEach(() => {
      newCustomer = {
        customer_id: faker.datatype.uuid(),
        authentication_key: 'abc',
        subscription_url: 'http://abc',
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new Customer(newCustomer).validate()).resolves.toBeUndefined();
    });
  });
});
