const customerService = require('../../../src/services/customer.service');
const customerController = require('../../../src/controllers/customer.controller');

jest.mock('../../../src/services/customer.service', () => ({
  update: jest.fn(),
  get: jest.fn(),
  updateAuthKey: jest.fn(),
}));

describe('CustomerController', () => {
  let mockReq;
  let mockRes;
  let mockSend;

  beforeEach(() => {
    mockSend = jest.fn();
    mockReq = {
      params: {
        organizationName: 'xendit',
      },
    };
    mockRes = {
      status: () => ({ send: mockSend }),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('patch', () => {
    test('should call customerService.update with correct param', async () => {
      mockReq.body = {};
      mockReq.params = { customer_id: '123' };

      await customerController.patch(mockReq, mockRes);

      expect(customerService.update).toHaveBeenCalledWith('123', {});
    });
  });

  describe('updateAuthKey', () => {
    test('should call customerService.update with correct param', async () => {
      mockReq.params = { customer_id: '123' };

      await customerController.updateAuthKey(mockReq, mockRes);

      expect(customerService.updateAuthKey).toHaveBeenCalledWith('123');
    });
  });

  describe('get', () => {
    test('should call customerService.get with correct param', async () => {
      mockReq.params = { customer_id: '123' };

      await customerController.get(mockReq, mockRes);

      expect(customerService.get).toHaveBeenCalledWith('123');
    });
  });
});
