const express = require('express')
const userHandler = require('../router_handler/user')

const router = express.Router()
router.get('/user', (req, res) => {
  const msg = {name:'xiaoming',age:20,gender:'男'}
  res.send(msg)
})

router.post('/register', userHandler.register)
router.post('/login',userHandler.login)

module.exports = router