const faker = require('faker');
const { Comment } = require('../../../src/models');

describe('Comment model', () => {
  describe('Comment validation', () => {
    let newComment;
    beforeEach(() => {
      newComment = {
        comment: faker.lorem.text(),
        organizationName: faker.internet.userName(),
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new Comment(newComment).validate()).resolves.toBeUndefined();
    });
  });
});
