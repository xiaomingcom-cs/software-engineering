const express = require('express')

const app = new express();
const userRouter = require('./router/user')

app.use('/api', userRouter)

app.listen(81, function () {
  console.log("deal-platform server running at http://127.0.0.1:81")
})