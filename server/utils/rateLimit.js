import rateLimit from 'express-rate-limit';

const requestLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: {
    error: "Too many subscription attempts from this IP, please try again after an hour.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default requestLimiter;