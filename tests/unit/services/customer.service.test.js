const { Customer } = require('../../../src/models');
const CustomerService = require('../../../src/services/customer.service');

jest.mock('../../../src/models', () => ({
  Customer: {
    findOneAndUpdate: jest.fn(),
  },
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

      expect(Customer.findOneAndUpdate).toHaveBeenCalledWith({customerId}, payload);
    });
  });
});
