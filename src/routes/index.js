const express = require('express');
const customerRoute = require('./customer.route');
const notificationRoute = require('./notification.route');
const docsRoute = require('./docs.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/customer',
    route: [customerRoute],
  },
  {
    path: '/notification',
    route: [notificationRoute],
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
