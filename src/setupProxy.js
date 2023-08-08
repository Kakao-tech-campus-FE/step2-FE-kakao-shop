const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/join',
    createProxyMiddleware({
      target: 'http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
};
