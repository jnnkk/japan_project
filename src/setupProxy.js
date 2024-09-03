const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.koreaexim.go.kr', // 요청을 프록시할 대상 서버
      changeOrigin: true,
    })
  );
};
