const express = require('express');
const commentRoute = require('./comment.route');
const memberRoute = require('./member.route');
const docsRoute = require('./docs.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/orgs',
    route: [commentRoute, memberRoute],
  },
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
