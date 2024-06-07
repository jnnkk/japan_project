const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 프록시를 적용할 경로
    createProxyMiddleware({
      target: 'https://quotation-api-cdn.dunamu.com', // 요청을 프록시할 대상 서버
      changeOrigin: true,
    //   pathRewrite: {
    //     '^/api': '', // 경로에서 /api 부분을 제거
    //   },
    })
  );
};
