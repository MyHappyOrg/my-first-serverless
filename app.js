// const express = require('express')
// const sls = require('serverless-http')
// const app = express()
// app.get('/', async (req, res, next) => {
//   res.status(200).send('Hello Happy Updated123!' + process.env.BUCKET)
// })
// module.exports.server = sls(app)

module.exports.server = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
      oldmessage: 'Hello Happy Updated123!' + process.env.BUCKET
    }),
  };

  callback(null, response);
};