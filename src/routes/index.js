const express = require('express');
const customerRoute = require('./customer.route');
const docsRoute = require('./docs.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/customer',
    route: [customerRoute],
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
