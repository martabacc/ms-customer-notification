const { Notification } = require('../../../src/models');
const NotificationService = require('../../../src/services/notification.service');

jest.mock('../../../src/models', () => ({
  Notification: {
    find: jest.fn(),
    findOneAndUpdate: jest.fn(),
    update: jest.fn(),
    create: jest.fn(),
  },
}));

describe('NotificationService', () => {
  const notification_id = 'syopi-123';

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('update', () => {
    test('should call Notification.findOneAndUpdate with correct param', () => {
      const payload = {};

      NotificationService.update(notification_id, payload);

      expect(Notification.findOneAndUpdate).toHaveBeenCalledWith({ notification_id }, payload);
    });
  });

  describe('create', () => {
    test('should call Notification.create with correct param', () => {
      const mockPayload = { sample: 'ABC' };
      NotificationService.create(mockPayload);

      expect(Notification.create).toHaveBeenCalledWith(mockPayload);
    });
  });

  describe('findUndelivered', () => {
    test('should call Notification.findOne with correct param', () => {
      const customer_id = 'abc';
      NotificationService.findUndelivered(customer_id);

      expect(Notification.find).toHaveBeenCalledWith({
        customer_id,
        is_delivered: false,
        is_testing: false,
      });
    });
  });
});
