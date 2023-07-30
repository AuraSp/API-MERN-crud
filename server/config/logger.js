const winston = require('winston');
require('winston-mongodb');

//Log date
const now = new Date();

//Logger configurations
const logger = winston.createLogger({
    defaultMeta: { service: 'user-service' },
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.timestamp(),
        winston.format.printf(({
            level,
            message
        }) => `${level}: ${message}, ${now}`)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'server/logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'server/logs/combined.log' }),
        new winston.transports.File({ filename: 'server/logs/info.log', level: 'info' }),

        //Saving logs into MongoDb
        winston.add(new winston.transports.MongoDB({
            db: `${process.env.MONGO_URI}`,
            collection: 'logs',
            options: { useUnifiedTopology: true }
        }
        ))
    ]
});

module.exports = logger;
