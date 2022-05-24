const express = require('express')
const app = express()
const port = 3000

const winston = require('winston');
require('winston-logstash');

winston.add(winston.transports.Logstash,
{
    port: 23434,
    host: '5affe84d-7da9-4c5d-a47a-b5e64c181bd8-ls.logit.io',
    ssl_enable: true,
    max_connect_retries: -1,
});

app.get('/echo', (req, res) => {
  winston.info(req.query.string)
  res.send({string: req.query.string})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
