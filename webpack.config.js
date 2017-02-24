/**
 * Created by sophia.wang on 17/2/23.
 */
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod')({env: 'production'});
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack.dev')({env: 'development'});
}