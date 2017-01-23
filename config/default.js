const path = require('path');

const basePath = path.join(__dirname, '..');
const viewPath = path.join(basePath, 'views');
const controllerPath = path.join(basePath, 'controllers');
const utilityPath = path.join(basePath, 'utilities');

const env = process.env.ENVIRONMENT || process.env.NODE_ENV || 'dev';

const paths = {
    basePath: basePath,
    viewPath: viewPath,
    controllerPath: controllerPath,
    utilityPath: utilityPath
};

const globalConfig = {
    env: env,
    paths: paths
};

module.exports = {
    globalConfig: globalConfig
};