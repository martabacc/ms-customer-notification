const customerService = require('../../../src/services/customer.service');
const customerController = require('../../../src/controllers/customer.controller');

jest.mock('../../../src/services/customer.service', () => ({
  update: jest.fn(),
  get: jest.fn(),
  create: jest.fn(),
  updateAuthKey: jest.fn(),
}));

describe('CustomerController', () => {
  let mockReq;
  let mockRes;
  let mockSend;

  beforeEach(() => {
    mockSend = jest.fn();
    mockReq = {};
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
      customerService.get.mockReturnValueOnce({});

      await customerController.patch(mockReq, mockRes);

      expect(customerService.update).toHaveBeenCalledWith('123', {});
    });
  });

  describe('updateAuthKey', () => {
    test('should call customerService.update with correct param', async () => {
      mockReq.params = { customer_id: '123' };
      customerService.get.mockReturnValueOnce({});

      await customerController.updateAuthKey(mockReq, mockRes);

      expect(customerService.updateAuthKey).toHaveBeenCalledWith('123');
    });
  });

  describe('get', () => {
    test('should call customerService.get with correct param', async () => {
      mockReq.params = { customer_id: '123' };
      customerService.get.mockReturnValueOnce({});

      await customerController.get(mockReq, mockRes);

      expect(customerService.get).toHaveBeenCalledWith('123');
    });
  });

  describe('create', () => {
    test('should call customerService.create with correct param', async () => {
      mockReq.body = { sample: '123' };

      await customerController.create(mockReq, mockRes);

      expect(customerService.create).toHaveBeenCalledWith({ sample: '123' });
    });
  });
});
