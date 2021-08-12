const rateLimit = require('express-rate-limit');

const maxRateInMinutes = (hitCount, minutes) =>
  rateLimit({
    windowMs: minutes * 60 * 1000,
    max: hitCount,
    skipSuccessfulRequests: false,
  });

module.exports = {
  maxRateInMinutes,
};
