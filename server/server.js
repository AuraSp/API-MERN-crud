require('dotenv').config();

const logger = require('./config/logger');
const mongoose = require("mongoose");
const app = require("./app");

const PORT = 5000;

mongoose
    .connect(process.env.NODE_ENV == 'production' ? process.env.PROD_MONGO_URI : process.env.DEV_MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        logger.log({
            level: 'warn',
            message: '\u001b[1;33mConnected to Mongo DB'
        });
    });



app.listen(process.env.NODE_ENV == 'production' ? process.env.PROD_SERVER_PORT : PORT, function (err) {
    if (err) {
        logger.log({
            level: 'error',
            message: '\u001b[1;31mError in the server setup'
        });
    } else {
        logger.log({
            level: 'info',
            message: `\u001b[1;37mApp is running on ${process.env.NODE_ENV == 'production' ? process.env.PROD_SERVER_PORT : PORT}`,
        });
    };
})
