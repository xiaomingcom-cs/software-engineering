const express = require('express')
const userRouter = require('./router/user')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const path = require('path')

const app = express();

// 配置 swagger-jsdoc
const options = {
  definition: {
      // swagger 采用的 openapi 版本 不用改
      openapi: '3.0.0',
      // swagger 页面基本信息 自由发挥
      info: {
          title: 'Express Template',
          version: '1.0.0',
      }
  },
  // 重点，指定 swagger-jsdoc 去哪个路由下收集 swagger 注释
  apis: [ path.join(__dirname, '/router/*.js') ]
}



const swaggerSpec = swaggerJSDoc(options)
// 开放 swagger 相关接口，
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
// 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', userRouter)

app.listen(81, function () {
  console.log("deal-platform server running at http://127.0.0.1:81")
})