var _ = require('lodash');
// const express = require('express')
// const sls = require('serverless-http')
// const app = express()
// app.get('/', async (req, res, next) => {
//   res.status(200).send('Hello Happy Updated123!' + process.env.BUCKET)
// })
// module.exports.server = sls(app)

module.exports.server = (event, context, callback) => {
  console.log('Environment Variable -> ' + process.env.BUCKET)
  console.log('Current Time -> ' + new Date().toTimeString())
  console.log('Payload from CT -> ' + event.Records[0].body)

  var ctBody = _.pick(event.Records[0].body, ['type', 'productProjection', 'removedImageUrls', 'createdAt', 'lastModifiedAt'])
  console.log('Payload from CT -> ' + ctBody)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
      oldmessage: 'Hello Happy Updated123!' + process.env.BUCKET,
      ctPayload: JSON.stringify(event.body)
    }),
  };

  callback(null, response);
};

module.exports.server1 = (event, context, callback) => {
  console.log('Environment Variable -> ' + process.env.BUCKET)
  console.log('Current Time -> ' + new Date().toTimeString())
  console.log('Payload from CT -> Nill since this is a get request')
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
      oldmessage: 'Hello Happy Updated123!' + process.env.BUCKET,
      method: 'this is a Get request'
    }),
  };

  callback(null, response);
};