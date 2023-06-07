const express = require('express')
const userHandler = require('../router_handler/user')

const router = express.Router()
/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *       - 测试
 *     summary: GET 测试
 *     description: 用于测试基础 GET 请求的接口
 *     responses:
 *       200:
 *         description: 【成功】 返回 world
 */
router.get('/user', (req, res) => {
  const msg = { name: 'xiaoming', age: 20, gender: '男' }
  res.send(msg)
})

router.post('/register', userHandler.register)
router.post('/login', userHandler.login)

module.exports = router