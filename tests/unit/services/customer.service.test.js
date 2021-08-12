const { Customer } = require('../../../src/models');
const CustomerService = require('../../../src/services/customer.service');

jest.mock('../../../src/models', () => ({
  Customer: {
    findOneAndUpdate: jest.fn(),
  },
}));

jest.mock('uuid', () => ({
  v4: jest.fn().mockResolvedValue('123'),
}));

describe('CustomerService', () => {
  const customerId = 'syopi-123';

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('update', () => {
    test('should call Comment.findOneAndUpdate with correct param', () => {
      const payload = {};

      CustomerService.update(customerId, payload);

      expect(Customer.findOneAndUpdate).toHaveBeenCalledWith({ customerId }, payload);
    });
  });

  describe('updateAuthKey', () => {
    test('should call Comment.findOneAndUpdate with correct param', () => {
      const payload = {
        authenticationKey: '123',
      };

      CustomerService.update(customerId, payload);

      expect(Customer.findOneAndUpdate).toHaveBeenCalledWith({ customerId }, payload);
    });
  });
});
