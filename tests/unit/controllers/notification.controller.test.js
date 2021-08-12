const notificationService = require('../../../src/services/notification.service');
const notificationController = require('../../../src/controllers/notification.controller');

jest.mock('../../../src/services/notification.service', () => ({
  create: jest.fn(),
  update: jest.fn(),
  findUndelivered: jest.fn(),
}));

describe('NotificationController', () => {
  const mockReq = {};
  let mockRes;
  let mockSend;

  beforeEach(() => {
    mockSend = jest.fn();
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

  describe('sendNotification', () => {
    test('should call notificationService.create with correct param', async () => {
      mockReq.body = {
        randomAttributes: 'abc',
      };

      await notificationController.sendNotification(mockReq, mockRes);

      expect(notificationService.create).toHaveBeenCalledWith({
        randomAttributes: 'abc',
        is_delivered: false,
      });
    });
  });

  describe('sendDummyNotification', () => {
    test('should call notificationService.create with correct param', async () => {
      mockReq.body = {
        randomAttributes: 'abc',
      };

      await notificationController.sendDummyNotification(mockReq, mockRes);

      expect(notificationService.create).toHaveBeenCalledWith({
        randomAttributes: 'abc',
        is_testing: true,
      });
    });
  });

  describe('triggerRetryDelivery', () => {
    test('should call notificationService.findUndelivered with correct param', async () => {
      mockReq.body = {
        customer_id: 'abc',
      };

      await notificationController.retryDelivery(mockReq, mockRes);

      expect(notificationService.findUndelivered).toHaveBeenCalledWith('abc');
    });
  });

  describe('update', () => {
    test('should call notificationService.findUndelivered with correct param', async () => {
      mockReq.body = { is_delivered: true };
      mockReq.params = { notification_id: 123 };

      await notificationController.update(mockReq, mockRes);

      expect(notificationService.update).toHaveBeenCalledWith({ notification_id: 123 }, { is_delivered: true });
    });
  });
});
