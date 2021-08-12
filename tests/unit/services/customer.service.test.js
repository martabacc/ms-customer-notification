const { Customer } = require('../../../src/models');
const CustomerService = require('../../../src/services/customer.service');

jest.mock('../../../src/models', () => ({
  Customer: {
    findOneAndUpdate: jest.fn(),
    findOne: jest.fn(),
  },
}));

jest.mock('uuid', () => ({
  v4: jest.fn().mockResolvedValue('123'),
}));

describe('CustomerService', () => {
  const customer_id = 'syopi-123';

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('update', () => {
    test('should call Comment.findOneAndUpdate with correct param', () => {
      const payload = {};

      CustomerService.update(customer_id, payload);

      expect(Customer.findOneAndUpdate).toHaveBeenCalledWith({ customer_id }, payload);
    });
  });

  describe('updateAuthKey', () => {
    test('should call Comment.findOneAndUpdate with correct param', () => {
      const payload = {
        authentication_key: '123',
      };

      CustomerService.update(customer_id, payload);

      expect(Customer.findOneAndUpdate).toHaveBeenCalledWith({ customer_id }, payload);
    });
  });

  describe('get', () => {
    test('should call Comment.findOne with correct param', () => {
      CustomerService.get(customer_id);

      expect(Customer.findOne).toHaveBeenCalledWith({ customer_id });
    });
  });
});
