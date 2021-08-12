const uuid = require('uuid');
const { Customer } = require('../../../src/models');
const CustomerService = require('../../../src/services/customer.service');

jest.mock('../../../src/models', () => ({
  Customer: {
    findOneAndUpdate: jest.fn(),
    findOne: jest.fn(),
  },
}));

jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue('123'),
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

      expect(Customer.findOneAndUpdate).toHaveBeenCalledWith({ customer_id }, payload, { new: true });
    });
  });

  describe('updateAuthKey', () => {
    test('should call Comment.findOneAndUpdate with correct param', () => {
      uuid.v4.mockReturnValue('123');
      const expectedPayload = {
        authentication_key: '123',
      };

      CustomerService.updateAuthKey(customer_id);

      expect(Customer.findOneAndUpdate).toHaveBeenCalledWith({ customer_id }, expectedPayload, { new: true });
    });
  });

  describe('get', () => {
    test('should call Comment.findOne with correct param', () => {
      CustomerService.get(customer_id);

      expect(Customer.findOne).toHaveBeenCalledWith({ customer_id });
    });
  });
});
