const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

jest.mock('../../src/services/githubRest.service', () => ({
  getUserDetail: jest.fn().mockResolvedValue({}),
}));

describe('Comment Route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    test('should return 200 when all payload are correct', async () => {
      const payload = {
        comment: 'Lorem ipsum',
      };
      await request(app).post('/orgs/abc/comments').send(payload).expect(httpStatus.CREATED);
    });
  });

  describe('get', () => {
    test('should return 200 when all payload are correct', async () => {
      await request(app).get('/orgs/abc/comments').expect(httpStatus.OK);
    });
  });

  describe('delete', () => {
    test('should return 200 when payloads are correct', async () => {
      await request(app).get('/orgs/abc/comments').expect(httpStatus.OK);
    });
  });
});
