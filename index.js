const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api/hello",
  createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true })
);

app.use(
  "/api/app",
  createProxyMiddleware({ target: "http://localhost:3002", changeOrigin: true })
);

app.listen(3000);
