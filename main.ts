import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.errors({ stack: true }), winston.format.timestamp(), winston.format.cli()),
    transports: [new winston.transports.Console()],
  });

logger.info("We good.")