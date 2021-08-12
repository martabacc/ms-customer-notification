const faker = require('faker');
const { Customer } = require('../../../src/models');

describe('Customer model', () => {
  describe('Customer validation', () => {
    let newCustomer;
    beforeEach(() => {
      newCustomer = {
        customerId: faker.datatype.uuid(),
        authenticationKey: 'abc',
        subscriptionURL: 'http://abc',
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new Customer(newCustomer).validate()).resolves.toBeUndefined();
    });
  });
});
