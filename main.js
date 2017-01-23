const config = require('config');

const electron = require('./controllers/app.js');
const app = electron.app;
const BrowserWindow = electron.browserWindow;


const logger = require(config.get("globalConfig.paths.utilityPath")).logger;

logger.info("Hello, World!");